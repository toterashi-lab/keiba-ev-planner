-- Keiba EV Planner core schema
-- Target: PostgreSQL 16+

create table data_sources (
  id bigserial primary key,
  name text not null unique,
  license_scope text not null,
  created_at timestamptz not null default now()
);

create table ingestion_batches (
  batch_id text primary key,
  source_id bigint not null references data_sources(id),
  period_start date not null,
  period_end date not null,
  status text not null check (status in ('queued', 'running', 'complete', 'partial', 'failed')),
  expected_race_count integer,
  imported_race_count integer not null default 0,
  imported_runner_count integer not null default 0,
  imported_result_count integer not null default 0,
  imported_payout_count integer not null default 0,
  payload_hash text,
  started_at timestamptz,
  completed_at timestamptz,
  error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (period_end >= period_start)
);

create table backfill_jobs (
  id bigserial primary key,
  source_id bigint not null references data_sources(id),
  period_start date not null,
  period_end date not null,
  data_spec text not null,
  priority integer not null default 100,
  status text not null default 'queued' check (status in ('queued', 'running', 'complete', 'partial', 'failed', 'blocked')),
  attempt_count integer not null default 0,
  max_attempts integer not null default 5,
  scheduled_after timestamptz not null default now(),
  locked_at timestamptz,
  completed_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (source_id, period_start, period_end, data_spec),
  check (period_end >= period_start)
);

create index backfill_jobs_next_idx on backfill_jobs (status, scheduled_after, priority, period_start);

create table raw_jv_records (
  id bigserial primary key,
  source_id bigint not null references data_sources(id),
  data_spec text not null,
  record_type text not null,
  source_version text,
  race_key text,
  entity_key text,
  observed_at timestamptz not null,
  ingested_at timestamptz not null default now(),
  payload_json jsonb not null,
  payload_hash text not null unique
);

create index raw_jv_records_race_idx on raw_jv_records (race_key, observed_at);
create index raw_jv_records_type_idx on raw_jv_records (data_spec, record_type, observed_at);

create table horses (
  horse_id text primary key,
  name text not null,
  sex text,
  birth_date date,
  sire_id text,
  dam_id text,
  breeder_code text,
  updated_at timestamptz not null default now()
);

create table jockeys (
  jockey_id text primary key,
  name text not null,
  updated_at timestamptz not null default now()
);

create table trainers (
  trainer_id text primary key,
  name text not null,
  stable_area text,
  updated_at timestamptz not null default now()
);

create table races (
  race_id text primary key,
  race_date date not null,
  venue_code text not null,
  race_number integer not null,
  race_name text,
  grade_code text,
  class_condition text,
  surface text,
  distance_m integer,
  turn_direction text,
  weather text,
  going text,
  scheduled_start_at timestamptz,
  actual_start_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (race_date, venue_code, race_number)
);

create table race_entries (
  race_id text not null references races(race_id),
  horse_id text not null references horses(horse_id),
  gate_number integer,
  horse_number integer,
  jockey_id text references jockeys(jockey_id),
  trainer_id text references trainers(trainer_id),
  carried_weight numeric(4,1),
  body_weight integer,
  body_weight_delta integer,
  scratch_status text not null default 'active',
  updated_at timestamptz not null default now(),
  primary key (race_id, horse_id)
);

create table race_results (
  race_id text not null references races(race_id),
  horse_id text not null references horses(horse_id),
  finish_position integer,
  official_time_ms integer,
  margin_code text,
  corner_positions integer[],
  final_sectional_ms integer,
  popularity integer,
  confirmed_at timestamptz,
  primary key (race_id, horse_id)
);

create table race_result_summaries (
  race_id text primary key references races(race_id),
  winner_name text,
  official_course text,
  source_url text not null,
  refund_line_count integer not null default 0,
  observed_at timestamptz not null,
  ingested_at timestamptz not null default now(),
  payload_hash text not null unique
);

create table data_quality_checks (
  id bigserial primary key,
  batch_id text not null references ingestion_batches(batch_id),
  check_name text not null,
  status text not null check (status in ('pass', 'warn', 'fail')),
  expected_count integer,
  actual_count integer,
  details jsonb not null default '{}'::jsonb,
  checked_at timestamptz not null default now(),
  unique (batch_id, check_name)
);

create table raw_source_pages (
  id bigserial primary key,
  source_id bigint not null references data_sources(id),
  request_key text not null,
  page_type text not null,
  source_url text not null,
  payload_sha256 text not null,
  storage_encoding text not null,
  parser_version text not null,
  fetched_at timestamptz not null,
  parsed_at timestamptz,
  unique (source_id, request_key, parser_version)
);

create table odds_ingestion_batches (
  id bigserial primary key,
  source text not null,
  snapshot_kind text not null,
  target_dates date[] not null,
  status text not null check (status in ('running', 'complete', 'failed')),
  meeting_count integer not null default 0,
  race_count integer not null default 0,
  source_runner_count integer not null default 0,
  priced_runner_count integer not null default 0,
  started_at timestamptz not null,
  completed_at timestamptz,
  last_error text
);

create table odds_snapshots (
  id bigserial primary key,
  race_id text not null references races(race_id),
  bet_type text not null,
  selection_key text not null,
  odds numeric(10,2) not null,
  odds_low numeric(10,2) not null,
  odds_high numeric(10,2) not null,
  snapshot_kind text not null,
  batch_id bigint not null references odds_ingestion_batches(id),
  vote_count bigint,
  popularity integer,
  observed_at timestamptz not null,
  ingested_at timestamptz not null default now(),
  unique (race_id, bet_type, selection_key, observed_at)
);

create table odds_quality_checks (
  batch_id bigint not null references odds_ingestion_batches(id) on delete cascade,
  check_name text not null,
  status text not null check (status in ('pass', 'fail')),
  actual_value bigint,
  details text not null,
  checked_at timestamptz not null,
  primary key (batch_id, check_name)
);

create table odds_market_totals (
  batch_id bigint not null references odds_ingestion_batches(id) on delete cascade,
  race_id text not null references races(race_id),
  bet_type text not null,
  vote_count bigint not null check (vote_count >= 0),
  raw_source_page_id bigint not null references raw_source_pages(id),
  primary key (batch_id, race_id, bet_type)
);

create index odds_snapshots_lookup_idx on odds_snapshots (race_id, bet_type, selection_key, observed_at desc);

create table payouts (
  race_id text not null references races(race_id),
  bet_type text not null,
  selection_key text not null,
  payout_yen integer not null,
  popularity integer,
  confirmed_at timestamptz,
  primary key (race_id, bet_type, selection_key)
);

create table feature_sets (
  id bigserial primary key,
  name text not null,
  version text not null,
  source_query_hash text not null,
  created_at timestamptz not null default now(),
  unique (name, version)
);

create table race_entry_features (
  race_id text not null references races(race_id),
  horse_id text not null references horses(horse_id),
  feature_set_id bigint not null references feature_sets(id),
  as_of_time timestamptz not null,
  features jsonb not null,
  primary key (race_id, horse_id, feature_set_id, as_of_time)
);

create table model_runs (
  id bigserial primary key,
  model_name text not null,
  model_version text not null,
  feature_set_id bigint not null references feature_sets(id),
  train_window daterange not null,
  validation_window daterange not null,
  metrics jsonb not null,
  created_at timestamptz not null default now()
);

create table model_quality_gates (
  id bigserial primary key,
  model_run_id bigint references model_runs(id),
  gate_name text not null,
  status text not null check (status in ('pass', 'fail', 'insufficient')),
  metric_value numeric,
  threshold_value numeric,
  details jsonb not null default '{}'::jsonb,
  checked_at timestamptz not null default now()
);

create table predictions (
  id bigserial primary key,
  race_id text not null references races(race_id),
  horse_id text not null references horses(horse_id),
  model_run_id bigint not null references model_runs(id),
  as_of_time timestamptz not null,
  win_probability numeric(8,7),
  place_probability numeric(8,7),
  unique (race_id, horse_id, model_run_id, as_of_time)
);

create table bet_candidates (
  id bigserial primary key,
  race_id text not null references races(race_id),
  bet_type text not null,
  selection_key text not null,
  model_run_id bigint not null references model_runs(id),
  odds_snapshot_id bigint not null references odds_snapshots(id),
  probability numeric(8,7) not null,
  expected_value numeric(10,6) not null,
  edge numeric(10,6) not null,
  suggested_stake_yen integer not null,
  decision_status text not null default 'candidate',
  created_at timestamptz not null default now()
);

create table live_ev_candidates (
  id bigserial primary key,
  race_id text not null,
  snapshot_kind text not null,
  base_batch_id bigint not null,
  exotic_batch_id bigint not null,
  model_version text not null,
  calibration_status text not null,
  bet_type text not null,
  method text not null,
  selection_display text not null,
  ticket_key text not null,
  component_selection_keys jsonb not null,
  component_odds jsonb not null,
  component_market_probabilities jsonb not null,
  component_ability_probabilities jsonb not null,
  points integer not null check (points > 0),
  total_investment_yen integer not null check (total_investment_yen = points * 100),
  expected_return numeric(10,6) not null,
  odds_observed_at timestamptz not null,
  generated_at timestamptz not null,
  unique (race_id, base_batch_id, exotic_batch_id, model_version, bet_type, method, ticket_key)
);

create table live_ev_evaluations (
  candidate_id bigint primary key references live_ev_candidates(id) on delete cascade,
  timing_valid boolean not null,
  odds_age_seconds numeric,
  payout_yen integer not null,
  profit_yen integer not null,
  roi numeric not null,
  evaluated_at timestamptz not null
);

create table live_ev_validation_runs (
  id bigserial primary key,
  model_version text not null,
  generated_at timestamptz not null,
  metrics jsonb not null
);

create table prediction_publications (
  id bigserial primary key,
  race_id text not null,
  model_version text not null,
  prediction_context text not null,
  published_at timestamptz not null,
  odds_observed_at timestamptz,
  content_hash text not null unique,
  created_at timestamptz not null default now()
);

create table prediction_agent_snapshots (
  publication_id bigint not null references prediction_publications(id),
  agent_id text not null,
  agent_name text not null,
  status text not null,
  confidence numeric not null,
  marks jsonb not null,
  opinion text not null,
  primary key (publication_id, agent_id)
);

create table prediction_master_snapshots (
  publication_id bigint primary key references prediction_publications(id),
  marks jsonb not null,
  consensus jsonb not null,
  comment text not null
);

create table prediction_ticket_snapshots (
  id bigserial primary key,
  publication_id bigint not null references prediction_publications(id),
  rank integer not null,
  bet_type text not null,
  method text not null,
  selection_display text not null,
  ticket_keys jsonb not null,
  points integer not null check (points between 1 and 5),
  unit_stake_yen integer not null check (unit_stake_yen = 100),
  total_investment_yen integer not null,
  expected_return numeric,
  decision_status text not null,
  unique (publication_id, bet_type, rank)
);

create table bet_orders (
  id bigserial primary key,
  candidate_id bigint not null references bet_candidates(id),
  final_stake_yen integer not null,
  status text not null,
  idempotency_key text not null unique,
  submitted_at timestamptz,
  settled_at timestamptz,
  audit_note text,
  created_at timestamptz not null default now()
);

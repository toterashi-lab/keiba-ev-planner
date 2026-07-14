import { parseExoticOdds } from "./jra-free-exotic-odds.mjs";

const pair = parseExoticOdds(`<table class="basic narrow-xy umaren"><caption>1</caption><tbody><tr><th scope="row">2</th><td>3.4</td></tr></tbody></table>`, "pw154ou-test");
check("馬連", pair.prices[0], { selectionKey: "1-2", oddsLow: 3.4, oddsHigh: 3.4 });
const wide = parseExoticOdds(`<table class="basic narrow-xy wide"><caption>2</caption><tbody><tr><th scope="row">4</th><td><span class="min">5.1</span>-<span class="max">5.8</span></td></tr></tbody></table>`, "pw155ou-test");
check("ワイド", wide.prices[0], { selectionKey: "2-4", oddsLow: 5.1, oddsHigh: 5.8 });
const trio = parseExoticOdds(`<table class="basic narrow-xy fuku3"><caption>1-3</caption><tbody><tr><th scope="row">5</th><td>12.2</td></tr></tbody></table>`, "pw157ou-test");
check("3連複", trio.prices[0], { selectionKey: "1-3-5", oddsLow: 12.2, oddsHigh: 12.2 });
const trifecta = parseExoticOdds(`<div class="tan3_unit"><h4 class="sub_header"><span class="num">1</span></h4><ul><li><div class="num">1</div><div class="num">2</div><table class="tan3"><tr><th>3</th><td>25.6</td></tr></table></li></ul></div>`, "pw158ou-test");
check("3連単", trifecta.prices[0], { selectionKey: "1-2-3", oddsLow: 25.6, oddsHigh: 25.6 });

function check(name, actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(`${name}: ${JSON.stringify(actual)}`);
  console.log(`OK ${name}: ${actual.selectionKey} ${actual.oddsLow}`);
}

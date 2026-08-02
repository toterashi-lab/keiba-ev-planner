Option Explicit

If WScript.Arguments.Count = 0 Then WScript.Quit 64

Dim shell, command, index, exitCode
Set shell = CreateObject("WScript.Shell")
command = "powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File " & QuoteArgument(WScript.Arguments(0))
For index = 1 To WScript.Arguments.Count - 1
  command = command & " " & QuoteArgument(WScript.Arguments(index))
Next

exitCode = shell.Run(command, 0, True)
WScript.Quit exitCode

Function QuoteArgument(value)
  QuoteArgument = Chr(34) & Replace(CStr(value), Chr(34), Chr(34) & Chr(34)) & Chr(34)
End Function

@echo off
setlocal

rem Get the directory of the batch script
set "script_full_path=%~dp0"
echo %script_full_path%

rem Run the Node.js script
node "%script_full_path%\index.js"

endlocal

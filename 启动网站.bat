@echo off
cd /d "%~dp0"
echo 正在启动网站，请稍候……
echo 启动成功后，请在浏览器打开 http://127.0.0.1:8000/
echo 关闭本窗口即可停止网站。
".venv\Scripts\python.exe" -m mkdocs serve
pause

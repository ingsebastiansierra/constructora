@echo off
echo ========================================
echo  INICIANDO SERVIDOR DE DESARROLLO
echo  Futuristic Construction Website
echo ========================================
echo.

if not exist "node_modules" (
    echo ERROR: Las dependencias no estan instaladas!
    echo Por favor ejecuta INSTALAR.bat primero
    echo.
    pause
    exit /b 1
)

echo Iniciando servidor...
echo El sitio se abrira automaticamente en tu navegador
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

call npm run dev

pause

@echo off
echo ========================================
echo  INSTALACION DEL PROYECTO
echo  Futuristic Construction Website
echo ========================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no esta instalado!
    echo Por favor instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js encontrado!
node --version
echo.

echo Instalando dependencias...
echo Esto puede tomar varios minutos...
echo.

call npm install

if errorlevel 1 (
    echo.
    echo ERROR: Hubo un problema instalando las dependencias
    pause
    exit /b 1
)

echo.
echo ========================================
echo  INSTALACION COMPLETADA!
echo ========================================
echo.
echo Para iniciar el proyecto, ejecuta:
echo   npm run dev
echo.
echo O haz doble clic en INICIAR.bat
echo.
pause

# 🚀 Guía para Desplegar en Vercel

## Opción 1: Despliegue Directo (Más Fácil)

### Paso 1: Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up"
3. Regístrate con GitHub, GitLab o email

### Paso 2: Instalar Vercel CLI
Abre tu terminal y ejecuta:
```bash
npm install -g vercel
```

### Paso 3: Iniciar sesión
```bash
vercel login
```

### Paso 4: Desplegar
Desde la carpeta raíz de tu proyecto, ejecuta:
```bash
vercel
```

Sigue las instrucciones:
- ¿Set up and deploy? → **Yes**
- ¿Which scope? → Selecciona tu cuenta
- ¿Link to existing project? → **No**
- ¿What's your project's name? → **boceto-arquitectos** (o el nombre que prefieras)
- ¿In which directory is your code located? → **./** (presiona Enter)
- ¿Want to override the settings? → **No**

¡Listo! Tu sitio estará en línea en segundos.

### Paso 5: Desplegar a producción
```bash
vercel --prod
```

---

## Opción 2: Despliegue con GitHub (Recomendado para actualizaciones automáticas)

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Crea un nuevo repositorio
3. NO inicialices con README

### Paso 2: Subir tu código a GitHub
Abre tu terminal en la carpeta del proyecto:
```bash
git init
git add .
git commit -m "Initial commit - Boceto Arquitectos Website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### Paso 3: Conectar con Vercel
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Haz clic en "Import Git Repository"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en "Deploy"

¡Listo! Cada vez que hagas push a GitHub, Vercel actualizará automáticamente tu sitio.

---

## 🔧 Configuración Importante

### Variables de Entorno (si las necesitas)
Si tienes API keys o configuraciones sensibles:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega tus variables

### Dominio Personalizado
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

---

## 📱 URLs que obtendrás

Después del despliegue tendrás:
- **URL de producción**: `https://tu-proyecto.vercel.app`
- **URL de preview**: Para cada commit/branch

---

## ✅ Verificación antes de desplegar

Asegúrate de que todo funcione localmente:
```bash
npm run build
npm run preview
```

Si todo se ve bien, ¡estás listo para desplegar!

---

## 🆘 Solución de Problemas

### Error: "Command failed"
```bash
npm install
npm run build
```

### Error: "Module not found"
Verifica que todas las dependencias estén en package.json:
```bash
npm install
```

### Imágenes no cargan
Asegúrate de que las rutas de imágenes sean correctas:
- Usa `/assets/...` para archivos en la carpeta public
- Las imágenes de Unsplash deberían funcionar automáticamente

---

## 📞 Soporte

Si tienes problemas:
- Documentación de Vercel: [vercel.com/docs](https://vercel.com/docs)
- Discord de Vercel: [vercel.com/discord](https://vercel.com/discord)

---

## 🎉 ¡Felicidades!

Tu sitio web de arquitectura estará en línea y accesible desde cualquier parte del mundo.

Comparte tu URL: `https://tu-proyecto.vercel.app`

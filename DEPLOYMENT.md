# 🚀 Guía de Despliegue

## Opciones de Hosting Recomendadas

### 1. Vercel (Recomendado - Gratis)

**Pasos:**
1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Desde la carpeta del proyecto:
   ```bash
   vercel
   ```
4. Sigue las instrucciones en pantalla
5. Tu sitio estará en línea en minutos

**Ventajas:**
- Despliegue automático desde Git
- SSL gratis
- CDN global
- Dominio personalizado gratis

### 2. Netlify (Gratis)

**Pasos:**
1. Crea una cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `build` después de ejecutar `npm run build`
3. O conecta tu repositorio Git para despliegue automático

**Configuración de Build:**
- Build command: `npm run build`
- Publish directory: `build`

### 3. GitHub Pages (Gratis)

**Pasos:**
1. Instala gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Agrega estos scripts a `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Agrega la base URL en `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/nombre-del-repo/',
     // ... resto de la configuración
   })
   ```

4. Despliega:
   ```bash
   npm run deploy
   ```

### 4. Hosting Tradicional (cPanel, etc.)

**Pasos:**
1. Construye el proyecto:
   ```bash
   npm run build
   ```

2. Sube todo el contenido de la carpeta `build` a tu servidor via FTP

3. Configura el servidor para servir `index.html` en todas las rutas

**Configuración Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📝 Checklist Pre-Despliegue

- [ ] Ejecutar `npm run build` sin errores
- [ ] Probar la build localmente con `npm run preview`
- [ ] Verificar que todas las imágenes y videos carguen
- [ ] Revisar que los enlaces funcionen correctamente
- [ ] Optimizar imágenes y videos para web
- [ ] Configurar variables de entorno si es necesario
- [ ] Actualizar información de contacto
- [ ] Probar en diferentes navegadores
- [ ] Verificar responsive en móviles

## 🔧 Optimizaciones Recomendadas

### Antes de Desplegar:

1. **Optimizar imágenes:**
   - Usa formatos modernos (WebP, AVIF)
   - Comprime las imágenes
   - Usa lazy loading

2. **Optimizar videos:**
   - Comprime los videos
   - Usa múltiples formatos (MP4, WebM)
   - Considera usar un CDN para videos

3. **Performance:**
   - Minimiza el bundle size
   - Usa code splitting
   - Implementa caching

## 🌐 Dominio Personalizado

Para usar tu propio dominio:

1. Compra un dominio (GoDaddy, Namecheap, etc.)
2. Configura los DNS apuntando a tu hosting
3. En Vercel/Netlify, agrega el dominio personalizado
4. Espera la propagación DNS (24-48 horas)

## 📊 Analytics (Opcional)

Considera agregar:
- Google Analytics
- Hotjar para heatmaps
- Facebook Pixel

## 🔒 Seguridad

- Asegúrate de tener HTTPS habilitado
- Configura headers de seguridad
- Mantén las dependencias actualizadas

## 💡 Soporte

Si tienes problemas con el despliegue, contacta al desarrollador.

# 📖 Instrucciones para el Cliente

## 🎯 ¿Qué es este proyecto?

Este es tu sitio web de construcción y arquitectura, completamente funcional y listo para publicar. Incluye:

- ✅ Página de inicio con video de fondo
- ✅ Sección de servicios
- ✅ Galería de proyectos
- ✅ Información sobre la empresa
- ✅ Formulario de contacto
- ✅ Diseño responsive (se ve bien en móviles y tablets)
- ✅ Animaciones modernas y profesionales

## 🚀 Cómo Empezar (Primera Vez)

### Opción 1: Instalación Automática (Recomendado)

1. Haz doble clic en el archivo `INSTALAR.bat`
2. Espera a que termine la instalación (puede tomar 5-10 minutos)
3. Cuando termine, haz doble clic en `INICIAR.bat`
4. Tu sitio se abrirá automáticamente en el navegador

### Opción 2: Instalación Manual

1. Abre la terminal (CMD o PowerShell)
2. Navega a la carpeta del proyecto
3. Ejecuta: `npm install`
4. Cuando termine, ejecuta: `npm run dev`
5. Abre tu navegador en: http://localhost:3000

## 🔄 Uso Diario

Después de la primera instalación, solo necesitas:

1. Hacer doble clic en `INICIAR.bat`
2. O ejecutar `npm run dev` en la terminal

## ✏️ Cómo Personalizar el Contenido

### Cambiar Textos

Los textos principales están en estos archivos:

- `src/components/Navbar.tsx` - Menú de navegación
- `src/components/Hero.tsx` - Sección principal
- `src/components/Services.tsx` - Servicios
- `src/components/Projects.tsx` - Proyectos
- `src/components/About.tsx` - Sobre nosotros
- `src/components/Contact.tsx` - Contacto
- `src/components/Footer.tsx` - Pie de página

### Cambiar Imágenes

1. Coloca tus imágenes en la carpeta `public/images/`
2. Actualiza las rutas en los componentes correspondientes

### Cambiar Colores

Los colores están definidos en `src/styles/globals.css`:

- `--color-primary` - Color principal (azul neón)
- `--color-accent` - Color de acento (morado)
- `--color-background` - Color de fondo

### Cambiar Información de Contacto

En `src/components/Navbar.tsx` y `src/components/Contact.tsx`:
- Teléfono: Busca `3102824812` y reemplázalo
- Email: Busca el email y reemplázalo
- Dirección: Actualiza en el Footer

## 📱 Información de Contacto Actual

- **Empresa:** Boceto Arquitectos + Asociados
- **Teléfono:** 3102824812
- **Secciones:** Inicio, Servicios, Proyectos, Nosotros, Contacto

## 🌐 Cómo Publicar en Internet

Tienes varias opciones (todas son fáciles):

### Opción 1: Vercel (Recomendado - Gratis)

1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta gratis
3. Conecta tu proyecto
4. ¡Listo! Tu sitio estará en línea

### Opción 2: Netlify (Gratis)

1. Ve a [netlify.com](https://netlify.com)
2. Crea una cuenta gratis
3. Arrastra la carpeta del proyecto
4. ¡Listo!

### Opción 3: Hosting Tradicional

1. Ejecuta: `npm run build`
2. Sube la carpeta `build` a tu hosting por FTP
3. Configura el dominio

**Ver más detalles en:** `DEPLOYMENT.md`

## 🆘 Problemas Comunes

### "Node.js no está instalado"

**Solución:** Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/)

### "npm no se reconoce como comando"

**Solución:** Reinicia tu computadora después de instalar Node.js

### El sitio no carga

**Solución:** 
1. Verifica que el servidor esté corriendo
2. Abre http://localhost:3000 en tu navegador
3. Revisa la consola por errores

### Errores al instalar

**Solución:**
1. Elimina la carpeta `node_modules`
2. Ejecuta `npm install` de nuevo
3. Si persiste, ejecuta: `npm cache clean --force`

## 📞 Soporte Técnico

Si tienes problemas que no puedes resolver:

1. Revisa este documento completo
2. Revisa `README.md` para más información técnica
3. Contacta al desarrollador que te entregó este proyecto

## 📋 Checklist de Entrega

Antes de publicar, verifica:

- [ ] Todos los textos están actualizados
- [ ] Las imágenes son las correctas
- [ ] La información de contacto es correcta
- [ ] El sitio funciona en móviles
- [ ] Todos los enlaces funcionan
- [ ] El formulario de contacto funciona
- [ ] Has probado en diferentes navegadores

## 💡 Consejos

1. **Haz cambios pequeños:** Cambia una cosa a la vez y prueba
2. **Guarda copias:** Antes de hacer cambios grandes, copia el proyecto
3. **Prueba en móvil:** Muchos visitantes usarán celulares
4. **Actualiza contenido:** Mantén los proyectos y servicios actualizados

## 🎓 Recursos de Aprendizaje

Si quieres aprender a hacer cambios tú mismo:

- [React en Español](https://es.react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [YouTube: Tutoriales de React](https://www.youtube.com/results?search_query=react+tutorial+español)

---

**¡Tu sitio está listo para impresionar a tus clientes!** 🎉

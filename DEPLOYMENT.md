# Guía de Deployment - Fricolab.com

## 📋 Prerrequisitos

1. Repositorio GitHub: `fricolab/fricolab.github.io`
2. Dominio registrado: `fricolab.com`
3. Acceso a configuración DNS del dominio

## 🚀 Deployment a GitHub Pages

### Paso 1: Build y Deploy

```bash
npm run deploy
```

Este comando:

1. Limpia el directorio `_site/`
2. Compila el sitio con Eleventy
3. Crea archivo `.nojekyll` en `_site/`
4. Publica en la rama `gh-pages`

### Paso 2: Configurar GitHub Pages

1. Ve a **Settings** del repositorio en GitHub
2. Navega a **Pages** en el menú lateral
3. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Haz clic en **Save**

### Paso 3: Configurar Dominio Personalizado

En la misma página de GitHub Pages:

1. En **Custom domain**, introduce: `fricolab.com`
2. Haz clic en **Save**
3. Marca la opción **Enforce HTTPS** (se activará automáticamente tras verificar DNS)

## 🌐 Configuración DNS

Debes configurar los registros DNS en tu proveedor de dominio:

### Opción A: Usar Dominio Raíz (Recomendado)

Añade estos registros **A** para `fricolab.com`:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Opción B: Usar Subdominio www

Si prefieres usar `www.fricolab.com`, añade un registro **CNAME**:

```
Type: CNAME
Name: www
Value: fricolab.github.io
```

### Verificación DNS

Una vez configurado, verifica con:

```bash
dig fricolab.com +noall +answer
```

Deberías ver las IPs de GitHub Pages.

## ✅ Verificación del Deployment

### 1. Comprobar Rama gh-pages

```bash
git checkout gh-pages
ls -la
# Deberías ver: index.html, aviso-legal.html, cookies.html, .nojekyll, CNAME, assets/
git checkout master
```

### 2. Verificar Archivos Críticos en gh-pages

- ✅ `.nojekyll` - Evita procesamiento Jekyll
- ✅ `CNAME` - Contiene "fricolab.com"
- ✅ `index.html` - Página principal
- ✅ `aviso-legal.html` - Aviso legal
- ✅ `cookies.html` - Política de cookies
- ✅ `assets/` - CSS y JS

### 3. Probar el Sitio

Después de 1-2 minutos, visita:

- https://fricolab.com
- https://fricolab.com/aviso-legal.html
- https://fricolab.com/cookies.html

## 🔧 Troubleshooting

### Problema: "404 - There isn't a GitHub Pages site here"

**Causas comunes:**

1. DNS no propagado (esperar 24-48 horas)
2. Archivo CNAME incorrecto o faltante
3. Branch `gh-pages` no configurado correctamente
4. Dominio no verificado en GitHub

**Solución:**

```bash
# Verificar que CNAME esté en _site/ antes de deploy
npm run build
cat _site/CNAME  # Debe mostrar: fricolab.com

# Verificar rama gh-pages
git checkout gh-pages
cat CNAME  # Debe mostrar: fricolab.com
git checkout master

# Re-deploy
npm run deploy
```

### Problema: Rutas de assets rotas

Si CSS/JS no cargan, verifica que las rutas en los layouts usen rutas absolutas desde la raíz:

- ✅ `/assets/css/styles.css`
- ❌ `assets/css/styles.css` (relativa)

### Problema: DNS no resuelve

```bash
# Verificar propagación DNS
dig fricolab.com
nslookup fricolab.com

# Limpiar caché DNS local
sudo systemd-resolve --flush-caches  # Linux
```

### Problema: Certificado SSL no se activa

1. Esperar 24 horas después de configurar DNS
2. GitHub activará HTTPS automáticamente
3. Verificar en Settings > Pages que "Enforce HTTPS" esté marcado

## 📝 Workflow de Desarrollo

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm start

# El sitio estará disponible en http://localhost:8080
```

### Build de Producción

```bash
# Solo compilar
npm run build

# Ver resultado local
npm run serve
# Disponible en http://localhost:3000
```

### Deploy a Producción

```bash
# Deploy completo
npm run deploy

# El sitio estará en https://fricolab.com en 1-2 minutos
```

## 🔐 Configuración de Google Analytics

Antes del primer deploy a producción:

1. Abre `src/assets/js/script.js`
2. En la línea ~310, reemplaza:

```javascript
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

Con tu ID real de Google Analytics 4.

3. Rebuild y redeploy:

```bash
npm run deploy
```

## 📊 Monitorización Post-Deployment

### Verificar Banner de Cookies

1. Visita https://fricolab.com en modo incógnito
2. Verifica que aparece el banner de cookies
3. Prueba "Aceptar todas" y "Solo esenciales"
4. Verifica que Google Analytics se carga solo si aceptas

### Verificar Páginas Legales

- https://fricolab.com/aviso-legal.html (debe tener `noindex`)
- https://fricolab.com/cookies.html (debe tener `noindex`)

### Verificar Responsive

- Desktop (1920px)
- Tablet (768px)
- Móvil (375px)

## 🆘 Soporte

Si encuentras problemas, revisa:

1. GitHub Actions logs en el repositorio
2. GitHub Pages status en Settings > Pages
3. Browser console para errores JavaScript
4. Network tab para verificar carga de assets

## 📅 Mantenimiento

### Actualizar Contenido

1. Edita archivos en `src/`
2. Build local: `npm run build`
3. Verifica: `npm run serve`
4. Deploy: `npm run deploy`

### Actualizar Dependencias

```bash
npm update
npm run build  # Verificar que todo funciona
npm run deploy
```

---

**Última actualización**: 6 de Enero de 2025
**Versión**: 1.0

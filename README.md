# Fricolab - Sitio Web Corporativo

Sitio web profesional rediseñado construido con **Eleventy (11ty)** para atraer a ejecutivos de empresas de IT, marketing y data. Enfocado en resultados de negocio, ROI y conversión.

## 📋 Características Principales

### Diseño Profesional

- **Landing page moderna** con hero section impactante
- **Diseño responsivo** optimizado para desktop, tablet y móvil
- **Animaciones sutiles** que mejoran la experiencia del usuario
- **Paleta de colores corporativa** que transmite confianza y profesionalismo

### Secciones Optimizadas para Conversión

1. **Hero Section**

   - Propuesta de valor clara con estadísticas destacadas
   - CTAs prominentes para captar leads
   - Badges de tecnologías enterprise

2. **Problemas/Soluciones**

   - Identificación clara de pain points empresariales
   - Conexión emocional con el público objetivo

3. **Servicios Detallados**

   - 4 servicios principales con beneficios cuantificables
   - ROI y métricas de negocio destacadas
   - Stack tecnológico visible

4. **Sección ROI**

   - Resultados medibles y comprobados
   - Calculadora de ahorros potenciales
   - Diseño dark elegante para destacar

5. **Proceso de Trabajo**

   - Timeline visual de 4 pasos
   - Entregables claros en cada fase
   - Reducción de incertidumbre del cliente

6. **Casos de Éxito**

   - 3 casos reales con métricas específicas
   - Industrias diversas para ampliar alcance
   - Resultados cuantificables

7. **Por Qué Fricolab**

   - 6 diferenciadores clave
   - Enfoque en valor de negocio vs. tecnología

8. **Formulario de Contacto**
   - Diseño en tarjeta destacada
   - Campos optimizados para calificación de leads
   - Alternativas de contacto directo

## 🎨 Tecnologías Utilizadas

- **Eleventy (11ty)** - Generador de sitios estáticos rápido y flexible
- **Nunjucks** - Motor de plantillas para contenido dinámico
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Diseño moderno con variables CSS y grid/flexbox
- **JavaScript Vanilla** - Interactividad sin dependencias
- **Google Fonts (Inter)** - Tipografía profesional y legible

## 🚀 Cómo Usar

### Instalación

Primero, instala las dependencias:

```bash
npm install
```

### Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm start
```

El sitio estará disponible en: `http://localhost:8080`

### Producción

Para generar el sitio estático optimizado:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `_site/`

### Despliegue a GitHub Pages

Para desplegar el sitio a GitHub Pages:

```bash
npm run deploy
```

Este comando:

1. Limpia la carpeta `_site/`
2. Construye el sitio
3. Despliega a la rama `gh-pages` de tu repositorio GitHub

**Requisitos previos:**

- Tener un repositorio Git configurado
- Tener permisos de push al repositorio
- GitHub Pages configurado en la configuración del repositorio

## 📱 Características Responsivas

El sitio está optimizado para:

- **Desktop**: 1200px+ (experiencia completa)
- **Tablet**: 768px - 1199px (adaptado)
- **Móvil**: <768px (menú hamburguesa, diseño en columna)

## ⚡ Optimizaciones

### Performance

- Sin dependencias externas de JavaScript
- CSS optimizado con variables
- Fuentes web optimizadas con preconnect
- Imágenes optimizadas (emojis en lugar de iconos pesados)

### SEO

- Estructura HTML semántica
- Meta tags configurados
- Headings jerárquicos correctos
- Contenido optimizado para palabras clave

### UX

- Navegación sticky con scroll smooth
- Animaciones al hacer scroll (Intersection Observer)
- Feedback visual en todos los elementos interactivos
- Formulario con validación HTML5

## 🎯 Público Objetivo

El diseño está específicamente orientado a:

- **CTOs y VPs de Tecnología** de empresas medianas y grandes
- **Directores de IT** buscando optimizar infraestructura
- **Directores de Marketing/Data** que necesitan soluciones técnicas
- **Decision makers** enfocados en ROI y resultados medibles

## 📊 Métricas de Conversión

El diseño incluye múltiples puntos de conversión:

- Hero CTA principal (análisis gratuito)
- CTA secundario (ver resultados)
- CTAs en cada servicio
- Formulario de contacto destacado
- Métodos de contacto alternativos

## 🔧 Personalización

### Editar Contenido

**Todo el contenido del sitio está centralizado en un único archivo JSON para facilitar su edición:**

📄 `src/_data/site.json`

Este archivo contiene:

- **Hero section**: Título, subtítulo, estadísticas
- **Servicios**: 4 servicios con beneficios y tecnologías
- **Problemas**: Los 4 pain points principales
- **ROI**: Métricas de retorno de inversión
- **Proceso**: 4 fases del proceso
- **Casos de éxito**: 3 casos con métricas
- **Por qué Fricolab**: 6 diferenciadores
- **Contacto**: Email, teléfono, ubicación

**Para editar cualquier texto:**

1. Abre `src/_data/site.json`
2. Modifica los valores que desees
3. Ejecuta `npm run build` o `npm start` (con hot-reload)
4. Los cambios se reflejan automáticamente

**Ejemplo - Cambiar el título principal:**

```json
"hero": {
  "title": "TU NUEVO TÍTULO AQUÍ",
  ...
}
```

### Colores

Edita las variables CSS en `src/assets/css/styles.css`:

```css
:root {
  --primary-color: #0066cc;
  --primary-dark: #004499;
  --secondary-color: #00a86b;
  /* ... */
}
```

### Formulario

El formulario actualmente muestra un alert. Para producción:

1. Configura un endpoint en tu backend
2. Modifica la función en `script.js` (línea ~95)
3. Implementa el envío real de datos

## 📝 Próximos Pasos para Producción

1. **Configurar Analytics**

   - Google Analytics / Plausible
   - Tracking de conversiones
   - Hotjar para heatmaps

2. **Implementar Backend para Formulario**

   - API endpoint para recibir contactos
   - Integración con CRM
   - Email notifications

3. **Optimizar Imágenes**

   - Reemplazar emojis con logos reales
   - Añadir imágenes de productos/servicios
   - Optimizar para web (WebP, lazy loading)

4. **SEO Avanzado**

   - Sitemap.xml
   - Robots.txt
   - Schema.org markup
   - Open Graph tags

5. **Testing**
   - Cross-browser testing
   - Performance testing (Lighthouse)
   - A/B testing de CTAs

## 📄 Estructura de Archivos

```
/
├── .eleventy.js              # Configuración de Eleventy
├── package.json              # Dependencias del proyecto
├── README.md                 # Este archivo
├── src/
│   ├── index.njk             # Página principal (template Nunjucks)
│   ├── _includes/
│   │   └── layouts/
│   │       └── base.njk      # Layout base del sitio
│   ├── _data/                # Datos globales (opcional)
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css    # Estilos principales
│   │   └── js/
│   │       └── script.js     # JavaScript interactividad
│   └── images/               # Imágenes y recursos
└── _site/                    # Sitio generado (gitignored)
```

## 🎓 Créditos

Diseñado para Fricolab con enfoque en:

- Conversión de leads B2B
- Comunicación de valor técnico a nivel ejecutivo
- Profesionalismo y confianza
- ROI y resultados medibles

---

## 🔄 Eleventy vs HTML Estático

Este sitio usa Eleventy para:

- **Templating con Nunjucks**: Reutilización de layouts y componentes
- **Hot-reload en desarrollo**: Cambios en tiempo real
- **Optimización automática**: Minificación y optimización de assets
- **Fácil extensión**: Agregar nuevas páginas sin duplicar código

**Nota**: Este es un sitio estático generado. Para funcionalidad completa del formulario y analytics, necesitarás configurar servicios backend.

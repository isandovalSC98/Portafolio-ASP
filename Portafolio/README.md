# Portafolio Personal - Ignacio Sandoval

## 🚀 Descripción

Portafolio web personal moderno y atractivo desarrollado con ASP.NET Core MVC. Este proyecto muestra las habilidades, experiencia y proyectos de Ignacio Sandoval, Ingeniero Informático.

## ✨ Características Principales

### 🎨 Diseño Moderno
- **Diseño responsive** que se adapta a todos los dispositivos
- **Paleta de colores profesional** con gradientes modernos
- **Tipografía Inter** para mejor legibilidad
- **Efectos visuales suaves** y animaciones CSS
- **Loading screen** con animación de carga

### 🏠 Secciones del Portafolio

#### Hero Section
- **Animación de escritura** para el nombre
- **Botones de acción** con efectos hover
- **Fondo con gradiente** y partículas flotantes
- **Navegación fija** con efectos de transparencia

#### Sección de Presentación
- **Fondo con patrón geométrico**
- **Texto descriptivo** con sombras y efectos

#### Sección de Habilidades
- **Cards interactivas** con efectos hover
- **Iconos animados** de Bootstrap
- **Información detallada** de tecnologías
- **Efectos de elevación** al hacer hover

#### Sección de Tecnologías
- **Carrusel infinito** de logos de tecnologías
- **Efectos hover** en las imágenes
- **Filtro grayscale** que se remueve al hover

#### Sección de Proyectos
- **Cards modernas** con efectos de hover
- **Overlay interactivo** en las imágenes
- **Badges de tecnologías** utilizadas
- **Lista de características** de cada proyecto
- **Botones de acción** con efectos

#### Timeline de Experiencia Laboral
- **Diseño de timeline** con marcadores animados
- **Cards informativas** con detalles de cada trabajo
- **Responsabilidades detalladas** con iconos
- **Logos de empresas** y badges de tecnologías
- **Efectos de entrada escalonados**

#### Sección de Contacto
- **Formulario moderno** con efectos de focus
- **Información de contacto** con iconos
- **Redes sociales** con animaciones
- **Fondo oscuro** con gradientes sutiles

### 🎭 Animaciones y Efectos

#### JavaScript
- **Scroll reveal** para elementos al hacer scroll
- **Efecto parallax** suave en el hero
- **Animación de escritura** para textos
- **Partículas flotantes** en el hero
- **Smooth scrolling** para navegación interna
- **Efectos hover** en múltiples elementos
- **Botón "Volver arriba"** con animación
- **Formulario interactivo** con feedback visual

#### CSS
- **Transiciones suaves** en todos los elementos
- **Animaciones keyframe** personalizadas
- **Efectos de sombra** dinámicos
- **Gradientes animados** y efectos de blur
- **Responsive design** completo

## 🛠️ Tecnologías Utilizadas

### Backend
- **ASP.NET Core 6.0+**
- **C#**
- **Entity Framework Core**
- **SQL Server**

### Frontend
- **HTML5**
- **CSS3** (Variables CSS, Flexbox, Grid)
- **JavaScript ES6+**
- **Bootstrap 5**
- **Bootstrap Icons**

### Características
- **Responsive Design**
- **Progressive Web App** ready
- **SEO Optimizado**
- **Accesibilidad** mejorada

## 📁 Estructura del Proyecto

```
Portafolio/
├── Controllers/
│   └── HomeController.cs
├── Models/
│   ├── ContactoViewModel.cs
│   ├── DTO.cs
│   ├── ErrorViewModel.cs
│   ├── HomeIndexViewModel.cs
│   └── Persona.cs
├── Views/
│   ├── Home/
│   │   ├── Index.cshtml
│   │   ├── _ExperienciaLaboral.cshtml
│   │   ├── _Presentacion.cshtml
│   │   └── _seccionProjectos.cshtml
│   └── Shared/
│       └── _Layout.cshtml
├── wwwroot/
│   ├── css/
│   │   ├── site.css
│   │   └── style.css
│   ├── js/
│   │   ├── animation.js
│   │   └── site.js
│   └── imagenes/
└── servicios/
    ├── RepositorioProjectos.cs
    └── ServicioEmailGmail.cs
```

## 🚀 Cómo Ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd Portafolio
   ```

2. **Restaurar dependencias**
   ```bash
   dotnet restore
   ```

3. **Ejecutar el proyecto**
   ```bash
   dotnet run
   ```

4. **Abrir en el navegador**
   ```
   https://localhost:5001
   ```

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎯 Características de UX/UI

### Navegación
- **Menú fijo** con efectos de transparencia
- **Smooth scrolling** entre secciones
- **Indicador activo** en la navegación
- **Botón "Volver arriba"** flotante

### Interactividad
- **Efectos hover** en todos los elementos interactivos
- **Animaciones de entrada** escalonadas
- **Feedback visual** en formularios
- **Transiciones suaves** entre estados

### Accesibilidad
- **Contraste adecuado** en textos
- **Navegación por teclado** mejorada
- **Alt text** en imágenes
- **Estructura semántica** HTML

## 🔧 Personalización

### Colores
Los colores se pueden personalizar editando las variables CSS en `wwwroot/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... más variables */
}
```

### Contenido
- **Información personal**: Editar `Views/Home/Index.cshtml`
- **Proyectos**: Modificar `Views/Home/_seccionProjectos.cshtml`
- **Experiencia**: Actualizar `Views/Home/_ExperienciaLaboral.cshtml`
- **Contacto**: Ajustar información en la sección de contacto

## 📈 Optimizaciones Realizadas

### Rendimiento
- **CSS optimizado** con variables y reutilización
- **JavaScript modular** y eficiente
- **Imágenes optimizadas** y responsive
- **Lazy loading** para elementos pesados

### SEO
- **Meta tags** apropiados
- **Estructura HTML** semántica
- **Títulos descriptivos** en cada sección
- **URLs amigables** para SEO

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: i.sandovalc98@gmail.com
- **LinkedIn**: [Ignacio Sandoval](https://www.linkedin.com/in/ignacio-sandoval-cañete-a17599186/)
- **Instagram**: [@ignaciosandoval98](https://www.instagram.com/ignaciosandoval98/)

---

**Desarrollado con ❤️ por Ignacio Sandoval** 
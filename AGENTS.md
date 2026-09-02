# Directrices para Agentes - Instituto Atenea de Estudios Superiores e Investigación

Este archivo define las reglas, convenciones, arquitectura y directrices para agentes de inteligencia artificial y desarrolladores que interactúen con el repositorio **RefactorInstitutoAtenea**.

---

## 1. Descripción del Proyecto

**Instituto Atenea de Estudios Superiores e Investigación** (Fundación Atenea Puebla) es una plataforma web institucional orientada a la difusión de programas académicos (Filosofía, Bioética Latinoamericana, Ciencias Humanas, Educación, Estudios de Género), catálogo editorial, biblioteca digital con acceso restringido y gestión de solicitudes de contacto.

### Stack Tecnológico
- **Backend**: PHP (Vanilla) con arquitectura modular basada en templates e inclusiones (`include 'section/...'`).
- **Manejo de Formularios y Correo**: PHPMailer (SMTP) para envíos de alertas de contacto (`sender.php`).
- **Autenticación / Sesión**: Manejo de sesiones PHP nativas (`$_SESSION`) para control de acceso en `biblioteca.php`.
- **Frontend**:
  - HTML5 semántico
  - CSS3 / Vanilla CSS personalizado (`css/fundacionAtenea.css`)
  - Bootstrap 4.3.1 (Framework de diseño base)
  - FontAwesome 6.5.1 (Iconografía)
  - Animate.css & Waypoints.js (Animaciones y efectos de scroll)
  - jQuery 3.6.0 & Popper.js
  - Tipografía: Google Fonts (*Montserrat*)

---

## 2. Estructura de Directorios

```plaintext
RefactorInstitutoAtenea/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD de GitHub Actions (FTP Deploy a hosting)
├── AGENTS.md                   # Guía y directrices para agentes (este archivo)
├── .gitignore                  # Exclusiones de Git (credenciales, videos, temporales)
├── credenciales.example.php    # Plantilla de credenciales para biblioteca
├── credenciales.php            # Archivo local de credenciales (ignorado en Git)
├── index.php                   # Página principal (Hero carousel, programas, novedades)
├── conocenos.php               # Misión, visión e información institucional
├── contacto.php                # Formulario de contacto y ubicación
├── biblioteca.php              # Catálogo / acceso digital con validación de credenciales
├── editorial.php               # Labores editoriales y publicaciones
├── integrarte.php              # Información del Centro IntegrArte
├── sender.php                  # Procesamiento y envío de correo vía PHPMailer
├── revistaAsuntos.php          # Publicaciones de Revista Asuntos
├── revistaAtenea.php           # Publicaciones de Revista Atenea / Búho de Minerva
├── centroEstudios.php          # Centros de estudio asociados
├── centroFilosofiaHumanismo.php# Centro de Filosofía y Humanismo
├── programa*.php               # Páginas individuales de programas académicos
├── section/                    # Componentes PHP modulares y reutilizables
│   ├── headerBlanco.php        # Header con fondo claro
│   ├── headerAzul.php          # Header institucional azul
│   ├── headerAzulFA.php        # Header alternativo
│   ├── headerLogoBlanco.php    # Header con logo variante
│   ├── footer.php              # Pie de página institucional estándar
│   ├── footerFA.php            # Pie de página variante
│   └── whatsappButton.php      # Botón flotante de contacto directo
├── css/                        # Hojas de estilo
│   └── fundacionAtenea.css     # Estilos globales y reglas de maquetación
├── js/                         # Lógica JavaScript modular por sección
│   ├── general-fundacionAtenea.js # Control general de headers, navegación y estados
│   ├── manejador-libros.js     # Lógica para visualización y filtrado de libros
│   ├── contacto.js             # Validaciones de formulario de contacto
│   └── *-libros.js             # Catálogos de libros por área de estudio
├── phpmailer/                  # Librería PHPMailer (SMTP, Exception, PHPMailer)
├── file/                       # Archivos descargables (PDFs, convocatorias, etc.)
├── img/                        # Recursos gráficos, fotografías y logos
├── favicon/                    # Favicons para navegadores
└── video/                      # Contenido multimedia (archivos .mp4 ignorados en Git)
```

---

## 3. Reglas y Convenciones para el Desarrollo

### 3.1. Modularidad y Reutilización de Código
- **Secciones Comunes**: No duplicar encabezados, pies de página ni botones flotantes en las vistas principales. Reutilizar siempre los componentes ubicados en `section/` mediante `<?php include 'section/<componente>.php';?>`.
- **Scripts y Estilos**:
  - Evitar estilos inline (`style="..."`) salvo cuando sea estrictamente necesario por cálculo dinámico.
  - Al realizar modificaciones estéticas, extender o ajustar `css/fundacionAtenea.css` respetando la paleta institucional (azules institucionales, blancos, grises neutros y tipografía Montserrat).

### 3.2. Seguridad y Manejo de Secretos
- **Credenciales y Configuración**:
  - `credenciales.php` **NUNCA** debe comitearse al repositorio.
  - Al modificar o añadir nuevas variables de configuración, actualizar siempre `credenciales.example.php` con datos ficticios.
  - En `sender.php` y procesadores de correo, asegurar el saneamiento de inputs (`$_POST`) antes de incorporarlos al cuerpo del correo o encabezados.
  - Los mensajes de feedback deben manejarse a través de variables de sesión (`$_SESSION['status']`) y limpiarse tras su renderizado.
  - Los secretos de despliegue (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`) deben administrarse exclusivamente mediante GitHub Repository Secrets.

### 3.3. JavaScript y Comportamiento Dinámico
- Las páginas que utilicen `general-fundacionAtenea.js` deben inicializar la función correspondiente al cargar el DOM (e.g. `showHeader("General")`, asignación de clases activas en navegación).
- Asegurar que las dependencias requeridas (jQuery, Bootstrap JS, Waypoints) estén cargadas en el orden correcto antes de los scripts locales.

### 3.4. Control de Versiones y Limpieza
- No generar ni versionar archivos de respaldo con sufijos como `-bk.php` o `.bak`.
- Respetar las reglas de `.gitignore` para no subir archivos de video pesados (`video/*.mp4`) ni directorios de editores (`.vscode/`, `.idea/`).

---

## 4. Despliegue y CI/CD

El repositorio cuenta con un pipeline de integración y despliegue continuo configurado con **GitHub Actions** (`.github/workflows/deploy.yml`):
- **Disparador**: Todo `push` directo o merge hacia la rama `main`.
- **Mecanismo**: Despliegue automático hacia el hosting mediante acción `SamKirkland/FTP-Deploy-Action@v4.3.5`.
- **Secretos requeridos en GitHub**:
  - `FTP_SERVER`: Dirección del servidor FTP de producción.
  - `FTP_USERNAME`: Usuario de la cuenta FTP.
  - `FTP_PASSWORD`: Contraseña de acceso FTP.

---

## 5. Flujo de Trabajo y Validación Local

### Servidor Local de Desarrollo
Para ejecutar y probar el proyecto localmente sin necesidad de un servidor Apache/Nginx externo:
```bash
php -S localhost:8000
```
Luego acceder desde el navegador a `http://localhost:8000/index.php`.

### Verificación de Cambios
1. **Rutas e Inclusiones**: Verificar que todas las rutas relativas (`css/`, `js/`, `section/`, `img/`, `file/`) resuelvan adecuadamente desde cualquier página raíz.
2. **Formularios**: Comprobar el envío y manejo de errores/éxito en `contacto.php` y validación de sesión en `biblioteca.php`.
3. **Responsividad**: Garantizar que los menús móviles (`navbar-toggler`), carruseles y tablas se adapten correctamente a resoluciones móviles y de escritorio.

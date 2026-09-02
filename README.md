# Instituto Atenea de Estudios Superiores e Investigación

Sitio web institucional oficial de la **Fundación Atenea Puebla / Instituto Atenea de Estudios Superiores e Investigación**. Plataforma enfocada en la difusión de oferta académica de posgrados y diplomados (Filosofía, Bioética, Ciencias Humanas, Educación y Estudios de Género), catálogo editorial, biblioteca digital de acceso restringido y gestión de solicitudes de contacto.

---

## 🛠️ Tecnologías Utilizadas

- **Backend**: PHP (Vanilla) con arquitectura de plantillas modulares (`section/`).
- **Control de Acceso y Formularios**: Sesiones nativas de PHP (`$_SESSION`) y PHPMailer para envíos vía SMTP (`sender.php`).
- **Frontend**:
  - HTML5 & CSS3 (`css/fundacionAtenea.css`)
  - Bootstrap 4.3.1 & jQuery 3.6.0
  - FontAwesome 6.5.1
  - Animate.css & Waypoints.js
  - Tipografía: Montserrat (Google Fonts)
- **CI/CD**: GitHub Actions para despliegue automatizado por FTP.

---

## 🚀 Despliegue y CI/CD

El repositorio cuenta con un flujo de integración y despliegue continuo configurado en `.github/workflows/deploy.yml`:

- Cada `push` a la rama `main` ejecuta un despliegue automático hacia el hosting mediante `SamKirkland/FTP-Deploy-Action`.
- Requiere tener configurados los siguientes **Repository Secrets** en GitHub:
  - `FTP_SERVER`: Servidor FTP del hosting.
  - `FTP_USERNAME`: Usuario de la cuenta FTP.
  - `FTP_PASSWORD`: Contraseña del usuario FTP.

---

## 💻 Entorno de Desarrollo Local

Para correr y probar el proyecto localmente sin necesidad de configurar Apache o Nginx:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/TavoMtz/RefactorInstitutoAtenea.git
   cd RefactorInstitutoAtenea
   ```

2. **Configurar credenciales locales**:
   Copiar la plantilla de credenciales para habilitar el funcionamiento de la biblioteca digital:
   ```bash
   cp credenciales.example.php credenciales.php
   ```
   *(Edita `credenciales.php` con las credenciales de acceso deseadas; este archivo está protegido en `.gitignore`)*.

3. **Iniciar el servidor local de desarrollo**:
   ```bash
   php -S localhost:8000
   ```

4. **Acceder desde el navegador**:
   Abre [http://localhost:8000](http://localhost:8000) o `http://localhost:8000/index.php`.

---

## 📁 Estructura del Proyecto

- `index.php`: Página de inicio y carrusel institucional.
- `section/`: Componentes modulares reutilizables (`headerBlanco.php`, `footer.php`, `whatsappButton.php`, etc.).
- `contacto.php` & `sender.php`: Formulario de contacto y envío de correo vía PHPMailer.
- `biblioteca.php`: Módulo de consulta bibliográfica con validación de credenciales.
- `programa*.php`: Oferta académica detallada por especialidad.
- `editorial.php`, `revista*.php`: Publicaciones y labores editoriales.
- `css/` & `js/`: Estilos CSS y lógica interactiva por sección.

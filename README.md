# Portafolio Personal

Bienvenido/a al repositorio de mi portafolio profesional web, desarrollado con **React**, **Vite** y **Tailwind CSS**.

**Sitio en vivo:** [esmemp.github.io](https://esmemp.github.io)

---

## Sobre Mí

Soy estudiante de **Ingeniería en Software** enfocada en **Inteligencia Artificial**, **Machine Learning**, **Data Science** y desarrollo de software integral. Me apasiona construir soluciones tecnológicas inteligentes, accesibles y con propósito.

---

## Tecnologías Utilizadas

- **Frontend:** React 19, Vite, Tailwind CSS v4
- **Iconos & Componentes:** Lucide React
- **Servicios:** EmailJS (contacto por correo)
- **CI/CD & DevOps:** GitHub Actions (Deploy automático a GitHub Pages y releases automatizados)

---

## Secciones del Portafolio

1. **Hero:** Presentación interactiva y carrusel de habilidades técnicas.
2. **Sobre Mí:** Trayectoria, filosofía y áreas de interés.
3. **Proyectos:** Selección de desarrollos destacados en Web, IoT, IA y Visión Artificial.
4. **Certificaciones:** Formación complementaria en IA, Python, Cloud y Ciencia de Datos.
5. **Contacto:** Formulario funcional integrado con EmailJS.

---

## 🛠️ Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/EsmeMP/EsmeMP.github.io.git
   cd EsmeMP.github.io
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de entorno (Opcional para el formulario de contacto):**
   Crea un archivo `.env` en la raíz con tus claves de EmailJS:
   ```env
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Verificar linter y compilación:**
   ```bash
   npm run lint
   npm run build
   ```

---

## Automatización y CI/CD

El proyecto cuenta con pipelines automatizados en GitHub Actions:

- **Despliegue Continuo (Deploy):** Al hacer push a la rama `main`, se compila y publica automáticamente en **GitHub Pages**.
- **Generación de Releases:** Al subir un tag de versión (`v*`), se ejecuta el linter, se compila el proyecto, se empaqueta el artefacto de producción en un archivo `.zip` y se publica automáticamente el **GitHub Release** con notas de versión.

### Cómo publicar una nueva versión:

```bash
git add .
git commit -m "docs: update README with portfolio documentation"
git push origin main

# Crear y publicar el release
git tag v1.0.3
git push origin v1.0.3
```

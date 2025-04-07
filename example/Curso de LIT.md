# Aterrizando en Lit

## Instalación

### 1. Instalar NVM (Node Version Manager)

NVM permite gestionar distintas versiones de Node.js. Sigue la guía de instalación según tu sistema operativo:

- **Linux / macOS:** [Instrucciones oficiales](https://github.com/nvm-sh/nvm)
- **Windows:** Usa [NVM para Windows](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file)  
  (Descarga `nvm-setup.zip` para evitar problemas de compatibilidad).

### 2. Instalar Node.js (versión 20.17.0)

Una vez instalado NVM, usa estos comandos para instalar y seleccionar la versión recomendada:

```bash
nvm install 20.17.0
nvm use 20.17.0
```

#### Windows (PowerShell)

Para asegurarte de que NVM carga la versión correcta de Node al abrir PowerShell:

1. Verifica si tienes un perfil de configuración:

   ```bash
   Test-Path $PROFILE
   ```

   Si devuelve `false`, crea el archivo con:

   ```bash
   New-Item -Path $PROFILE -ItemType File -Force
   ```

2. Edita el perfil:

   ```bash
   notepad $PROFILE
   ```

3. Agrega esta línea al archivo y guarda los cambios:
   ```bash
   nvm use 20.17.0
   ```

#### Mac/Linux

Para usar esta versión de Node por defecto:

```bash
nvm alias default 20.17.0
```

### 3. Instalar Visual Studio Code

Descarga e instala **VS Code** para un entorno de desarrollo eficiente:  
[https://code.visualstudio.com/](https://code.visualstudio.com/)

---

## Aprendiendo Lit

### Documentación oficial

- [Lit.dev](https://lit.dev/)

### Recursos de aprendizaje

- [Tutorial interactivo de Lit](https://lit.dev/learn/)
- [Ejercicios paso a paso](https://lit.dev/tutorials/intro-to-lit/)

📌 **Sugerencia:** Usa nuestro entorno de desarrollo para practicar con estos ejercicios.

---

## Configuración del entorno de desarrollo

1. Descarga y descomprime el entorno de desarrollo desde este [enlace](https://drive.google.com/file/d/1xUlV0U6_bmsBL3GHPh7YVuMhBNV8KmlC/view?usp=sharing).
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   - Pulsa `o` para abrir el navegador.
   - Pulsa `q` para detener el servidor.
4. Para ejecutar los tests:
   ```bash
   npm run test
   ```
   - Pulsa `q` para salir.

🔹 **Consejo:** Usa `global.scss` para definir estilos comunes, mixins y variables.

---

## Ejercicio incremental propuesto (Proyecto final)

### 1️⃣ Crear un componente de tarjeta

Debe incluir:  
✅ **Imagen**  
✅ **Título**  
✅ **Subtítulo** _(opcional)_  
✅ **Párrafos** _(opcional)_  
✅ **Lista con viñetas** _(opcional)_

---

### 2️⃣ Mejorar el componente

Divídelo en tres secciones:

- **Cabecera:**
  - Imagen
  - Título
  - Subtítulo _(opcional)_
- **Cuerpo:**
  - Párrafos _(opcional)_
  - Lista con viñetas _(opcional)_
- **Pie:**
  - **Botones** (de 0 a 2) con diferentes tipos:
    - **Principal**
    - **Enlace** (texto con apariencia de botón)
    - **Secundario**
  - 📌 **Comportamiento:**
    - En **escritorio**, los botones estarán alineados en una fila.
    - En **móvil**, se mostrarán en columnas.
    - Al hacer clic, se abrirá una **modal** indicando qué botón ha sido pulsado y el título de la tarjeta.

---

### 3️⃣ Mostrar múltiples tarjetas en la página principal

- **Añadir botón de eliminar** en cada tarjeta para eliminarla dinámicamente.
- **Agregar un formulario** para crear nuevas tarjetas desde la interfaz.

---

### 4️⃣ Conectar con una API externa

El componente debe consumir datos desde una API REST. Puedes usar esta API gratuita o cualquier otra de tu elección:

- **[Random User API](https://randomuser.me/api/?results=5&nat=es)**
- **[Documentación de la API](https://randomuser.me/documentation)**

📌 Si decides usar esta API, puedes seguir esta estructura de diseño:  
[Diseño de referencia](https://drive.google.com/file/d/1BdeSiffI68Oc-bLsc1RwAtZ4_MjeiLX4/view?usp=sharing)

---

## Evaluación del ejercicio

Se valorará positivamente la implementación de **tests unitarios**, considerando:  
✔ **Cantidad** de tests  
✔ **Calidad** del código de prueba  
✔ **Cobertura funcional**  
✔ **Utilidad de las pruebas**

---

💡 **Consejo final:** Recuerda seguir las buenas prácticas en estructura, estilos y código modular para facilitar la escalabilidad y el mantenimiento del proyecto. 🚀

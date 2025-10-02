# Calculadora React 🧮

Este repositorio alberga una aplicación de calculadora interactiva desarrollada con **React** y **Vite**, utilizando **TypeScript** para una mayor robustez y mantenibilidad. El proyecto fue concebido como una iniciativa de aprendizaje para explorar y dominar los fundamentos de React, incluyendo la gestión de componentes, el manejo de estados y la comunicación a través de propiedades. Aunque es una calculadora simple en su funcionalidad, sirve como una excelente base para comprender el desarrollo de aplicaciones frontend modernas y eficientes.




## 🌟 Características Principales

Esta calculadora, aunque básica, implementa funcionalidades clave que demuestran los principios de React:

-   **Operaciones Aritméticas Básicas:** Soporte para suma, resta, multiplicación y división.
-   **Interfaz de Usuario Intuitiva:** Un diseño limpio y funcional que simula una calculadora tradicional, facilitando la interacción del usuario.
-   **Manejo de Estado:** Utilización del estado de React para gestionar los valores de entrada, el resultado actual y la operación seleccionada.
-   **Componentes Reutilizables:** La interfaz se construye a partir de componentes modulares (botones, pantalla de visualización) que pueden ser reutilizados y gestionados de forma independiente.
-   **Desarrollo Rápido con Vite:** Aprovecha las ventajas de Vite para un entorno de desarrollo ágil y compilaciones optimizadas.
-   **Tipado Estático con TypeScript:** Mejora la calidad del código y facilita la detección de errores en tiempo de desarrollo gracias al uso de TypeScript.




## 🛠️ Tecnologías Utilizadas

El proyecto `Calculadora-React` se ha construido utilizando las siguientes tecnologías y herramientas modernas:

-   **React:** Una biblioteca de JavaScript para construir interfaces de usuario interactivas y eficientes.
-   **Vite:** Un bundler de próxima generación que ofrece una experiencia de desarrollo frontend extremadamente rápida.
-   **TypeScript:** Un superconjunto tipado de JavaScript que mejora la calidad del código y la productividad del desarrollador.
-   **HTML5:** Para la estructura fundamental de la aplicación web.
-   **CSS3:** Para el estilizado y diseño visual de la calculadora.
-   **npm (Node Package Manager):** Para la gestión de dependencias del proyecto.




## 📂 Estructura del Proyecto

La estructura del proyecto sigue las convenciones de un proyecto React/Vite típico, organizada para una clara separación de responsabilidades:

```
.editorconfig
.eslintrc.cjs
.gitignore
index.html
package.json
package-lock.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
    vite.svg
src/
    App.css
    App.tsx
    index.css
    main.tsx
    assets/
        react.svg
```

-   **`public/`**: Contiene activos estáticos que se sirven directamente, como `vite.svg`.
-   **`src/`**: El directorio principal del código fuente de la aplicación.
    -   **`App.css`**: Estilos CSS específicos para el componente principal `App`.
    -   **`App.tsx`**: El componente raíz de la aplicación, donde se define la lógica principal de la calculadora.
    -   **`index.css`**: Estilos CSS globales de la aplicación.
    -   **`main.tsx`**: El punto de entrada de la aplicación, donde se renderiza el componente `App`.
    -   **`assets/`**: Contiene activos como `react.svg`.
-   **Archivos de Configuración**: Archivos como `vite.config.ts`, `tsconfig.json`, `eslint.config.js` configuran el entorno de desarrollo, la compilación de TypeScript y las reglas de linting.




## ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado el siguiente software en tu sistema:

-   **Node.js:** Versión 16 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
-   **npm (Node Package Manager):** Viene incluido con Node.js. Asegúrate de que esté actualizado (`npm install -g npm@latest`).
-   **(Opcional) Git:** Para clonar el repositorio (`git clone`).




## 🚀 Instalación

Sigue estos pasos para configurar y ejecutar la calculadora en tu entorno local:

1.  **Clonar el Repositorio:**
    Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el repositorio:
    ```bash
    git clone https://github.com/alvaromp14/Calculadora-React.git
    ```

2.  **Navegar al Directorio del Proyecto:**
    Cambia al directorio del proyecto recién clonado:
    ```bash
    cd Calculadora-React
    ```

3.  **Instalar Dependencias:**
    Instala todas las dependencias necesarias del proyecto utilizando npm:
    ```bash
    npm install
    ```




## 💡 Uso

Para iniciar la aplicación en modo de desarrollo y acceder a ella en tu navegador:

1.  **Iniciar el Servidor de Desarrollo:**
    Desde el directorio raíz del proyecto, ejecuta:
    ```bash
    npm run dev
    ```
    Esto iniciará el servidor de desarrollo de Vite y te proporcionará una URL local (generalmente `http://localhost:5173`).

2.  **Abrir en el Navegador:**
    Abre tu navegador web preferido y navega a la URL proporcionada por Vite. Deberías ver la interfaz de la calculadora lista para usar.

### Scripts Disponibles

El archivo `package.json` incluye varios scripts útiles para el desarrollo y despliegue:

-   `npm run dev`: Inicia el servidor de desarrollo local con Vite.
-   `npm run build`: Compila la aplicación para producción, generando los archivos estáticos optimizados en el directorio `dist/`.
-   `npm run preview`: Sirve la versión de producción de la aplicación localmente para una vista previa antes del despliegue.




## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT. Puedes consultar el archivo `LICENSE` (si existe) en el repositorio para más detalles. En ausencia de un archivo `LICENSE` explícito, se considera que este proyecto es solo para fines educativos y de demostración, sin una licencia formal de uso comercial o distribución.


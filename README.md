# Alrededor de los EE.UU. (Versión React + TypeScript)

## Descripción

¡Bienvenido a la fase completa de la migración de **Alrededor de los EE.UU.** a React! En este sprint, consolidamos la arquitectura del proyecto transformando los datos estáticos de desarrollo en una aplicación completamente dinámica conectada a una **API en vivo**, implementando una gestión de estado global eficiente y aplicando flujos de trabajo avanzados para formularios e interactividad.

El proyecto está construido utilizando **Vite** como empaquetador moderno, garantizando un entorno de desarrollo ultra rápido gracias a HMR (Hot Module Replacement)

## 🌐 Demo en Vivo

Puedes ver y probar la galería en funcionamiento entrando al siguiente enlace: 👉 [Ver Portafolio en Vivo](https://avilasanti.github.io/web_project_around_react/)

---

## Tecnologías y Herramientas Utilizadas

- **React 19** & **TypeScript** para un desarrollo seguro y basado en tipado estricto y robusto.
- **Context API** de React para la gestión del estado global.
- **Vite** como entorno de desarrollo y bundler.
- **ESLint** para asegurar la calidad del código (configurado para omitir restricciones de `prop-types` ya que usamos TypeScript).
- **CSS BEM (Block Element Modifier)** para la consistencia de los estilos globales heredados.

---

## Características Implementadas

Se ha modularizado la aplicación dividiendo el marcado antiguo en componentes funcionales e interactivos, añadiendo lógica de servidor:

1. **Componentes de Maquetación Reutilizables:**
   - `Header`: Módulo separado que incluye el logotipo oficial de la aplicación.
   - `Main`: Componente contenedor principal de la sección de perfil y la cuadrícula de tarjetas, ahora alimentado dinámicamente.
   - `Footer`: Pie de página independiente.

2. **Arquitectura de Popups Dinámicos y Estado Centralizado:**
   - El componente `App` actúa como el **"cerebro"** de la aplicación, controlando centralizadamente los estados de los popups (`popup`, `setPopup`) para permitir cierres automáticos tras respuestas exitosas del servidor.
   - Comunicación bidireccional limpia mediante propiedades (`props`) y funciones controladoras como `handleOpenPopup` y `handleClosePopup`.

3. **Contexto Global (`CurrentUserContext`):**
   - Implementación de la **Context API** para compartir los datos del usuario conectado (`currentUser`) y sus funciones de actualización a lo largo de toda la aplicación sin pasar propiedades manualmente a través de múltiples niveles de componentes.

4. **Integración Completa con la API e Inmutabilidad:**
   - **Carga Inicial Asíncrona:** Uso de `Promise.all` y `useEffect` para resolver en paralelo la información del perfil y el listado de tarjetas iniciales del servidor.
   - **Gestión Declarativa de Tarjetas:** Lógica de _Likes_ interactivos utilizando `.map()` para actualizar únicamente la tarjeta mutada, y eliminación de tarjetas mediante `.filter()` para reconstruir el estado sin alterar el arreglo original.
   - **Renderizado Dinámico:** Inserción cronológica inmediata de nuevas tarjetas al principio del contenedor utilizando el operador _spread_ (`[newCard, ...state]`).

5. **Manejo Avanzado de Formularios (Controlados y No Controlados):**
   - **Componentes Controlados (`EditProfile` e `NewCard`):** Sincronización absoluta de los inputs de texto con el estado local (`useState`), inicializados de forma segura para prevenir errores de renderizado.
   - **Componentes No Controlados (`EditAvatar`):** Implementación rigurosa del hook `useRef` para capturar directamente el valor del enlace del avatar del DOM en el evento `submit`, evitando renders innecesarios. Integra control de flujo asíncrono mediante promesas (`.finally()`) para gestionar el botón y validaciones nativas de URL mediante manejadores reactivos.

6. **Experiencia de Usuario Profesional (UX) - _Opcional Añadido_:**
   - **Indicadores de Carga (_Loading States_):** Mutación visual dinámica en los botones de envío (ej. _"Guardando..."_, _"Creando..."_) mientras se resuelven las peticiones HTTP.
   - **Validación en Tiempo Real:** Deshabilitación de botones e inyección de clases bloqueantes si los campos no cumplen con los requisitos mínimos de caracteres o formatos URL.
   - **Popup de Confirmación:** Flujo intermedio de seguridad para almacenar temporalmente una tarjeta (`cardToDelete`) y requerir validación explícita del usuario antes de ejecutar la eliminación definitiva.

---

## 📦 Scripts Disponibles

En la terminal del proyecto, puedes ejecutar los siguientes comandos:

- `npm run dev`: Inicia el servidor de desarrollo local en el puerto **3000** y abre el navegador automáticamente.
- `npm run build`: Compila la aplicación usando el compilador de TypeScript (`tsc`) y genera los archivos optimizados para producción con Vite.
- `npm run lint`: Ejecuta el validador de ESLint para buscar y corregir inconsistencias o errores en el código.
- `npm run preview`: Previsualiza localmente el resultado final compilado para producción.

---

## 📂 Estructura del Código Creado

```text
src/
├── components/
│   ├── Header/
│   │   └── Header.tsx
│   ├── Main/
│   │   ├── Card/
│   │   │   └── Card.tsx
│   │   └── Main.tsx
│   ├── Popup/
│   │   ├── EditAvatar/
│   │   │   └── EditAvatar.tsx
│   │   ├── EditProfile/
│   │   │   └── EditProfile.tsx
│   │   ├── NewCard/
│   │   │   └── NewCard.tsx
│   │   └── Popup.tsx
│   └── Footer/
│       └── Footer.tsx
├── contexts/
│   └── CurrentUserContext.tsx
├── images/
│   └── (Imágenes, avatares y logos del proyecto)
├── types/
│   └── types.ts
├── utils/
│   └── api.ts
├── App.tsx
├── index.css
└── main.tsx
```

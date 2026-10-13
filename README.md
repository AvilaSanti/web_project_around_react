# Alrededor de los EE.UU. (Versión React + TypeScript)

## Descripción

¡Bienvenido a la primera fase de la migración de **Alrededor de los EE.UU.** a React! En este sprint, transformamos la arquitectura del proyecto original basada en Programación Orientada a Objetos (POO) y manipulación directa del DOM en un paradigma declarativo basado en componentes reutilizables.

El proyecto está construido utilizando **Vite** como empaquetador moderno, garantizando un entorno de desarrollo ultra rápido gracias a HMR (Hot Module Replacement).

## 🌐 Demo en Vivo

Puedes ver y probar la galería en funcionamiento entrando al siguiente enlace: 👉 [Ver Portafolio en Vivo](https://avilasanti.github.io/web_project_around_react/)

---

## Tecnologías y Herramientas Utilizadas

- **React 19** & **TypeScript** para un desarrollo seguro y basado en tipado robusto.
- **Vite** como entorno de desarrollo y bundler.
- **ESLint** para asegurar la calidad del código (configurado para omitir restricciones de `prop-types` ya que usamos TypeScript).
- **CSS BEM (Block Element Modifier)** para la consistencia de los estilos globales heredados.

---

## Características Implementadas

Se ha modularizado la aplicación dividiendo el marcado antiguo en componentes funcionales e interactivos:

1. **Componentes de Maquetación Reutilizables:**
   - `Header`: Módulo separado que incluye el logotipo oficial de la aplicación.
   - `Main`: Componente contenedor principal de la sección de perfil y la cuadrícula de tarjetas.
   - `Footer`: Pie de página independiente.

2. **Arquitectura de Popups Dinámicos (Estado Controlado):**
   - Creación de un componente base `Popup` con soporte dinámico para la clase CSS `popup_is-opened` mediante la propiedad booleana `isOpen`.
   - Implementación del hook `useState` en el componente `Main` para gestionar centralizadamente qué ventana emergente se renderiza (`EditProfile`, `EditAvatar`, `NewCard`, e `ImagePopup`).
   - Comunicación bidireccional mediante propiedades (`props`) y funciones controladoras como `handleOpenPopup` y `handleClosePopup`.

3. **Componente Card y Renderizado de Listas:**
   - Tipado dinámico reutilizando la interfaz `CardData` en un archivo de tipos global (`src/types/types.ts`).
   - Uso del método `.map()` de JavaScript para iterar datos ficticios de desarrollo y renderizarlos en una lista limpia dentro de un elemento `<ul>`.

4. **Ventana Emergente de Imágenes (`ImagePopup`):**
   - Modificación del contenido del contenedor adaptando estilos específicos de imagen a través de operadores ternarios en el componente `Popup` base.
   - Apertura del popup al hacer clic directamente sobre cualquier imagen de las tarjetas.

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
│   │   ├── EditProfile/
│   │   ├── NewCard/
│   │   │   └── NewCard.tsx
│   │   └── Popup.tsx
│   └── Footer/
│       └── Footer.tsx
├── images/
│   └── (Imágenes, avatares y logos del proyecto)
├── types/
│   └── types.ts
├── App.tsx
├── index.css
└── main.tsx
```

---

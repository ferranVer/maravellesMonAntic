/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" /> // <-- Añade esta referencia para el nuevo plugin

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Este bloque ya no es necesario con la referencia de arriba, pero
// por si acaso, no hace daño tenerlo explícitamente.
declare module '*.svg?component' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}
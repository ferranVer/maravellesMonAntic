<!-- src/components/Mapa.vue -->
<script setup>
// 1. Importamos el contenido del SVG como una cadena de texto.
//    El sufijo "?raw" le dice a Vite que lo trate como texto plano.
//    Esto soluciona el problema de las rutas en GitHub Pages.
import svgContent from '../assets/mapaSketchPlain2.svg?raw';
</script>

<template>
  <div class="mapa-container">
    <!-- El contenido del SVG se inyectará aquí con v-html -->
    <!-- Envolvemos el div de renderizado para controlar el overflow si es necesario -->
    <div class="mapa-wrapper">
      <div class="mapa-renderizado" v-html="svgContent"></div>
    </div>
  </div>
</template>

<!-- En src/components/Mapa.vue -->
<style scoped>
/* Contenedor principal de la "tarjeta" del mapa */
.mapa-container {
  width:auto;
  background-color: white;
  padding: 1.5rem;
  box-sizing: border-box;
  /* La clave: Oculta lo que el mapa de dentro intente sacar */
  overflow:hidden; 
}

/* El mapa zoomeado y centrado */
.mapa-renderizado {
  /* Hacemos el mapa el doble de grande */
  width: 130%;
  height: 130%;

  /* Lo centramos moviéndolo a la izquierda y arriba */
  /* Esto asegura que el centro del mapa ampliado quede en el centro del contenedor */
  transform: translate(-10%, -5%);
}

/* ESTILOS DE INTERACCIÓN (Usando :deep()) */
.mapa-renderizado :deep(#teatroMerida),
.mapa-renderizado :deep(#estatuaZeus),
.mapa-renderizado :deep(#temploArtemisa),
.mapa-renderizado :deep(#jardinesBabilonia),
.mapa-renderizado :deep(#piramideGuiza),
.mapa-renderizado :deep(#faro),
.mapa-renderizado :deep(#biblioteca),
.mapa-renderizado :deep(#colosoRodas),
.mapa-renderizado :deep(#mausoleoHalicarnaso),
.mapa-renderizado :deep(#coliseoRomano) {
  opacity: 0.7;
  transition: opacity 0.25s ease-in-out;
  cursor: pointer;
}

.mapa-renderizado:hover :deep(#teatroMerida),
.mapa-renderizado:hover :deep(#estatuaZeus),
.mapa-renderizado:hover :deep(#temploArtemisa),
.mapa-renderizado:hover :deep(#jardinesBabilonia),
.mapa-renderizado:hover :deep(#piramideGuiza),
.mapa-renderizado:hover :deep(#faro),
.mapa-renderizado:hover :deep(#biblioteca),
.mapa-renderizado:hover :deep(#colosoRodas),
.mapa-renderizado:hover :deep(#mausoleoHalicarnaso),
.mapa-renderizado:hover :deep(#coliseoRomano) {
  opacity: 0.3;
}

.mapa-renderizado :deep(#teatroMerida:hover),
.mapa-renderizado :deep(#estatuaZeus:hover),
.mapa-renderizado :deep(#temploArtemisa:hover),
.mapa-renderizado :deep(#jardinesBabilonia:hover),
.mapa-renderizado :deep(#piramideGuiza:hover),
.mapa-renderizado :deep(#faro:hover),
.mapa-renderizado :deep(#biblioteca:hover),
.mapa-renderizado :deep(#colosoRodas:hover),
.mapa-renderizado :deep(#mausoleoHalicarnaso:hover),
.mapa-renderizado :deep(#coliseoRomano:hover) {
  opacity: 1;
}
</style>
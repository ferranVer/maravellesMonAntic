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

<style scoped>
/*
  ESTILO DEL CONTENEDOR PRINCIPAL
  Define la "tarjeta" que contiene el mapa.
*/
.mapa-container {
  width: 100%; /* Ocupa todo el ancho que le da su padre en App.vue */
  background-color: white;
  padding: 1.5rem; /* Un padding razonable */
  box-sizing: border-box;
}

/*
  CONTENEDOR DEL MAPA (WRAPPER)
  Este div se usa para contener el mapa escalado y evitar que se desborde.
  También define el tamaño real del mapa.
*/
.mapa-wrapper {
  width: 100%;
  margin: 0 auto; /* Centra el mapa si el contenedor es más grande */
  overflow: hidden; /* Opcional: recorta lo que se salga si usas scale */
}

/*
  ESTILO DEL MAPA RENDERIZADO
  Aquí controlamos el tamaño y la apariencia del SVG inyectado.
*/
.mapa-renderizado {
  /*
    SOLUCIÓN AL 'transform: scale(2)':
    En lugar de escalar visualmente, aumentamos el tamaño real.
    Usamos márgenes negativos para "recuperar" el espacio vacío que se genera
    al hacer zoom y centrar el mapa.
    
    Imagina que tienes una foto. En lugar de ponerle una lupa (scale),
    haces una foto más grande (width/height 200%) y la mueves (-50%)
    para que el centro quede en el mismo sitio.
  */
  width: 200%; 
  height: 200%;
  margin-left: -50%;
  margin-top: -50%;
  transform: none; /* Nos aseguramos de NO usar 'scale' */
}

/*
  ESTILOS PARA LOS ELEMENTOS DENTRO DEL SVG
  Usamos :deep() para que los estilos scoped puedan afectar al contenido de v-html.
*/

/* 1. ESTADO BASE (SOLO PARA LOS MONUMENTOS) */
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

/* 2. ESTADO HOVER EN EL CONTENEDOR */
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

/* 3. ESTADO HOVER EN EL ELEMENTO ESPECÍFICO */
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
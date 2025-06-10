<script setup>
import { ref, onMounted } from 'vue';

const svgContent = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/mapaSketchPlain2.svg');
    if (!response.ok) throw new Error('Error al cargar SVG');
    svgContent.value = await response.text();
  } catch (error) {
    console.error("No se pudo cargar el archivo SVG:", error);
  }
});
</script>

<template>
  
   

  <div class="mapa-container">

    <!-- El contenedor que mantendrá la proporción -->
    <div class="mapa-proporcion-wrapper">
      <!-- El contenido del SVG se inyectará aquí -->
      <div class="mapa-renderizado" v-html="svgContent"></div>
    </div>
    
  </div>
</template>

<style scoped>
/* -------------------------------------------------- */
/*          ESTILOS DEL CONTENEDOR (sin cambios)      */
/* -------------------------------------------------- */
.mapa-container {
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
 
  background-color: white;
  padding: 2rem;
}

.mapa-renderizado {
  width: 100%;
  aspect-ratio: 16 / 9;
  transform:scale(2);
}


/* -------------------------------------------------- */
/*      EFECTO HOVER CON OPACIDAD (VERSIÓN CORREGIDA)  */
/* -------------------------------------------------- */

/* 
  1. ESTADO BASE (SOLO PARA LOS MONUMENTOS):
  Definimos la opacidad inicial y la transición únicamente para los IDs
  de las maravillas. El mapa del mundo no se toca.
*/
.mapa-renderizado :is(
  #teatroMerida, 
  #estatuaZeus, 
  #temploArtemisa, 
  #jardinesBabilonia, 
  #piramideGuiza, 
  #faro, 
  #biblioteca, 
  #colosoRodas, 
  #mausoleoHalicarnaso, 
  #coliseoRomano
) {
  /* Por defecto, los monumentos están ligeramente atenuados. */
  opacity: 0.7; 
  transition: opacity 0.25s ease-in-out;
  cursor: pointer;
}

/*
  2. ESTADO HOVER EN EL CONTENEDOR:
  Cuando el ratón entre en CUALQUIER LUGAR del SVG...
*/
.mapa-renderizado:hover :is(
  #teatroMerida, 
  #estatuaZeus, 
  #temploArtemisa, 
  #jardinesBabilonia, 
  #piramideGuiza, 
  #faro, 
  #biblioteca, 
  #colosoRodas, 
  #mausoleoHalicarnaso, 
  #coliseoRomano
) {
  /* ...hacemos que todos los monumentos se atenúen más. */
  opacity: 0.3;
}

/*
  3. ESTADO HOVER EN EL ELEMENTO ESPECÍFICO:
  PERO, el monumento específico sobre el que está el ratón...
*/
.mapa-renderizado :is(
  #teatroMerida:hover, 
  #estatuaZeus:hover, 
  #temploArtemisa:hover, 
  #jardinesBabilonia:hover, 
  #piramideGuiza:hover, 
  #faro:hover, 
  #biblioteca:hover, 
  #colosoRodas:hover, 
  #mausoleoHalicarnaso:hover, 
  #coliseoRomano:hover
) {
  /* ...lo hacemos 100% opaco para que destaque. */
  opacity: 1;
}
</style>
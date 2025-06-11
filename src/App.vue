<!-- src/App.vue -->
<script setup>
// 1. Importa 'onMounted' de Vue y la librería AOS
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // <-- ¡MUY IMPORTANTE! Importa los estilos aquí

// 2. Importa tus componentes como ya hacías
import PageHeader from './components/PageHeader.vue';
import PersonalChoice from './components/PersonalChoice.vue';
import InteractiveMapView from './components/InteractiveMapView.vue';

// 3. Usa onMounted para inicializar AOS
onMounted(() => {
  AOS.init({
    duration: 800,      // Duración de la animación
    easing: 'ease-in-out', // Curva de suavizado
    once: true,         // La animación solo ocurre una vez
    offset: 50,         // Se activa 50px antes de que el elemento entre en pantalla
  });
});
</script>

<!-- El <template> y el <style> se mantienen igual que los tenías -->
<template>
  <div id="app-container">
    <div class="component-wrapper">
      <PageHeader data-aos="fade-down" /> <!-- Puedes animar todos si quieres -->
    </div>
     <div class="map-wrapper">
      <InteractiveMapView />
    </div>
    <div class="component-wrapper">
      <PersonalChoice /> <!-- Este ya tiene su propio data-aos dentro -->
    </div>
   
  </div>
</template>

<style scoped>
.component-wrapper {
  width: 100%;
  max-width: 900px;
  
}

   main { 
    display: flex; 
    justify-content: center; 
  }
  #app-container {
  display: flex; /* Activamos Flexbox */
  flex-direction: column; /* Le decimos que apile los hijos verticalmente */
  align-items: center; /* Centramos todo horizontalmente en la página */
  
  /* Añadimos algo de espacio para que no esté pegado a los bordes */
  padding: 3rem 1rem;
  
  /* Creamos un espacio uniforme entre cada componente */
  gap: 3.5rem; 
  width: 100%; /* Aseguramos que ocupe todo el ancho disponible */
  box-sizing: border-box;
}
.map-wrapper {
  width: 100%;
  max-width: 900px; /* <-- ¡AQUÍ ESTÁ LA MAGIA! Aumenta este valor como quieras */
}
</style>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-image: url('/fondoWarriors.svg');

  /* 2. Repetimos la imagen en todas las direcciones para crear el patrón. */
  background-repeat: repeat;

  /* 
    3. ¡LA MAGIA! Esto fija el fondo en su sitio. 
    El contenido se desplazará por encima, pero el fondo no se moverá.
  */
  background-attachment: fixed;
}
body,
button,
input,
textarea,
select {
  font-family: 'Gideon Roman', serif; /* 'serif' es la fuente de respaldo */
}

</style>
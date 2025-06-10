<script setup>
import InteractiveMapView from './components/InteractiveMapView.vue';
import PageHeader from './components/PageHeader.vue';
import PersonalChoice from './components/PersonalChoice.vue';

</script>

<template>
  
  <div id="app-container">
     <div class="component-wrapper">
      <PageHeader />
    </div>

    <!-- Celda 3: Contiene el Mapa -->
    <div class="map-wrapper">
      <InteractiveMapView />
    </div>
    
    <!-- Celda 2: Contiene la Elección Personal -->
    <div class="component-wrapper">
      <PersonalChoice />
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
  width: 70%;
  max-width: 900px; /* <-- ¡AQUÍ ESTÁ LA MAGIA! Aumenta este valor como quieras */
}
</style>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

}
</style>
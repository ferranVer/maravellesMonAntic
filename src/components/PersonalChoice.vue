<!-- src/components/PersonalChoice.vue -->
<script setup>
// ¡El script ahora está casi vacío! Solo importa el icono.
import { Heart } from 'lucide-vue-next';
</script>

<template>
  <!-- Simplemente añade el atributo data-aos aquí -->
  <section 
    class="choice-panel" 
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div class="panel-header">
      <Heart class="icon" />
      <h2>La meua meravella preferida: El Far d'Alexandria</h2>
    </div>
    <div class="panel-content">
      <p>
         De totes les meravelles del món antic, el Far d'Alexandria és la que més em fascina. No era simplement un far, sinó una obra mestra de l'enginyeria amb un propòsit profundament humà i pràctic: guiar els mariners cap a la seguretat del port.
      </p>
      <p>
        La seua llum no només il·luminava la mar, sinó que també simbolitzava la grandesa d'Alexandria com a punt de referència del saber. La seua combinació de bellesa arquitectònica i innovació tecnològica el converteix, per a mi, en la més important de totes.
      </p>
      <div class="image-container">
        <img 
          src="https://cadenaser.com/resizer/v2/https%3A%2F%2Fsdmedia.playser.cadenaser.com%2Fplayser%2Fimage%2F20249%2F28%2F1727520995377_1727521134_asset_still.png?auth=1c07ce9d8cf9c13e790ab0d8986c0d9c45c9f2e0de7442d75ebaf19d338dd250&quality=70&width=736&height=414&smart=true" 
          alt="Recreació artística del Far d'Alexandria"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
  ¡YA NO NECESITAS LOS ESTILOS DE ANIMACIÓN!
  AOS se encarga de todo. Tus estilos de maquetación se mantienen igual.
*/
.choice-panel {
  width: 100%;
  max-width: 900px;
  background-color: #ffffff;
  /* ... resto de tus estilos de diseño ... */
}
/* ... etc ... */
</style>
<!-- src/components/PersonalChoice.vue -->
<script setup>
// Importamos un icono relevante de la librería que ya tenemos instalada
import { Heart } from 'lucide-vue-next';
</script>

<template>
  <section class="choice-panel">
    <div class="panel-header">
      <Heart class="icon" />
      <h2>La meua meravella preferida: El Far d'Alexandria</h2>
    </div>
    <div class="panel-content">
      <p>
        De totes les meravelles del món antic, el Far d'Alexandria és la que més em fascina. No era simplement una tomba o un temple, sinó una obra mestra de l'enginyeria amb un propòsit profundament humà i pràctic: guiar els mariners cap a la seguretat del port.
      </p>
      <p>
        La seua llum no només il·luminava la mar, sinó que també simbolitzava la grandesa d'Alexandria com a centre del saber. La seua combinació de bellesa arquitectònica i innovació tecnològica el converteix, per a mi, en la més important de totes.
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
.choice-panel {
  width: 100%;
  max-width: 900px;
  background-color: #ffffff;
  border: 1px solid #e0e7ff; /* Un borde sutil con un toque de color */
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(66, 71, 112, 0.08);
  overflow: hidden; /* Para que el fondo del header no se salga */
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2rem;
  background-color: #f5f7ff; /* Un fondo muy claro y suave */
  border-bottom: 1px solid #e0e7ff;
}

.icon {
  color: #c13e5b; /* Un color distintivo para el icono del corazón */
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

h2 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a2b48;
}

.panel-content {
  padding: 1.5rem 2rem 2rem 2rem;
}

p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #3f4a59;
  margin: 0 0 1rem 0;
    text-align: left; /* Alineación justificada para un aspecto más limpio */
}

p:last-child {
  margin-bottom: 0;
}
</style>
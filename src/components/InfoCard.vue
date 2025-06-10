<script setup>
import { computed } from 'vue';
// 1. Importamos los iconos que vamos a necesitar de la librería
import {
  MapPin,
  Landmark,
  Sparkles,
  Skull,
  User,
  Target,
} from 'lucide-vue-next';

// 2. Definimos las propiedades y eventos del componente
const props = defineProps({
  monument: { type: Object, required: true },
});
const emit = defineEmits(['close']);

// 3. Creamos un "mapa" para asociar las claves de tus datos con los componentes de icono
const iconMap = {
  location: MapPin,
  civilization: Landmark,
  creationDate: Sparkles,
  destructionDate: Skull,
  author: User,
  finalidad: Target,
};

// 4. Un mapa para las etiquetas, haciendo el código más mantenible
const labelMap = {
  location: 'Ubicació',
  civilization: 'Cultura / Imperi',
  creationDate: 'Construcció',
  destructionDate: 'Estat / Destrucció',
  author: 'Autor / Creador',
  finalidad: 'Propòsit',
}

// 5. Filtramos los detalles para tratar la descripción de forma especial
const filteredDetails = computed(() => {
  if (!props.monument.details) return {};
  const details = { ...props.monument.details };
  delete details.description;
  return details;
});
</script>

<template>
  <!-- El Teleport es una buena práctica para overlays, asegura que no se corte -->
  <Teleport to="body">
    <div class="info-card-overlay" @click.self="$emit('close')">
      <div class="info-card">
        <button @click="$emit('close')" class="close-button" aria-label="Cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="card-header">
          <h2>{{ monument.name }}</h2>
        </div>

        <div class="card-content">
          <p v-if="monument.details.description" class="description">
            {{ monument.details.description }}
          </p>

          <ul class="details-list">
            <li v-for="(value, key) in filteredDetails" :key="key">
              <!-- Usamos el componente dinámico para renderizar el icono correcto -->
              <component :is="iconMap[key]" class="icon" v-if="iconMap[key]" />
              <div class="text-content">
                <span class="label">{{ labelMap[key] || key }}</span>
                <span class="value">{{ value }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.info-card-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.info-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  width: 90%;
  max-width: 480px;
  color: #2c3e50;
  transform: scale(0.95) translateY(20px);
  opacity: 0;
  animation: fadeInScale 0.4s forwards cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden; /* Importante para los bordes redondeados */
}

@keyframes fadeInScale {
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.card-header {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 1.75rem 2rem;
  border-bottom: 1px solid #dee2e6;
}

h2 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #343a40;
}

.card-content {
  padding: 1.75rem 2rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  margin-top: 0;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 3px solid #0d6efd;
}

.details-list {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Espacio generoso entre los detalles */
}

.details-list li {
  display: grid;
  grid-template-columns: 24px 1fr; /* Columna fija para el icono */
  align-items: flex-start;
  gap: 0 1rem;
}

.icon {
  grid-column: 1;
  color: #0d6efd;
  margin-top: 5px;
}

.text-content {
  grid-column: 2;
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: 600;
  font-size: 0.8rem;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.value {
  color: #343a40;
  font-size: 1rem;
  line-height: 1.4;
}

.close-button {
  position: absolute;
  top: 14px; right: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  color: #adb5bd;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;
}
.close-button:hover {
  background-color: #e9ecef;
  color: #343a40;
  transform: rotate(90deg);
}
.close-button svg {
  display: block;
}
</style>
<!-- src/components/PageHeader.vue -->
<template>
  <header class="page-header">
    <h1>Meravelles del Món Antic</h1>
    <h2 class="subtitle">
      Ferran Verdú Caballero
    </h2>
    <p>Geografia i Història 2024-2025 <span>| 3a Avaluació</span></p>
    
  </header>
</template>

<style scoped>
.page-header {
  text-align: center;
  max-width: 800px; /* Evita que el subtítulo se haga demasiado ancho */
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a3b58;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  color: #5a7184;
  line-height: 1.5;
}
</style>
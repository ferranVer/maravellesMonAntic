<script setup>
import { ref, computed } from 'vue';
import Mapa from './Mapa.vue';
import InfoCard from './InfoCard.vue';

// 1. Definimos los datos de cada monumento.
//    La clave (ej: 'coliseoRomano') DEBE coincidir con el ID del SVG.
const monumentsData = {
  coliseoRomano: {
    name: 'Coliseu Romà',
    details: {
      location: 'Roma, Itàlia',
      civilization: 'Imperi Romà',
      creationDate: '70-80 d.C.',
      destructionDate: 'Parcialment destruït per terratrèmols i saquejos',
      description: 'El Coliseu Romà és un antic amfiteatre situat al centre de Roma, considerat una de les meravelles arquitectòniques del món antic.',
      author: 'Emperadors Vespasià y Tito',
      finalidad: 'Arena de gladiadors i espectacles públics',
    },
  },
  piramideGuiza: {
    name: 'Gran Piràmide de Guiza',
    details: {
      description: "És la piràmide més gran de les tres piràmides de Guiza. Va ser l'edifici més alt del món durant més de 3.800 anys. Amb els seus aproximadament 146 metres d'alçada original, no va ser superada fins a la construcció de la catedral de Lincoln a Anglaterra al segle XIV",
      location: 'Guiza, Egipte',
      civilization: 'Antic Egipte',
      creationDate: "c. 2580–2560 a.C.",
      destructionDate: 'Segueix en peu',
      author: 'Faraó Keops',
      finalidad: 'Tomba del faraó Keops',
    },
  },
  
   estatuaZeus: {
    name: 'Estatua de Zeus a Olimpia',
  details: { 
      description: "L'estàtua de Zeus mesurava uns 12 metres d'alçada i estava feta d'ivori i or. Era tan impressionant que es deia que si Zeus s'aixecava, trencaria el sostre del temple.",
      location: 'Olímpia, Grècia',
      civilization: 'Antiga Grècia',
      creationDate: 'c. 435 a.C.',
      destructionDate: 'Destruïda al segle V d.C.',
      author: 'Escultor Fidias',
      finalidad: 'Estatua de cult al déu Zeus a Olímpia on es celebraven els Jocs Olímpics',
    },
   },

   temploArtemisa: {
    name: "Temple d'Artemisa a Efès",
    details: {
      description: "El temple va ser construït i destruït almenys tres vegades. La seva versió més famosa, feta totalment de marbre blanc, era tan gran i bella que alguns visitants de l'antiguitat deien que eclipsava totes les altres meravelles.",
      location: 'Efès, Turquia',
      civilization: 'Antiga Grècia',
      creationDate: 'c. 550 a.C.',
      destructionDate: 'Destruït al segle V d.C.',
      finalidad: 'Temple dedicat a la deessa Artemisa',
},
   },

   faro: {
    name: "Far d'Alexandria",
    details: {
      description: "Va ser una de les estructures més altes construïdes per l'home durant l'antiguitat, amb una alçada estimada de entre 100 i 140 metres. La llum era visible fins a 50 quilòmetres de distància.",
      location: 'Alexandria, Egipte',
      civilization: 'Antic Egipte',
      creationDate: 'c. 280 a.C.',
      destructionDate: 'Destruït por terratrèmols al segle XIV',
      finalidad: "Guia par a navegants i port d'Alexandria",
  },},
    biblioteca: {
    name: "Biblioteca d'Alexandria", 
    details: {
      description: "La Biblioteca d'Alexandria volia reunir tot el coneixement del món conegut. Els vaixells que arribaven al port d'Alexandria eren registrats i els llibres a bord confiscats, copiats a mà pels escrivans, i després l'original es quedava a la biblioteca",
      location: 'Alexandria, Egipte',
      civilization: 'Antic Egipte',
      creationDate: 'c. 295 a.C.',
      destructionDate: 'Destruïda en diversos esdeveniments, inclosos incendis',
      finalidad: 'Centre de divulgació del coneixement i aprenentatge',
    },
},

  mausoleoHalicarnaso: {
    name: "Mausoleu d'Halicarnàs",
    details: {
      description: 'Va ser una tomba monumental construïda per a Mausol, el rei Persa de Cària. Va ser tan impressionant que el seu nom es va convertir en sinònim de tomba monumental arreu del món',
      location: 'Bodrum, Turquia',
      civilization: 'Antiga Pèrsia',
      creationDate: 'c. 350 a.C.',
      destructionDate: "Destruït per terratrèmols en l'Edad Mitjana",
      finalidad: 'Tomba monumental per a Mausol i Artemisia',
    },
  },

  colosoRodas: {
    name: 'Estatua del Colós de Rodes',
    details: {
      description: "El Colós de Rodes fou una enorme estatua del déu grec Hèlios. Només va estar dret uns 54 anys abans de caure per un terratrèmol. Tot i això, la seva grandesa va fer que es convertís en una de les meravelles més llegendàries de l'antiguitat",
      location: 'Rodes, Grècia',
      civilization: 'Antiga Grècia',
      creationDate: 'c. 280 a.C.',
      destructionDate: 'Destruït por un terratrèmol al 226 a.C.',
      finalidad: 'Estatua monumental per a conmemorar la victòria sobre Xipre',
    },
  },

  teatroMerida: {
    name: 'Teatre de Mèrida',
    details: {
      description: "El Teatre de Mèrida és un antic teatre romà a Espanya, famós per l'excel·lenent estat de conservació i el seu ús actual per a representacions teatrals. El Teatre de Mèrida va ser construït fa més de 2.000 anys, però va estar enterrat i oblidat durant segles, fins que al segle XX es van començar les excavacions que el van recuperar gairebé intacte",
      location: 'Mèrida, Espanya',
      civilization: 'Imperi Romà',
      creationDate: '15 a.C.',
      destructionDate: 'Continua en peu',
      finalidad: 'Espai per a representacions teatrals i esdeveniments culturals',
    },
  },
      jardinesBabilonia: {
    name: 'Jardins Penjants de Babilònia',
    details: {
      description: "Es van descriure com una proesa notable d'enginyeria amb una sèrie ascendent de jardins en capes que contenien una gran varietat d'arbres, arbusts i vinyes, que s'assemblaven a una gran muntanya verda construïda amb maons de fang. Alguns historiadors creuen que potser ni tan sols van existir a Babilònia, sinó que podrien haver estat a Nínive, sota l'Imperi assiri",
      location: 'Babilònia, Irak',
      civilization: 'Antiga Babilònia',
      creationDate: 'c. 600 a.C.',
      destructionDate: 'Desapareguts, la seua existència és debatuda',
      finalidad: "Jardins ornamentals i d'esbarjo",
    },
},
}
// 2. Estado para saber qué monumento está seleccionado.
const selectedMonumentId = ref(null);

// 3. Propiedad computada que devuelve los datos del monumento seleccionado.
const selectedMonumentData = computed(() => {
  return selectedMonumentId.value ? monumentsData[selectedMonumentId.value] : null;
});

// 4. Manejador de clics que utiliza "event delegation".
function handleMapClick(event) {
  const clickedId = event.target.id;
  
  // Verificamos si el ID del elemento clickeado existe en nuestros datos.
  if (monumentsData[clickedId]) {
    selectedMonumentId.value = clickedId;
  }
}

// 5. Función para cerrar la tarjeta de información.
function closeInfoCard() {
  selectedMonumentId.value = null;
}
</script>

<template>
  <div class="interactive-map-container">
    
    <!-- 
      El mapa se envuelve en un div con un listener de click.
      Esto nos permite capturar clics en los elementos del SVG.
    -->
    <div @click="handleMapClick">
      <Mapa />
    </div>

    <!-- 
      La tarjeta de información solo se muestra si hay un monumento seleccionado.
      Le pasamos los datos y escuchamos su evento 'close'.
    -->
    <InfoCard
      v-if="selectedMonumentData"
      :monument="selectedMonumentData"
      @close="closeInfoCard"
    />

  </div>
</template>

<style scoped>
.interactive-map-container {
  /* 1. Le decimos que ocupe el 100% del ancho que le da su padre (App.vue) */
  width: 100%;
  
  /* 2. Le ponemos el mismo max-width que los otros componentes para consistencia */
  max-width: 900px;
  
  /* 3. El position: relative que ya tenías es correcto, pero no es la causa del problema */
  position: relative;
  
  /* 4. Le damos un fondo y un borde para que se vea como una tarjeta, igual que los otros */
  background-color: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 8px 25px rgba(66, 71, 112, 0.08);
  box-sizing: border-box;
}
</style>
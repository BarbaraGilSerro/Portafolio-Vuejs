<script setup>
import { ref } from 'vue';


const educacion = ref([
  {
    fecha: '2024',
    title: 'Tecnicatura Universitaria en Programación',
    lugar: 'UTN San Rafael',
    descripcion: 'Cursado de un año de la carrera.',
    enlace: 'https://www.frsr.utn.edu.ar',
  },

  {
    fecha: '2006',
    title: 'Ingeniería Industrial',
    lugar: 'UTN San Rafael',
    descripcion: 'Obtención del título de Ingeniera Industrial con un promedio de 8,95.',
    enlace: 'https://www.frsr.utn.edu.ar',
  },

  {
    fecha: '2004',
    title: 'Ingeniería Industrial',
    lugar: 'Fachhochschule für Technik – Esslingen Stuttgart',
    descripcion: 'Cursado de 6 materias de la carrera de Ingeniería Industrial en Alemania y la realización de un proyecto de 3 semanas en Daimler Chrysler A.G. en el departamento de Logística, Procesos y Métodos.',
    enlace: 'https://www.hs-esslingen.de',
  },
]);



const posicionFecha = (index) => {
  if (index % 2 === 0) {
    return { right: '-70px', color: '#d53a9d' };
  }

  return { left: '-70px', color: '#743ad5' };
};
</script>

<template>
  <ul class="timeline">
    <li
      v-for="(item, index) in educacion"
      :key="index"
      
    >
      <div class="fecha-color" :style="posicionFecha(index)">
        {{ item.fecha }}
      </div>
      <h3 class="title">{{ item.title }}</h3>
      <p class="lugar">{{ item.lugar }}</p>
      <div class="descripcion">{{ item.descripcion }}</div>
      <a class="enlace" :href="item.enlace" target="_blank">{{item.enlace}}</a>
    </li>
  </ul>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700');


/* Timeline Styles */
.timeline {
  list-style: none;
  padding-left: 10px;
  min-width: 300px;
  max-width: 500px;
  margin: auto;
}

.timeline li {
  position: relative;
  padding: 20px 20px;
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid transparent;
  border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
}

.timeline li:first-child {
  border-top: none; /* limits the scope of the previous rule */
}

.timeline .fecha-color {
  font-weight: bold;
  position: absolute;
  padding: 10px;
  text-align: center;
  line-height: 1.25em;
  font-size: 1em;
  display: flex;
  align-items: center;
  height: 90%;
}

.timeline li:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 0;
}

.timeline li:nth-child(odd)::before {
  left: 100%;
  margin-left: -20px;
}

.timeline li:nth-child(even) {
  border-left: 3px solid;
  padding-right: 0;
}

.timeline li:nth-child(even)::before {
  right: 100%;
  margin-right: -20px;
}

.title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 5px 0;
}

.lugar { 
  font-size: 1em; 
  font-style: italic; 
  margin: 5px 0; }

.descripcion {
  margin: 10px 0;
}

.enlace {
  text-decoration: underline;
  cursor: pointer;
  color: grey;
  font-size: 80%;
  font-style: italic;
}
</style>

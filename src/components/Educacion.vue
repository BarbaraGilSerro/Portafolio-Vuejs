<script setup>
import { ref } from 'vue';

const fechaColor = ref([
  { color: '#41516c' },
  { color: '#FBCA3E' },
  { color: '#E24A68' },
  { color: '#1B5F8C' },
  { color: '#4CADAD' }
]);

const educacion = ref([
  { fecha: '2024', title: 'Técnicatura Universitaria en Programación', descripcion: 'Incumbencias Profesionales: Operación y programación de computadoras, desarrollo de programas en distintos lenguajes, análisis y control de sistemas informáticos.', enlace: 'https://www.youtube.com/' },
  { fecha: '2023', title: 'Desarrollador Full Stack', descripcion: 'Trabajé en XYZ Tech, donde diseñé y desarrollé aplicaciones web completas utilizando tecnologías como Node.js, React y MongoDB.', enlace: 'http://www.direccion.com' },
  { fecha: '2022', title: 'Internship en Desarrollo Web', descripcion: 'Realicé una pasantía en ABC Solutions, contribuyendo en la creación de interfaces de usuario y optimización de sitios web.', enlace: 'http://www.direccion.com' },
  { fecha: '2021', title: 'Proyecto Personal - Aplicación de Gestión de Tareas', descripcion: 'Desarrollé una aplicación para la gestión de tareas diarias usando HTML, CSS y JavaScript, implementando funcionalidades como listas de tareas y recordatorios.', enlace: 'http://www.direccion.com' },
  { fecha: '2020', title: 'Curso de Introducción a la Programación', descripcion: 'Completé un curso en línea sobre fundamentos de programación, donde aprendí lenguajes como Python y Java.', enlace: 'http://www.direccion.com' }
]);
</script>

<template>
  <main>
    <ul class="timeline">
      <li v-for="(item, index) in educacion" :key="index" :style="{ '--fecha-color': fechaColor[index].color}">
        <div class="fecha">{{ item.fecha }}</div>
        <h3 class="title">{{ item.title }}</h3>
        <div class="descripcion">{{ item.descripcion }}</div>
        <!-- <a class="enlace" :href="item.enlace" target="_blank">Saber más</a> -->
      </li>
    </ul>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

/* Colors */
$black: #34435E;
$white: #ffffff;

/* General Styles */
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0 4em;
}

main {
  min-width: 300px;
  max-width: 500px;
  margin: auto;
}

/* Timeline Styles */
.timeline {
  list-style: none;
  padding-left: 40px;
}

.timeline li {
  position: relative;
  margin-bottom: 20px;
  padding: 20px 20px;
  font-size: 1em;
  line-height: 1.75em;
  color: $black;
  border-top: 3px solid transparent;
  border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
  counter-increment: section;
}

.timeline li::before {
  content: counter(section);
  position: absolute;
  border-radius: 50%;
  padding: 10px;
  height: 1.25em;
  width: 1.25em;
  background-color: $black;
  text-align: center;
  line-height: 1.25em;
  color: $white;
  font-size: 1em;
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

.fecha {
  font-weight: bold;
  margin-bottom: 5px;
  
}

.title {
  font-size: 1.2em;
  margin: 5px 0;
}

.descripcion {
  margin: 10px 0;
}

.enlace {
  color: $black;
  text-decoration: underline;
  cursor: pointer;
}
</style>

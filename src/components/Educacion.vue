<script setup>
import { ref } from 'vue';

const fechaColor = ref([
  { color: '#41516c' },
  { color: '#FBCA3E' },
  { color: '#E24A68' },
  { color: '#1B5F8C' },
  { color: '#4CADAD' },
]);

const educacion = ref([
  {
    fecha: '2024',
    title: 'Técnicatura Universitaria en Programación',
    descripcion:
      'Incumbencias Profesionales: Operación y programación de computadoras, desarrollo de programas en distintos lenguajes, análisis y control de sistemas informáticos.',
    enlace: 'https://www.youtube.com/',
  },
  {
    fecha: '2023',
    title: 'Desarrollador Full Stack',
    descripcion:
      'Trabajé en XYZ Tech, donde diseñé y desarrollé aplicaciones web completas utilizando tecnologías como Node.js, React y MongoDB.',
    enlace: 'http://www.direccion.com',
  },
  {
    fecha: '2022',
    title: 'Internship en Desarrollo Web',
    descripcion:
      'Realicé una pasantía en ABC Solutions, contribuyendo en la creación de interfaces de usuario y optimización de sitios web.',
    enlace: 'http://www.direccion.com',
  },
  {
    fecha: '2021',
    title: 'Proyecto Personal - Aplicación de Gestión de Tareas',
    descripcion:
      'Desarrollé una aplicación para la gestión de tareas diarias usando HTML, CSS y JavaScript, implementando funcionalidades como listas de tareas y recordatorios.',
    enlace: 'http://www.direccion.com',
  },
  {
    fecha: '2020',
    title: 'Curso de Introducción a la Programación',
    descripcion:
      'Completé un curso en línea sobre fundamentos de programación, donde aprendí lenguajes como Python y Java.',
    enlace: 'http://www.direccion.com',
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
      :style="{ '--fecha-color': fechaColor[index].color }"
    >
      <div class="fecha-color" :style="posicionFecha(index)">
        {{ item.fecha }}
      </div>
      <h3 class="title">{{ item.title }}</h3>
      <div class="descripcion">{{ item.descripcion }}</div>
      <!-- <a class="enlace" :href="item.enlace" target="_blank">Saber más</a> -->
    </li>
  </ul>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700');

/* Colors Asi no se puede declarar colores. Tendrias que hacer lo mismo que en base.css */
/* $black: #34435e;
$white: #ffffff; */

/* General Styles Mejor mover esto a base.css ya que aplica a toda la app y no solo a Educacion.vue*/
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0 4em;
}

/* Timeline Styles */
.timeline {
  list-style: none;
  padding-left: 40px;
  min-width: 300px;
  max-width: 500px;
  margin: auto;
}

.timeline li {
  position: relative;
  padding: 20px 20px;
  font-size: 1em;
  line-height: 1.75em;
  /* color: $black; Esto no está aplicando el color */
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
  /* background-color: $black;  Esto no está aplicando el color */
  text-align: center;
  line-height: 1.25em;
  /* color: $white; Esto no está aplicando el color  */
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

.title {
  font-size: 1.2em;
  margin: 5px 0;
}

.descripcion {
  margin: 10px 0;
}

.enlace {
  /* color: $black; Esto no está aplicando el color  */
  text-decoration: underline;
  cursor: pointer;
}
</style>

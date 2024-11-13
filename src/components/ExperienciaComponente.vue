<script setup>


import { ref } from 'vue';


const experiencia = ref([
  {
    fecha: '2011 – Actualmente',
    title: 'GESTION Y ADMINISTRACION DE LA FUNDACION UNIVERSIDAD EMPRESA DEL SUR MENDOCINO',
    lugar: 'UTN SAN RAFAEL',
    descripcion: `Manejo experto de Tango Gestión para la gestión contable, administración financiera, presentación de estados contables y documentación legal.
    Coordinación integral de proyectos edilicios universitarios, en cuanto a la administración de compras de insumos, adquisición de materiales, cumpliendo normativas de comercio y gestionando relaciones con proveedores.
    Dirección de proyectos, subsidios y actividades interinstitucionales, liderando la coordinación administrativa.`,
    enlace: ''
  },
  {
    fecha: '2010 – 2011',
    title: 'IMPLEMENTACION Y PUESTA EN MARCHA SOFTWARE TANGO GESTION EN FUESM',
    lugar: 'UTN FRSR, San Rafael, Mendoza',
    descripcion: `Esta responsabilidad surgió tras optimizar la carga de una extensa encuesta (área de investigación de la UTN) mediante programación en Excel. Mi habilidad en esta tarea y la jubilación del encargado de contabilidad condujeron al Decano a designarme para liderar la transición a un sistema contable automatizado. Anteriormente la contabilidad era realizada manualmente.`,
    enlace: ''
  },
  {
    fecha: '2005 – Actualmente',
    title: 'ENCARGADA DEL PROGRAMA DAAD-UTN',
    lugar: 'UTN -FRSR',
    descripcion: `Desde el regreso del intercambio realizado en Alemania durante 1 año, soy la referente del programa de becas del cual participe, impulsando un ciclo de desarrollo sostenible.`,
    enlace: 'https://www.frsr.utn.edu.ar'
  },
  {
    fecha: '2005 - 2006',
    title: 'GESTION DEL MANTENIMIENTO DEL SISTEMA DE CALIDAD DE EMEPA S.A',
    lugar: 'Lujan de Cuyo, Mendoza',
    descripcion: `Gestión del mantenimiento del Sistema de Calidad, como así también en el asesoramiento para la implementación del Sistema integrado de gestión de Calidad, Medio Ambiente y Seguridad y Salud Ocupacional. ISO 9001:2000, ISO 14001:2004, OHSAS 18001:1999. Programación en Excel con Visual Basic`,
    enlace: 'https://emepamendoza.com'
  },
  {
    fecha: 'Marzo 2005 – septiembre 2005',
    title: 'PRACTICAS SUPERIORES EN ROBERT BOSH GMBH',
    lugar: 'Stuttgart, Alemania',
    descripcion: `Tareas en el Área de „Economía de materiales“.
    Asistencia en la “Base de datos generales de materiales” a través de SAP R/3.
    Análisis, optimización y consolidación de mejoras en el proceso de „Recepción de mercaderías“ desde el punto de vista ambiental (Recertificación ISO 14001).`,
    enlace: 'https://www.boschrexroth.com'
  }
]);
</script>

<template>
  <main>
    <ul>
      <li v-for="item in experiencia" :key="item.id">
        <div class="fecha">{{ item.fecha }}</div>
        <h3 class="title">{{ item.title }}</h3>
        <div class="lugar">{{ item.lugar }}</div>
        <div class="descripcion">{{ item.descripcion }}</div>
        <a v-if="item.enlace" :href="item.enlace" class="enlace" target="_blank">{{ item.enlace }}</a>

      </li>
    </ul>
  </main>
</template>


<style scoped>
/* Agrega estos estilos para la fecha */ 

.card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: rgb(28, 41, 52);
    border-radius: 15px;
}

.titulo {
    font-size: 1.5rem;
    color: #d53a9d; /* porque no se aplica el color?*/
}

.fecha {
    font-size: 1rem;
    color: #743ad5; /* y acaso no puedo hacer un gradiente como la linea de estudios?*/ 
    margin-top: 1rem;
}

.listado {
    display: flex;
    flex-direction: column;
}

.item {
    align-items: center;
    display: flex;
    flex-direction: column;  /*Alinea los elementos en columna dentro de cada item, supuestamente no vi el cambio*/
    padding: 1rem;
    gap: 1.5rem;
    
}

.lugar { 
  font-size: 1em; 
  font-style: italic; 
  margin: 5px 0; }

.enlace {
  text-decoration: underline;
  cursor: pointer;
  color: grey;
  font-size: 80%;
  font-style: italic;
}  
.descripcion { 
    margin: 10px 0; 
    text-align: justify;
}


</style>
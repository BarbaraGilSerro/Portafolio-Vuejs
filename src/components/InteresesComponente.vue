<script setup>
import { ref } from 'vue';
//import EstrellasFugaces from './EstrellasFugaces.vue';
import FondoLava from './FondoLava.vue' ;
//Este es un arreglo con ref para que se pueda reactivar el cambio de los intereses
const intereses = ref([
    'Es esencial en mi vida crear un enfoque holístico para mantener un balance saludable entre mis responsabilidades académicas y mi vida personal. Por lo cual intento crear rutinas que integre cuidado personal, ejercicio y actividades recreativas, buscando equilibrio entre mente, cuerpo y espíritu.',
    'Pasión por los Idiomas: Dedicación constante al aprendizaje y dominio de lenguas extranjeras, expandiendo mis horizontes profesionales y culturales.',
    'Búsqueda constante de conocimiento en áreas diversas, manteniendo una mente ágil, adaptable y siempre dispuesta a explorar nuevos horizontes.',
    'Me interesa la práctica deportiva que integra disciplinas individuales (Ping Pong, Escalada, Yoga) que potencian el autodesarrollo, y deportes grupales (Fútbol, Frisbee, 360 Ball) que fortalecen las habilidades colaborativas y de liderazgo'
]);
</script>

<template>
    <div class="intereses-contenedor">
        <!-- <EstrellasFugaces /> -->
         <FondoLava />
        <ul class="contenedor-lista">
            <li class="item" v-for="interes in intereses" :key="interes">
                {{ interes }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.intereses-contenedor {
    display: flex;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    background: transparent;
    margin: 0 auto;
    max-width: 100%;
    padding: 1rem;
    overflow: hidden;
    background: radial-gradient(circle at bottom, #0d1d31 0%, #743ad5 100%);
}

.contenedor-lista {
    list-style-type: none;
    padding: 1rem;
    margin-bottom: .5rem;
    color: var(--vt-c-white-soft);
    font-size: 1rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
}

.item {
    margin-bottom: 1rem;
}
</style>

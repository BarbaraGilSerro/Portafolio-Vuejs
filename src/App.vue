<script setup>
//App.vue es un archivo que la raiz de nuestra aplicacion y puede cargar archivos en Js y 
//ejecutar en forma de html y darle estilos
//Aca se coloca todo java script
import NavBar from './components/NavBar.vue';
import DatosPersonales from './components/DatosPersonales.vue';
import Educacion from './components/EducacionComponente.vue';
import ExperienciaComponente from './components/ExperienciaComponente.vue';
import ProyectosComponente from './components/ProyectosComponente.vue';
import HabilidadesComponente from './components/HabilidadesComponente.vue';
import InteresesComponente from './components/InteresesComponente.vue';
</script>

<template>
  <!---Aca empieza el html-->
<header>
<!--Barra de navegacion -->
      <NavBar />  
<!--Datos personales --> 
      <DatosPersonales/>     
</header>
<main>
  <!--Los estilos css se encuentran en base.css --> 
    <section id="educacion"><h2>Educación - Cursos</h2>
    <Educacion />
    </section>
    <section id="experiencia"><h2>Experiencia</h2></section>
    <ExperienciaComponente/>

    <section id="proyectos"><h2>Proyectos</h2></section>
    <ProyectosComponente/>
    <section id="habilidades"><h2>Habilidades</h2></section>
    <HabilidadesComponente/>
    <section id="intereses"><h2>Intereses</h2></section>
    <InteresesComponente/>
</main>
<footer>
    <a href="#top">Inicio</a>
    <p>© 2024 Bárbara Gil Serro - Portafolio web</p>
</footer>
</template>

<style scoped>

</style>

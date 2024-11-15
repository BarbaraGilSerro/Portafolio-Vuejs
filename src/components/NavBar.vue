<template>
  <nav class="navbar">
      <div class="navbar-menu">
        <ul class="navbar-list">
          <a v-for="nav in navegacion" :key="nav.nombre" :href="nav.enlace" class="nav-item">{{nav.nombre}}</a>
        </ul>
      </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const navegacion = ref([
  { id: 1, nombre: 'Educación', enlace: '#educacion' },
  { id: 2, nombre: 'Experiencia', enlace: '#experiencia' },
  { id: 3, nombre: 'Proyectos', enlace: '#proyectos' },
  { id: 4, nombre: 'Habilidades', enlace: '#habilidades' },
  { id: 5, nombre: 'Intereses', enlace: '#intereses' }
]);
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #d53a9d, #743ad5);
  color: #fff;
  padding: 0.1rem 1rem;
  height: 2.5rem;
  align-items: center;
}
.navbar-menu {
  display: flex;
  justify-content: center; /* Centra el contenido */
  width: 100%; /* Asegura que ocupe todo el ancho */
}
.navbar-list {
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: space-between; /* Distribuye los botones uniformemente */
}
.nav-item {
  flex-grow: 1; /* Hace que cada botón ocupe el mismo espacio */
  text-align: center;
  color: #2f2f2f;
  font-weight: bold;
  font-variant:small-caps;
  text-decoration: none;
  padding: 5px;
  border: 1px solid hsla(282, 96%, 11%, 0.2);
  border-radius: 5px;
  transition: 0.4s;
}
.nav-item:not(:last-child) {
  margin-right: 1rem; /* Espaciado entre botones */
}
.nav-item:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
@media (max-width: 768px) {
  .navbar-menu {
      justify-content: center; /* Centra los botones en móviles */
  }
}
</style>

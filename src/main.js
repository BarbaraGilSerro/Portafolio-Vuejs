import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// Configuración para tratar <css-doodle> como un Custom Element
app.config.compilerOptions.isCustomElement = (tag) => tag === 'css-doodle';

app.mount('#app');

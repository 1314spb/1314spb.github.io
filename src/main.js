/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: true,
});
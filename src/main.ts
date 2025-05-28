import { createApp } from 'vue'
import './assets/CSS/style.css'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import piniaPersistedState from 'pinia-plugin-persistedstate';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// FullCalendar ya maneja sus propios estilos en la versión 6.1.17

const app = createApp(App);

const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// Registrar VCalendar
app.use(VCalendar, {
  locales: {
    'es': {
      firstDayOfWeek: 1,
      masks: {
        weekdays: 'WWW',
        title: 'MMMM YYYY',
      },
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayShortNames: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    },
  },
});

pinia.use(piniaPersistedState);
app.use(pinia);
app.use(router);
app.mount('#app');

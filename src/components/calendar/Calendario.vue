<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Calendar as VCalendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

// Importaciones de FullCalendar
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

// Estado para el calendario
const selectedDate = ref(new Date());
const showDatePicker = ref(false);
const calendarRef = ref(null);
const currentView = ref('dayGridMonth');
const events = ref([
  {
    id: '1',
    title: 'Reunión de equipo',
    start: new Date(new Date().setHours(10, 0)),
    end: new Date(new Date().setHours(11, 30)),
    color: '#3498db',
    editable: true,
    description: 'Reunión semanal con el equipo de desarrollo'
  },
  {
    id: '2',
    title: 'Entrega de proyecto',
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
    color: '#e74c3c',
    allDay: true,
    description: 'Fecha límite para la entrega del proyecto'
  },
  {
    id: '3',
    title: 'Llamada con cliente',
    start: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(14, 0)),
    end: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(15, 0)),
    color: '#2ecc71',
    editable: true,
    description: 'Llamada de seguimiento con el cliente'
  }
]);

// Configuración del calendario v-calendar
const vCalendarOptions = {
  locale: 'es',
  color: '#3498db',
  titlePosition: 'center',
  navVisibility: 'focus',
  transition: 'fade',
  masks: {
    weekdays: 'WWW',
    title: 'MMMM YYYY',
  },
  attributes: [
    {
      key: 'today',
      highlight: {
        color: '#e74c3c',
        fillMode: 'outline',
        contentClass: 'font-bold',
      },
      dates: new Date(),
    },
  ],
};

interface FullCalendarOptions {
  plugins: any[];
  initialView: string;
  headerToolbar: {
    left: string;
    center: string;
    right: string;
  };
  locale: any;
  editable: boolean;
  selectable: boolean;
  selectMirror: boolean;
  dayMaxEvents: boolean;
  weekends: boolean;
  nowIndicator: boolean;
  height: string | number;
  themeSystem: string;
  eventTimeFormat: {
    hour: string;
    minute: string;
    meridiem: boolean;
  };
}

// Configuración de FullCalendar
const fullCalendarOptions: FullCalendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: currentView.value,
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  locale: esLocale,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  nowIndicator: true,
  height: 'auto',
  themeSystem: 'standard',
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false
  }
};

// Manejar la selección de fecha en v-calendar
const onDateSelect = (date) => {
  selectedDate.value = date;
  console.log('Fecha seleccionada:', date);
  
  // Si tenemos una referencia al calendario de FullCalendar, cambiamos la fecha
  if (calendarRef.value) {
    calendarRef.value.getApi().gotoDate(date);
  }
};

// Alternar la visibilidad del selector de fecha
const toggleDatePicker = () => {
  showDatePicker.value = !showDatePicker.value;
};

// Manejar eventos de FullCalendar
const handleDateClick = (arg) => {
  selectedDate.value = arg.date;
  console.log('Fecha clickeada:', arg.date);
};

const handleEventClick = (info) => {
  alert(`Evento: ${info.event.title}\nDescripción: ${info.event.extendedProps.description || 'Sin descripción'}`);
};

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color: string;
  editable: boolean;
  description: string;
}

interface EventDropInfo {
  event: {
    id: string;
    title: string;
    start: Date;
    end: Date;
  };
}

interface EventResizeInfo {
  event: {
    id: string;
    title: string;
    start: Date;
    end: Date;
  };
}

interface SelectInfo {
  start: Date;
  end: Date;
  allDay: boolean;
}

const handleEventDrop = (info: EventDropInfo): void => {
  if (!info?.event) return;

  events.value = events.value.map(event => 
    event.id === info.event.id
      ? { ...event, start: info.event.start, end: info.event.end || info.event.start }
      : event
  );
};

const handleEventResize = (info: EventResizeInfo): void => {
  if (!info?.event) return;

  events.value = events.value.map(event =>
    event.id === info.event.id
      ? { ...event, start: info.event.start, end: info.event.end }
      : event
  );
};

const handleSelect = (selectInfo: SelectInfo): void => {
  const title = prompt('Título del nuevo evento:');
  if (!title) return;

  const newEvent: CalendarEvent = {
    id: String(events.value.length + 1),
    title,
    start: selectInfo.start,
    end: selectInfo.end,
    allDay: selectInfo.allDay,
    color: '#3498db',
    editable: true,
    description: ''
  };

  events.value = [...events.value, newEvent];
  
  // Asegurarse de que el calendario existe antes de llamar a unselect
  const calendar = calendarRef.value?.getApi();
  if (calendar) {
    calendar.unselect();
  }
};

// Cambiar la vista del calendario
type CalendarViewType = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';

const changeView = (viewName: CalendarViewType): void => {
  currentView.value = viewName;
  const calendar = calendarRef.value?.getApi();
  if (calendar) {
    calendar.changeView(viewName);
  }
};

// Nombres de los meses y días en español para v-calendar
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
</script>

<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <h2>Calendario de Tareas</h2>
      <div class="view-controls">
        <button @click="changeView('dayGridMonth')" :class="{ active: currentView === 'dayGridMonth' }" class="view-button">Mes</button>
        <button @click="changeView('timeGridWeek')" :class="{ active: currentView === 'timeGridWeek' }" class="view-button">Semana</button>
        <button @click="changeView('timeGridDay')" :class="{ active: currentView === 'timeGridDay' }" class="view-button">Día</button>
      </div>
      <div class="selected-date">
        <span>Fecha seleccionada: {{ selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
        
      </div>
    </div>
    
    <div v-if="showDatePicker" class="date-picker-container">
      <DatePicker 
        v-model="selectedDate" 
        :masks="vCalendarOptions.masks"
        :attributes="vCalendarOptions.attributes"
        :title-position="vCalendarOptions.titlePosition"
        :color="vCalendarOptions.color"
        :transition="vCalendarOptions.transition"
        :locale="vCalendarOptions.locale"
        @dayclick="onDateSelect"
        is-expanded
      />
    </div>
    
    <div class="calendar-view">
      <!-- Componente FullCalendar para vistas avanzadas y eventos -->
      <FullCalendar
        ref="calendarRef"
        :options="{
          ...fullCalendarOptions,
          events: events,
          dateClick: handleDateClick,
          eventClick: handleEventClick,
          eventDrop: handleEventDrop,
          eventResize: handleEventResize,
          select: handleSelect
        }"
        class="full-calendar"
      />
    </div>
    
    <div class="events-legend">
      <h3>Eventos</h3>
      <div class="events-list">
        <div v-for="event in events" :key="event.id" class="event-item" :style="{ borderLeft: `4px solid ${event.color}` }">
          <div class="event-title">{{ event.title }}</div>
          <div class="event-time">
            {{ new Date(event.start).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: event.allDay ? null : 'short' }) }}
            {{ event.end && !event.allDay ? ' - ' + new Date(event.end).toLocaleTimeString('es-ES', { timeStyle: 'short' }) : '' }}
          </div>
          <div class="event-description">{{ event.description }}</div>
        </div>
      </div>
      <div class="events-help">
        <p><strong>Consejos:</strong></p>
        <ul>
          <li>Haz clic en una fecha para seleccionarla</li>
          <li>Haz clic y arrastra para crear un nuevo evento</li>
          <li>Arrastra un evento para moverlo</li>
          <li>Estira un evento para cambiar su duración</li>
          <li>Haz clic en un evento para ver sus detalles</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 1200px;
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.calendar-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 15px;
}

.calendar-header h2 {
  font-size: 1.8rem;
  margin-bottom: 5px;
}

.view-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.view-button {
  background-color: #34495e;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.2s;
}

.view-button:hover {
  background-color: #2c3e50;
  transform: translateY(-2px);
}

.view-button.active {
  background-color: #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.selected-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.date-picker-button {
  background-color: #3498db;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.2s;
}

.date-picker-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.date-picker-container {
  margin-bottom: 20px;
  width: 100%;
}

.calendar-view {
  width: 100%;
  height: 600px;
  margin-bottom: 20px;
}

.full-calendar {
  height: 100%;
  width: 100%;
}

.events-legend {
  background-color: #34495e;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
}

.events-legend h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  text-align: center;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.event-item {
  background-color: #2c3e50;
  border-radius: 6px;
  padding: 12px;
  transition: all 0.2s;
  cursor: pointer;
}

.event-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.event-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.event-time {
  font-size: 0.9rem;
  color: #bdc3c7;
  margin-bottom: 5px;
}

.event-description {
  font-size: 0.9rem;
  color: #ecf0f1;
}

.events-help {
  background-color: #2c3e50;
  border-radius: 6px;
  padding: 12px;
  margin-top: 15px;
}

.events-help p {
  margin-bottom: 8px;
}

.events-help ul {
  padding-left: 20px;
}

.events-help li {
  margin-bottom: 5px;
  font-size: 0.9rem;
}

/* Personalización de v-calendar */
:deep(.vc-container) {
  --vc-font-family: inherit;
  --vc-text-sm: 0.9rem;
  --vc-text-base: 1rem;
  --vc-text-lg: 1.1rem;
  --vc-rounded-full: 9999px;
  --vc-rounded-lg: 0.5rem;
  --vc-rounded-md: 0.25rem;
  --vc-rounded-sm: 0.125rem;
  --vc-rounded: 0.25rem;
  --vc-bg-light: #2c3e50;
  --vc-bg-dark: #1a2530;
  --vc-border-light: #3c5473;
  --vc-border-dark: #1a2530;
  --vc-text-light: #ffffff;
  --vc-text-dark: #e0e0e0;
  --vc-accent-50: #e3f2fd;
  --vc-accent-100: #bbdefb;
  --vc-accent-200: #90caf9;
  --vc-accent-300: #64b5f6;
  --vc-accent-400: #42a5f5;
  --vc-accent-500: #2196f3;
  --vc-accent-600: #1e88e5;
  --vc-accent-700: #1976d2;
  --vc-accent-800: #1565c0;
  --vc-accent-900: #0d47a1;
  border-radius: 10px;
  border: 1px solid var(--vc-border-light);
}

:deep(.vc-header) {
  padding: 10px 0;
}

:deep(.vc-weeks) {
  padding: 5px;
}

:deep(.vc-day) {
  transition: all 0.2s;
}

:deep(.vc-day:hover) {
  background-color: rgba(255, 255, 255, 0.1);
}

:deep(.vc-day-content) {
  font-weight: bold;
}

/* Personalización de FullCalendar */
:deep(.fc) {
  --fc-border-color: #3c5473;
  --fc-button-text-color: #ffffff;
  --fc-button-bg-color: #3498db;
  --fc-button-border-color: #3498db;
  --fc-button-hover-bg-color: #2980b9;
  --fc-button-hover-border-color: #2980b9;
  --fc-button-active-bg-color: #2980b9;
  --fc-button-active-border-color: #2980b9;
  --fc-event-bg-color: #3498db;
  --fc-event-border-color: #3498db;
  --fc-event-text-color: #ffffff;
  --fc-today-bg-color: rgba(52, 152, 219, 0.1);
  --fc-page-bg-color: #2c3e50;
  --fc-neutral-bg-color: #34495e;
  --fc-neutral-text-color: #ffffff;
  --fc-list-event-hover-bg-color: #34495e;
  --fc-highlight-color: rgba(52, 152, 219, 0.3);
}

:deep(.fc-theme-standard) {
  font-family: inherit;
}

:deep(.fc-theme-standard th) {
  padding: 10px 0;
  background-color: #34495e;
}

:deep(.fc-theme-standard td) {
  border-color: #3c5473;
}

:deep(.fc-day-today) {
  background-color: rgba(52, 152, 219, 0.1) !important;
}

:deep(.fc-event) {
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

:deep(.fc-event:hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.fc-toolbar-title) {
  font-size: 1.4rem !important;
  font-weight: bold;
}

:deep(.fc-button) {
  border-radius: 5px !important;
  text-transform: capitalize !important;
  transition: all 0.2s !important;
}

:deep(.fc-button:hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.fc-timegrid-slot) {
  height: 40px !important;
}

:deep(.fc-timegrid-axis) {
  padding-right: 8px;
}

:deep(.fc-list-day-cushion) {
  background-color: #34495e !important;
}

:deep(.fc-list-event td) {
  padding: 8px !important;
}

:deep(.fc-list-event-time) {
  width: 120px;
}

@media (max-width: 768px) {
  .calendar-container {
    padding: 15px;
  }
  
  .calendar-view {
    height: 500px;
  }
  
  .events-list {
    max-height: 200px;
  }
  
  :deep(.fc-toolbar) {
    flex-direction: column;
    gap: 10px;
  }
  
  :deep(.fc-toolbar-title) {
    font-size: 1.2rem !important;
  }
}
</style>
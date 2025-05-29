<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { reloadTasks } from "./ServicesTask/reload.task";
import type { AppCreateTask } from "./Types/Create.task";

// Estado para almacenar las tareas
const tasks = ref<AppCreateTask[]>([]);

// Estado para el calendario
const currentDate = ref(new Date());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());

// Nombres de los meses y días
const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

// Calcular los días del mes actual
const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

// Calcular el primer día de la semana del mes actual
const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

// Generar la matriz del calendario
const calendarDays = computed(() => {
  const days = [];
  const daysCount = daysInMonth.value;
  const firstDay = firstDayOfMonth.value;

  // Agregar días vacíos al principio para alinear con el día de la semana correcto
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Agregar los días del mes
  for (let i = 1; i <= daysCount; i++) {
    days.push(i);
  }

  return days;
});

// Función para ir al mes anterior
const previousMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

// Función para ir al mes siguiente
const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

// Función para ir al mes actual
const goToToday = () => {
  currentDate.value = new Date();
};

// Función para obtener las tareas del día
const getTasksForDay = (day: number | null) => {
  if (day === null) return [];

  // Filtrar tareas por estado (solo mostrar pendientes y realizadas)
  return tasks.value.filter(
    (task) => task.status === "pendiente" || task.status === "realizada"
  );
};

// Función para obtener el color de fondo según la prioridad
const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Alta":
      return "rgba(255, 0, 0, 0.2)";
    case "Media":
      return "rgba(255, 255, 0, 0.2)";
    case "Baja":
      return "rgba(0, 255, 0, 0.2)";
    default:
      return "transparent";
  }
};

// Función para obtener el ícono de prioridad
const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "Alta":
      return "🔴";
    case "Media":
      return "🟡";
    case "Baja":
      return "🟢";
    default:
      return "";
  }
};

// Cargar tareas al montar el componente
onMounted(async () => {
  const loadedTasks = await reloadTasks();
  if (loadedTasks) {
    tasks.value = loadedTasks;
  }
});

// Observar cambios en el mes actual para recargar tareas si es necesario
watch([currentMonth, currentYear], async () => {
  const loadedTasks = await reloadTasks();
  if (loadedTasks) {
    tasks.value = loadedTasks;
  }
});
</script>

<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <button @click="previousMonth" class="nav-button">&#8592;</button>
      <h2>{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
      <button @click="nextMonth" class="nav-button">&#8594;</button>
    </div>

    <button @click="goToToday" class="today-button">Hoy</button>

    <div class="calendar">
      <!-- Días de la semana -->
      <div class="weekday" v-for="day in dayNames" :key="day">{{ day }}</div>

      <!-- Días del mes -->
      <div
        v-for="(day, index) in calendarDays"
        :key="index"
        :class="[
          'day',
          {
            empty: day === null,
            today:
              day === new Date().getDate() &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear(),
          },
        ]"
      >
        <div class="day-number" v-if="day !== null">{{ day }}</div>
        <div class="day-tasks" v-if="day !== null">
          <div
            v-for="task in getTasksForDay(day)"
            :key="task.id"
            class="task-item"
            :style="{ backgroundColor: getPriorityColor(task.priority) }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(32, 31, 31);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nav-button {
  background-color: #414bb2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
}

.today-button {
  background-color: #414bb2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.weekday {
  text-align: center;
  font-weight: bold;
  padding: 10px;
  background-color: #414bb2;
  border-radius: 4px;
}

.day {
  min-height: 100px;
  padding: 5px;
  border: 1px solid #ffffff52;
  border-radius: 4px;
  position: relative;
}

.empty {
  background-color: rgba(255, 255, 255, 0.05);
}

.today {
  border: 2px solid #414bb2;
}

.day-number {
  font-weight: bold;
  margin-bottom: 5px;
}

.day-tasks {
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
  max-height: 80px;
}

div.day-tasks {
  overflow: hidden;
}

.task-item {
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-status {
  margin-right: 5px;
}

.task-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-priority {
  margin-left: 5px;
}
</style>

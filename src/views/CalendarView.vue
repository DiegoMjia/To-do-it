<script setup lang="ts">
import Calendario from "../components/calendar/Calendario.vue";
</script>

<template>
  <div class="calendar-view-container">
    <div class="calendar-header">
      <h1>📅 Calendario de Tareas</h1>
      <p>Visualiza y organiza tus tareas en el calendario</p>
    </div>
    
    <div class="calendar-content">
      <Calendario />
    </div>
  </div>
</template>

<style scoped>
.calendar-view-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.calendar-header {
  text-align: center;
  margin-bottom: 30px;
}

.calendar-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: white;
}

.calendar-header p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

.calendar-content {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
}
</style>
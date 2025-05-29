<script setup lang="ts">
import Sidebar from "../../components/task/Sidebar.vue";
import Calendar from "../../components/task/Calendar.vue";
import { ref } from "vue";

// Estado para controlar opciones (similar a MainTask.vue)
let showOptions = ref<boolean>(true);

const toggleOptions = ($event: string) => {
  if ($event == "AddTask" || $event == "Cancel") {
    showOptions.value = !showOptions.value;
    return false;
  }
};
</script>

<template>
  <div class="content">
    <Sidebar @option="toggleOptions" />
    <div class="calendar-view">
      <h1>Calendario de Tareas</h1>
      <Calendar />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

.content {
  display: flex;
  min-height: 100vh;
  background-color: rgb(32, 31, 31);
  color: white;
}

.calendar-view {
  margin-left: 290px; /* Mismo margen que en otros componentes para alinearse con la barra lateral */
  padding: 20px;
  width: calc(100% - 290px);
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}
</style>
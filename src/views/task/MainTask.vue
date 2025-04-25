<script setup lang="ts">
import Sidebar from "../../components/task/Sidebar.vue";
import AddTask from "../../components/task/AddTask.vue";
import { ref } from "vue";
import ShowTasks from "../../components/task/ShowTasks.vue";

const showOptions = ref(true);
const taskModal = ref<HTMLElement | null>(null);

const toggleOptions = ($event: string) => {
  if ($event === "Agregar tarea") {
    showOptions.value = false;
  }
};

const handlerOptions = ($event: string) => {
  console.log("handlerOptions", $event);
  if ($event === "Guardar" || $event === "Cancelar") {
    showOptions.value = true;
  }
};

</script>

<template>
  <div class="content">
    <Sidebar @option="toggleOptions" />
    <AddTask
      @addTask="handlerOptions"
      :class="showOptions ? '' : 'hidden'"
      class="taskModalClass"
      ref="taskModal" 
    />
    <ShowTasks />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

.taskModalClass {
  display: none;
}

.taskModalClass.hidden {
  display: flex;
  
}
</style>

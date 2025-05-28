<script setup lang="ts">
import Sidebar from "../../components/task/Sidebar.vue";
import AddTask from "../../components/task/AddTask.vue";
import EditTask from "../../components/task/EditTask.vue";
import { ref } from "vue";
import ShowTasks from "../../components/task/ShowTasks.vue";
import type { ITask, AppCreateTask } from "../../components/task/Types/Create.task";

let showOptions = ref<boolean>(true);
const taskModal = ref<HTMLElement | null>(null);

// Estado para el modal de edición
const showEditModal = ref<boolean>(false);
const currentTask = ref<AppCreateTask | null>(null);

const toggleOptions = ($event: string) => {
  console.log(`desde el sidebar ${$event}`);
  if ($event == "AddTask" || $event == "Cancel") {
    showOptions.value = !showOptions.value;
    return false;
  }
};

const handlerOptions = ($event: ITask) => {
  if (!$event.title) {
    alert("Por favor, rellene por lo menos el título de la tarea.");
    showOptions.value = !showOptions.value;
    return false;
  }
};

// Función para manejar la edición de tareas
const handleEditTask = (task: AppCreateTask) => {
  currentTask.value = task;
  showEditModal.value = true;
};

// Función para cerrar el modal de edición
const closeEditModal = () => {
  showEditModal.value = false;
  currentTask.value = null;
};

// Función para actualizar las tareas después de editar
const handleTaskUpdate = (tasks: AppCreateTask[]) => {
  // Las tareas se actualizarán automáticamente en ShowTasks
  // gracias al watch que ya tiene implementado
  closeEditModal();
};
</script>

<template>
  <div class="content">
    <Sidebar @option="toggleOptions" />
    <AddTask
      @addTask="handlerOptions"
      @closeModaltask="toggleOptions"
      :class="showOptions ? '' : 'hidden'"
      class="taskModalClass"
      ref="taskModal"
    />

    <!-- Componente de edición de tareas -->
    <EditTask
      v-if="currentTask"
      :task="currentTask"
      :show="showEditModal"
      @updateTask="handleTaskUpdate"
      @closeEditModal="closeEditModal"
    />

    <ShowTasks 
      @addTaskSuggest="toggleOptions" 
      @editTask="handleEditTask"
    />
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

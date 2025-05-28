<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { AppCreateTask } from "./Types/Create.task";
import { reloadTasks } from "./ServicesTask/reload.task";
import axios from "axios";
const taskInfo = ref<AppCreateTask[]>([]);

// Estado para controlar la edición de tareas
const isEditing = ref(false);
const currentEditTask = ref<AppCreateTask | null>(null);

const emit = defineEmits(["addTaskSuggest", "editTask"]);

const handlerAddTaskSuggest = async (valueParam: string, option: string) => {
  const tasks = await reloadTasks();
  if (tasks) {
    taskInfo.value = tasks;
  }
  emit("addTaskSuggest", valueParam);
};

// Nueva función para editar una tarea
const editTask = async (taskId: string) => {
  try {
    // Encontrar la tarea a editar
    const taskToEdit = taskInfo.value.find(task => task.id === taskId);
    if (taskToEdit) {
      // Guardar la tarea actual para edición
      currentEditTask.value = { ...taskToEdit };
      // Emitir evento para abrir el modal de edición
      emit("editTask", currentEditTask.value);
    }
  } catch (error) {
    console.error("Error al preparar la tarea para edición:", error);
  }
};

// Función para actualizar una tarea en la API
const updateTask = async (taskId: string, updatedData: Partial<AppCreateTask>) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    await axios.patch(`${apiUrl}/${taskId}`, updatedData);
    const tasks = await reloadTasks();
    if (tasks) {
      taskInfo.value = tasks;
    }
  } catch (error) {
    console.error("Error al actualizar la tarea en la API:", error);
  }
};

const reverseStatus = async (taskId: string) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    await axios.patch(`${apiUrl}/${taskId}`, {
      status: "pendiente",
    });
    const tasks = await reloadTasks();
    if (tasks) {
      taskInfo.value = tasks;
    }
  } catch (error) {
    console.error("Error al actualizar la tarea en la API:", error);
  }
};

const chectTask = async (taskId: string) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    await axios.patch(`${apiUrl}/${taskId}`, {
      status: "realizada",
    });
    const tasks = await reloadTasks();
    if (tasks) {
      taskInfo.value = tasks;
    }
  } catch (error) {
    console.error("Error al actualizar la tarea en la API:", error);
  }
};

const removeTaskCarriedOut = async (taskId: string) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    await axios.patch(`${apiUrl}/${taskId}`, {
      status: "borrada",
    });
    const tasks = await reloadTasks();
    if (tasks) {
      taskInfo.value = tasks;
    }
  } catch (error) {
    console.error("Error al actualizar la tarea en la API:", error);
  }
};

const priorityIcons = {
  Baja: "🟢",
  Media: "🟡",
  Alta: "🔴",
};

const getPriorityIcon = (priority: string) => {
  return priorityIcons[priority as keyof typeof priorityIcons] || "";
};

onMounted(() => {
  reloadTasks().then((tasks) => {
    if (tasks) {
      taskInfo.value = tasks as AppCreateTask[];
    }
  });
});

watch(
  () => taskInfo.value,
  (newValue) => {
    if (newValue.length > 0) {
      reloadTasks().then((tasks) => {
        if (tasks) {
          taskInfo.value = tasks as AppCreateTask[];
        }
      });
    }
  }
);
</script>

<template>
  <!-- Primer caso: No hay tareas en absoluto -->
  <div class="noTaskFound" v-if="taskInfo.length <= 0">
    <h3>Aun sin tareas para mostrar.</h3>
    <button
      class="suggestAddTask"
      @click="handlerAddTaskSuggest('AddTask', 'add')"
    >
      Agrega una tarea.
    </button>
  </div>

  <!-- Hay tareas, mostramos la estructura principal -->
  <div v-else class="gridContainer">
    <div
      class="titlePresentationContainer"
      style="text-align: start; padding: 15px"
    >
      <h2 class="title">
        <span style="font-size: 30px">🌟</span>Mira tus tareas
      </h2>

      <!-- Sección de tareas pendientes -->
      <h2>📋Tareas pendientes</h2>

      <!-- Muestra mensaje si no hay tareas pendientes -->
      <div
        class="noTaskFound"
        v-if="taskInfo.filter((t) => t.status === 'pendiente').length === 0"
      >
        <h3>Te quedaste sin tareas ¡Vaya ganador/a!🏆🏅</h3>
        <button
          class="suggestAddTask"
          @click="handlerAddTaskSuggest('AddTask', 'add')"
        >
          Agrega una tarea.
        </button>
      </div>

      <!-- Lista de tareas pendientes -->
      <div
        class="pendingTasks"
        v-for="task in taskInfo.filter((t) => t.status === 'pendiente')"
        :key="task.id"
      >
        <div class="container">
          <span class="taskFixed">⌛</span>
          <div class="task">
            <p>{{ task.title }}</p>
            <p>
              {{ task.priority }}
              <span>{{ getPriorityIcon(task.priority) }}</span>
            </p>
            <span class="description" v-if="task.description">{{
              task.description
            }}</span>
          </div>
          <div class="containerIcons">
            <div class="checkTask" @click="chectTask(task.id!)"></div>
            <div class="edit" @click="editTask(task.id!)"></div>
            <div class="trash" @click="removeTaskCarriedOut(task.id!)"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de tareas realizadas -->
    <div class="taskCompleted content1">
      <h2
        class="titleSection"
        style="font-size: 30px"
        v-if="taskInfo.filter((t) => t.status === 'realizada').length > 0"
      >
        ✏️Tareas realizadas
      </h2>
      <div
        class="container"
        v-for="task in taskInfo.filter((t) => t.status === 'realizada')"
        :key="task.id"
      >
        <span class="taskFixed">✅</span>
        <div class="task">
          <p>{{ task.title }}</p>
          <p>
            {{ task.priority }}
            <span>{{ getPriorityIcon(task.priority) }}</span>
          </p>
          <span class="description" v-if="task.description">{{
            task.description
          }}</span>
        </div>
        <div class="containerIcons">
          <div class="refresh" @click="reverseStatus(task.id!)"></div>
          <div class="edit" @click="editTask(task.id!)"></div>
          <div class="trash" @click="removeTaskCarriedOut(task.id!)"></div>
        </div>
      </div>
    </div>

    <!-- Sección de tareas borradas (tenia planeado meterlas en otra seccion de la página, pero ya es demasiado tarde, no me da el tiempo).-->
    <div
      class="trashTasks"
      v-if="taskInfo.filter((t) => t.status === 'borrada').length > 0"
    >
      <h2 style="font-size: 30px">🗑️Tareas borradas</h2>
      <div
        class="container"
        v-for="task in taskInfo.filter((t) => t.status === 'borrada')"
        :key="task.id"
      >
        <span class="taskFixed">❌</span>
        <div class="task">
          <p>{{ task.title }}</p>
          <p>{{ task.priority }}</p>
          <span class="description" v-if="task.description">{{
            task.description
          }}</span>
        </div>
        <div class="containerIcons">
          <div class="edit" @click="editTask(task.id!)"></div>
          <div class="trash"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./../../assets/CSS/components/ShowTask.css"></style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import Sidebar from "./Sidebar.vue";
import { reloadTasks } from "./ServicesTask/reload.task";
import type { AppCreateTask } from "./Types/Create.task";
const taskInfo = ref<AppCreateTask[]>([]);
const apiUrl = import.meta.env.VITE_API_URL;
const getDeletedTasks = async () => {
  try {
    const response = await axios.get(apiUrl);
    taskInfo.value = response.data;
  } catch (error) {
    console.error("Error fetching deleted tasks:", error);
  }
};

onMounted(() => {
  getDeletedTasks();
});

const reverseStatus = async (taskId: string) => {
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
</script>

<template>
  <Sidebar />

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
        <div class="refresh"></div>
        <div class="trash" @click="reverseStatus(task.id!)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./../../assets/CSS/components/ShowTask.css";

.trashTasks {
  margin-left: 290px;
}
</style>

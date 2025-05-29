<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { ITask, AppCreateTask } from "./Types/Create.task";
import { reloadTasks } from "./ServicesTask/reload.task";
import axios from "axios";

// Propiedades recibidas del componente padre
const props = defineProps<{
  task: AppCreateTask;
  show: boolean;
}>();

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
const hh = String(now.getHours()).padStart(2, "0");
const min = String(now.getMinutes()).padStart(2, "0");

const minDateTime = ref(`${yyyy}-${mm}-${dd}T${hh}:${min}`);
const selectedDateTime = ref("");

const emit = defineEmits(["updateTask", "closeEditModal"]);

// Referencias reactivas para los campos de la tarea
const taskId = ref<string>("");
const taskCode = ref<string>("");
const taskTitle = ref<string>("");
const taskDescription = ref<string>("");
const taskPriority = ref<string>("Baja");
const status = ref<string>("pendiente");
const completed = ref<boolean>(false);
const isActive = ref<boolean>(true);

// Observar cambios en la prop task para actualizar los campos
watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      taskId.value = newTask.id || "";
      taskCode.value = newTask.code;
      taskTitle.value = newTask.title;
      taskDescription.value = newTask.description;
      taskPriority.value = newTask.priority;
      status.value = newTask.status;
      completed.value = newTask.is_completed;
      isActive.value = newTask.isActive || true;
    }
  },
  { immediate: true }
);

const updateTask = async (option: string) => {
  if (option === "Guardar") {
    if (!taskTitle.value) {
      alert("Por favor, ingrese un título para la tarea.");
      return;
    }

    const updatedTask: ITask = {
      code: taskCode.value,
      title: taskTitle.value,
      description: taskDescription.value,
      priority: taskPriority.value,
      status: status.value,
      is_completed: completed.value,
      isActive: isActive.value,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.patch(`${apiUrl}/${taskId.value}`, updatedTask);
      
      // Recargar tareas y notificar al componente padre
      const tasks = await reloadTasks();
      emit("updateTask", tasks);
      
      // Cerrar el modal
      closeEditModal("Cancel");
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  } else {
    closeEditModal("Cancel");
  }
};

const closeEditModal = (data: string) => {
  emit("closeEditModal", data);
};

onMounted(() => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeEditModal("Cancel");
    } else if (event.key === "Enter") {
      updateTask("Guardar");
    }
  });
});
</script>

<template>
  <div class="taskContainer" v-if="show">
    <div class="taskContent">
      <div class="title">
        <span
          class="iconEditTask"
          style="font-size: 50px; color: #414bb2; padding-right: 10px"
          >✏️</span
        >
        <h2 style="font-size: 40px; display: inline-block">Editar tarea</h2>
      </div>
      <h2>Titulo</h2>
      <input
        type="text"
        v-model="taskTitle"
        placeholder="Ingrese el titulo de la tarea"
      />
      <h2>Descripción</h2>
      <textarea
        v-model="taskDescription"
        placeholder="Ingrese la descripción de la tarea (Opcional)"
      ></textarea>
      <form>
        <label for="menu"
          >Aquí puede elegir una prioridad <span>(Opcional).</span></label
        >
        <select id="menu" name="menu" v-model="taskPriority">
          <option value="Baja">🟢Baja</option>
          <option value="Media">🟡Media</option>
          <option value="Alta">🔴Alta</option>
        </select>
      </form>
      <form>
        <label for="status">Estado de la tarea</label>
        <select id="status" name="status" v-model="status">
          <option value="pendiente">⌛ Pendiente</option>
          <option value="realizada">✅ Realizada</option>
          <option value="borrada">❌ Borrada</option>
        </select>
      </form>
      <div class="buttonContainer">
        <button
          class="cancelTask"
          style="background-color: transparent"
          @click="closeEditModal('Cancel')"
        >
          Cancelar
        </button>
        <button class="saveTask" @click="updateTask('Guardar')">Guardar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.taskContainer {
  height: 580px;
  width: 500px;
  background-color: rgb(32, 31, 31);
  border: 1px solid #ffffff52;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5);
  padding: 25px;
  align-items: start;
  text-align: start;
  z-index: 200;
  position: fixed;
}

form {
  display: flex;
  margin: 10px 0 10px 0;
  flex-direction: column;
  width: 100%;
}

#menu, #status {
  width: 70%;
  padding: 5px;
  display: inline-block;
}

input,
textarea,
button,
select {
  font-family: "Roboto", sans-serif;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.taskContent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  text-align: start;
  width: 100%;
  height: 100%;
  position: relative;
}

input {
  background-attachment: red;
  width: 90%;
  height: 40px;
  outline: none;
  border: 1px solid #fff;
}

textarea {
  width: 90%;
  height: 40px;
  max-height: 60px;
  outline: none;
  border: 1px solid #fff;
  resize: vertical;
}

button {
  width: 30%;
  height: 40px;
  border-radius: 5px;
  background-color: #414bb2;
  cursor: pointer;
  margin: 15px;
}

.buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  position: absolute;
  margin-top: 10px;
  bottom: 0;
}
</style>
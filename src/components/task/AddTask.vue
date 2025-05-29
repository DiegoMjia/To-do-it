<script setup lang="ts">
import { ref } from "vue";
import type { ITask } from "./Types/Create.task";
import { reloadTasks } from "./ServicesTask/reload.task";
import axios from "axios";

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
const hh = String(now.getHours()).padStart(2, "0");
const min = String(now.getMinutes()).padStart(2, "0");

const minDateTime = ref(`${yyyy}-${mm}-${dd}T${hh}:${min}`);
const selectedDateTime = ref("");

const emit = defineEmits(["addTask", "closeModaltask"]);

const taskCode = ref<string>(`UHC${0 + 1}`);

const taskTitle = ref<string>("");
const taskDescription = ref<string>("");
const taskPriority = ref<string>("Baja");
const status = ref<string>("pendiente");
const completed = ref<boolean>(false);
const isActive = ref<boolean>(true);

const data = ref<ITask>();

const addTask = (option: string) => {
  if (option === "Guardar") {
    if (!taskTitle.value) {
      alert("Por favor, ingrese un título para la tarea.");
      return;
    }
    data.value = {
      code: taskCode.value,
      title: taskTitle.value,
      description: taskDescription.value,
      priority: taskPriority.value,
      status: status.value,
      is_completed: completed.value,
      isActive: isActive.value,
    };

    const responseTask = postTask(data.value);

    if (!responseTask) {
      console.error("Error al guardar la tarea", responseTask);
    }

    emit("addTask", data.value);

    reloadTasks().then((tasks) => {
      console.log("Tareas actualizadas después de agregar:", tasks);
    });
  }
  closeModalTask("Cancel");
  return false;
};

const closeModalTask = (data: string) => {
  emit("closeModaltask", data);
};

const postTask = async (data: ITask) => {
  const response = await axios
    .post("http://localhost:3000/task", data)
    .catch((error) => {
      throw new Error("Error al guardar la tarea " + error);
    });
  return response;
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModalTask("Cancel");
  }
});
</script>

<template>
  <div class="taskContainer">
    <div class="taskContent">
      <div class="title">
        <span
          class="iconAddTask"
          style="font-size: 50px; color: #414bb2; padding-right: 10px"
          >+</span
        >
        <h2 style="font-size: 40px; display: inline-block">Agregar tarea</h2>
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
      <div class="buttonContainer">
        <button
          class="cancelTask"
          style="background-color: transparent"
          @click="closeModalTask('Cancel')"
        >
          Cancelar
        </button>
        <button class="saveTask" @click="addTask('Guardar')">Guardar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.taskContainer {
  height: 510px;
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

#menu {
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

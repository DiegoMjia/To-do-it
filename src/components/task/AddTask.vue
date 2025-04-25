<script setup lang="ts">
import { ref } from "vue";
const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
const hh = String(now.getHours()).padStart(2, "0");
const min = String(now.getMinutes()).padStart(2, "0");

const minDateTime = ref(`${yyyy}-${mm}-${dd}T${hh}:${min}`);
const selectedDateTime = ref("");

const emit = defineEmits(["addTask"]);
const taskTitle = ref("");
const taskDescription = ref("");
const taskPriority = ref("Baja");

const addTask = (option: string) => {
  emit("addTask", option.toString());
};
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
        <label for="menu">Selecciona una prioridad: </label>
        <select id="menu" name="menu" v-model="taskPriority">
          <option value="Baja">🟢Baja</option>
          <option value="Media">🟡Media</option>
          <option value="Alta">🔴Alta</option>
        </select>
      </form>
      <h2>Fecha de entrega</h2>
      <input
        type="datetime-local"
        :min="minDateTime"
        v-model="selectedDateTime"
        placeholder="Ingrese la fecha de entrega de la tarea"
      />
      <div class="buttonContainer">
        <button
          class="cancelTask"
          style="background-color: transparent"
          @click="addTask('Cancelar')"
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
  flex-direction: column;
  height: 600px;
  width: 500px;
  background-color: rgb(32, 31, 31);
  border: 1px solid #ffffff52;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Estilos para el botón de cierre */
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5);
  padding: 25px;
  align-items: start;
  text-align: start;
  gap: 10px;
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

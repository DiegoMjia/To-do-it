<script setup lang="ts">
import { ref } from "vue";
import logOutWhite from "../../assets/icons/logOutWhite.svg";
import deleteAccountWhite from "../../assets/SidebarIcons/DeleteAccount/deleteAccountWhite.svg";

import addTaskWhite from "../../assets/SidebarIcons/addTaskWhite.svg";
import showTaskWhite from "../../assets/SidebarIcons/showTaskWhite.svg";
import calendarWhite from "../../assets/SidebarIcons/calendarWhite.svg";

const optionsAccount = [
  {
    option: "Eliminar cuenta",
    icon: deleteAccountWhite,
  },
  {
    option: "Cerrar sesión",
    icon: logOutWhite,
  },
];

const optionsNotes = [
  {
    option: "Agregar tarea",
    icon: addTaskWhite,
  },
  {
    option: "Mostrar tareas",
    icon: showTaskWhite,
  },
  {
    option: "Calendario",
    icon: calendarWhite,
  },
];

const showOptions = ref(false);
const emit = defineEmits(['option']);

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

const handlerOptions = (option: string) => {
  emit('option', option.toString());
};
</script>

<template>
  <div class="sideContainer" ref="sideContainer">
    <div class="headerSide" @click="toggleOptions">
      <section class="accountInfo">
        <div class="iconsUser"></div>
        <p style="margin-left: 40px">Username</p>
      </section>
    </div>
    <div class="optionsContainer" :class="showOptions ? '' : 'hidden'">
      <p v-for="option in optionsAccount">
        <img :src="option.icon" alt="icon" />
        {{ option.option }}
      </p>
    </div>
    <div class="sidebarContent">
      <div class="sidebarGroup">
        <p v-for="option in optionsNotes" @click="handlerOptions(option.option)">
          <img :src="option.icon" alt="icon" />
          {{ option.option }}
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="logo">X</div> -->
</template>

<style scoped>
.sideContainer {
  user-select: none;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 290px;
  height: 100vh;
  background-color: rgba(44, 44, 44, 0.499);
  outline: 1px solid rgb(255, 255, 255);
}

.logo {
  user-select: none;
  position: absolute;
  left: 55%;
  top: 50%;
  font-size: 300px;
  opacity: 0.2;
  font-weight: bold;
  transform: translate(10%, -50%);
}

.sideContainer.hidden {
  transition: all 0.5s ease-in-out;
  left: -290px;
}

.optionsContainer p {
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
  color: white;
  width: 100%;
}

.optionsContainer p:hover {
  background-color: rgba(67, 67, 67, 0.895);
  cursor: pointer;
}

img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  object-fit: contain;
}

.optionsContainer {
  background-color: rgb(44, 44, 44);

  gap: 15px;
  position: absolute;
  z-index: 100;
  width: 70%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hidden {
  display: none;
}

.headerSide {
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 15px;
  width: 100%;
  height: 60px;
  background-color: transparent;
  display: flex;
  justify-content: start;
  align-items: center;
}

.headerSide:hover {
  background-color: rgba(44, 44, 44, 0.715);
}

.iconsUser {
  background-image: url("../../assets/icons/accountCircleUserWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
}

.accountInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebarGroup {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 15px 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
}

.sidebarGroup p {
  display: flex;
  gap: 10px;
  align-items: center;
  height: 100%;
  color: white;
  width: 100%;
  font-size: 20px;
}

.sidebarGroup p:hover {
  background-color: rgba(67, 67, 67, 0.895);
  cursor: pointer;
}
</style>

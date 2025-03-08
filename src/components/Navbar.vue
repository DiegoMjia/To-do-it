<script setup lang="ts">
import '../LitComponent/Buttom-theme'
import { ref } from 'vue';

const body = ref<HTMLElement>(document.body);
const isLightTheme = ref<boolean>(false);

const themeChanger = (e: any) => {
  isLightTheme.value = !isLightTheme.value;
  console.log(e.detail.active);
  body.value?.classList.toggle('active')
}
</script>

<template>
  <div class="navbar">
    <div class="Container">
      <div class="logo" style="padding-left: 10px;">
        <div class="logoImg" style="font-size: 60px; font-weight: bold;">X</div>
        <h1 style="display: inline-block; font-size: 40px; font-weight: bold;">TO-DO-IT</h1>
      </div>
      <ul>
        <li><a href="#">CONTACTO</a></li>
        <li><a href="#">ACERCA DE NOSOTROS</a></li>
        <li><a href="#">DONACIONES</a></li>
        <theme-button :active="isLightTheme" @click="themeChanger"></theme-button>
        <span class="line">|</span>
        <button class="login">SIGN IN / SIGN UP</button>
      </ul>
    </div>
  </div>
</template>

<style>
.Container {
  border-bottom: 1px solid rgb(255, 255, 255);
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #15171c;
  transition: background-color 0.5s ease;
  position: relative;
  z-index: 100;
}

.line {
  color: #fff;
}

a:hover {
  color: #5d8bff;
}

.login {
  background-color: #414bb2;
  color: #fff;
  border-radius: 50px;
  padding: 10px;
  border: 1px solid #ffffff;
  width: max-content;
  cursor: pointer;
}

.login:hover {
  background-color: #3e4593;
}

.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}


ul {
  display: flex;
  height: 100%;
  margin: 20px;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 40px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body.active {
  background-color: #f0f0f0;
  color: #15171c;

  .login {
    border: 1px solid #15171c;
  }

  .Container {
    background-color: #f0f0f0;
    color: #15171c;

    border-bottom: 1px solid rgb(0, 0, 0);

  }

  a:hover {
    color: #5281f8;
  }
}
</style>
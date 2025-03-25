<script setup lang="ts">
import { useThemeStore } from "./Stores/Theme";

//Inicializamos el estado de la store.
const themeStore = useThemeStore();
document.body.classList.toggle("active", themeStore.isLightTheme);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

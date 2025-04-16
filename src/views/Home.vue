<script setup lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "../components/landingPage/Navbar.vue";
import Mainv1 from "../components/landingPage/Mainv1.vue";
import StartSesion from "../components/login/StartSesion.vue";

const dialog = ref<HTMLDialogElement>();

const openDialog = () => {
  if (dialog.value) {
    dialog.value.showModal();
  }
};

defineComponent({
  name: "Home",
});
</script>

<template>
  <div>
    <Navbar @openDialog="openDialog" />
    <Mainv1 />
    <dialog ref="dialog" class="modal" style="margin: 20px; overflow: hidden;">
      <StartSesion />
    </dialog>
  </div>
</template>

<style scoped>
dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

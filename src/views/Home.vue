<script setup lang="ts">
import { defineComponent, ref } from "vue";
import Mainv1 from "../components/landingPage/Mainv1.vue";
import Footer from "../components/landingPage/Footer.vue";
import Header from "../components/landingPage/Header.vue";

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
    <Header />
    <Navbar @openDialog="openDialog" />
    <Mainv1 />
    <dialog ref="dialog" class="modal" style="margin: 20px; overflow: hidden" closedby="any">
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
  z-index: 200;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
}

body.active {
  .modal {
    background-color: rgba(185, 185, 185, 0.818);
    color: black;
    border: 1px solid #ffffff00;
  }
}
</style>

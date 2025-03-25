<script setup lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/landingPage/Navbar.vue";
import Mainv1 from "../components/landingPage/Mainv1.vue";

defineComponent({
  name: "Home",
});
</script>

<template>
  <div>
    <Navbar />
    <Mainv1 />
  </div>
</template>

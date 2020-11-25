<template>
  <div>
    <provides />
  </div>
</template>

<script>
import { provide } from "vue";
import provides from "../CompsitionAPI/provide";
export default {
  name: "provide&&inject",
  components: {
    provides
  },
  setup() {
    const obj = {
      name: "grandFather",
      from: "provide&&inject"
    };
    provide("grandFather", obj);
  }
};
</script>

<style></style>

<template>
  <div>
    <setup :msg="msg" :Feeling="feel" @changeTitle="toggleMsg"></setup>
  </div>
</template>

<script>
import { ref } from "vue";
import setup from "@/CompsitionAPI/setup";
export default {
  components: {
    setup
  },
  setup() {
    let msg = ref("Welcome use Vue Compositon Api");
    let feel = ref("nice");
    function toggleMsg(val) {
      msg.value = val;
    }

    return { msg, feel, toggleMsg };
  }
};
</script>

<style></style>

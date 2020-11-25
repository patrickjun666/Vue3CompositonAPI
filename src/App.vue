<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./CompsitionAPI/lifecycle";
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let msg = ref("Welcome use Vue Compositon Api");
    let feel = ref("nice");
    function changeMsg(val) {
      msg.value = val;
    }

    return { msg, feel, changeMsg };
  }
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  margin: 0 !important;
  padding: 0;
}
</style>

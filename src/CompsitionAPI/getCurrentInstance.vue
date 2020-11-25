<template>
  <div></div>
</template>
  
<script>
import { ref, getCurrentInstance } from "vue";
export default {
  name: "getCurrentInstance",
  /**
   * @name getCurrentInstance
   * @function 获取当前组件的实例
   */
  setup() {
    const num = ref(3);
    const instance = getCurrentInstance();
    console.log(instance);

    return { num };
  }
};
</script>

<style></style>

<template>
  <div>
    <span>{{ `我最爱的球星是${name}` }}</span>
    <p></p>
    <span>{{ `他现在在${team}队` }}</span>
    <p></p>
    <span>{{ `他的荣誉是三双${honor}` }}</span>
    <p></p>
    <button @click="team = 'rocket'">change</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "toRefs",
  /**
   * @name: toRefs
   * @function: 将传入的响应式对象的每一个属性都转化为对应的响应式数据对象
   */
  setup() {
    const obj = reactive({
      name: "westbrook",
      team: "thunder",
      honor: "MVP"
    });

    return { ...toRefs(obj) };
  }
};
</script>

<style></style>

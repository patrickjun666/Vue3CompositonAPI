<template>
  <div>
    {{ state }}
    <p></p>
    <button @click="() => (state.city = 'shenzhen')">change</button>
  </div>
</template>

<script>
import { reactive, markRaw } from "vue";
export default {
  name: "markRaw",
  /**
   * @name: markRaw
   * @function: 将原始数据变成非响应式的，后续再对该数据进行响应式操作，仍然无法实现响应式
   */
  setup() {
    let obj = {
      country: "china",
      province: "hunan",
      city: "changsha"
    };
    let raw = markRaw(obj);

    let state = reactive(raw);

    return { obj, state };
  }
};
</script>

<style></style>

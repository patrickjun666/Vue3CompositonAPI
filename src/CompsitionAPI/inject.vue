<template>
  <div v-for="(item, index) in message" :key="index">
    {{ `来自${item.from}的数据————${item.name}` }}
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "inject",
  /**
   * @name: inject
   * @function: 接收父组件或祖先组件传递来的数据
   * @param: key: 接收参数的名称
   */
  setup() {
    const message = [];
    let reciveFromFather = inject("father");
    const reciveFromGrandfather = inject("grandFather");
    message[0] = reciveFromFather;
    message[1] = reciveFromGrandfather;
    return { message };
  }
};
</script>

<style></style>

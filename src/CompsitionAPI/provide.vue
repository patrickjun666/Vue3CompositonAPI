<template>
  <inject />
</template>

<script>
import { provide } from "vue";
import inject from "./inject";
import Inject from "./inject.vue";
export default {
  name: "provide&&inject",
  /**
   * @name: provide
   * @function: 向子组件以及子孙组件传递数据
   * @param: key:数据的名称, value:数据的值
   **/
  components: {
    inject
  },
  setup() {
    const obj = {
      name: "父亲",
      from: "provide"
    };
    provide("father", obj);
    return { obj };
  }
};
</script>

<style></style>

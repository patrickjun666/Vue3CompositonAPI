<template>
  <div>
    响应式数据:
    {{ obj }}
  </div>
</template>

<script>
import { reactive, toRaw } from "vue";
export default {
  name: "toRaw",
  /**
   * @name: toRaw
   * @function: 用于获取ref或reactive对象的原始数据，如果我们想修改数据，但不想让视图更新可以使用toRaw方法
   * @param: ref或reactive参数
   */
  setup() {
    const obj = reactive({
      name: "王五",
      age: 36
    });
    const raw = toRaw(obj);
    console.log(obj);
    console.log(raw);
    return { obj };
  }
};
</script>

<style></style>

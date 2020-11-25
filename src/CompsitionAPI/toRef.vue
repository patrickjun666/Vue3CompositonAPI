<template>
  <div>
    {{ `我在${state}我是一名${obj.work}` }}
    <p></p>
    <button @click="changeCity">change city</button>
    <button @click="() => (obj.work = 'Teacher')">change work</button>
  </div>
</template>

<script>
import { toRef, reactive } from "vue";
export default {
  name: "toRef",
  /**
   * @name: toRef
   * @function: 将对象的某个值转化为响应式数据
   * @param: obj对象，对象中的属性名(字符串类型)
   * @notice: 从表面上来看toRef这个API似乎用处不大，因为ref也可以实现，但是若使用ref，ref绑定的值若发生变化，会更改视图层，ref是对传入数据的拷贝
   * 但是toRef绑定的值，若其对象本身不是响应式数据，若更改其值，视图层不会发生变化，toRef是对传入数据的引用
   */
  setup() {
    const obj = reactive({ city: "长沙", work: "IT" });

    const state = toRef(obj, "city");

    const changeCity = () => {
      state.value = "深圳";
    };
    return { obj, state, changeCity };
  }
};
</script>

<style></style>

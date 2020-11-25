<template>
  <div>
    <p>{{ `第一层：${state.a}` }}</p>
    <p>{{ `第二层：${state.first.b}` }}</p>
    <p>{{ `第三层：${state.first.second.c}` }}</p>
    <p>{{ `第四层：${state.first.second.third.d}` }}</p>
    <p></p>
    <button @click="change(1)">改变第一层</button>
    <button @click="change(2)">改变第二层</button>
    <button @click="change(3)">改变第三层</button>
    <button @click="change(4)">改变第四层</button>
  </div>
</template>

<script>
import { shallowReactive } from "vue";
export default {
  name: "shallowReactive",
  /**
   * @name: shallowReactive
   * @function: 在响应式数据对象中，若数据是深层级的，那么使用shallowReactive只有第一个层级被响应式，不会将每一个层级都响应式化
   * @notice: 与reactive不同的是，reactive是将对象中的每一层都响应式化，每一层都包装Proxy后，对性能不太友好，那么shallowReactive
   * 就是解决每一层都被响应式化，从而消耗性能的缺点，使用shallowReactive只会将深层数据的第一层包装proxy，也就是说只有修改第一层的值时，才会响应式更新
   */
  setup() {
    const obj = {
      a: 1,
      first: {
        b: 2,
        second: {
          c: 3,
          third: {
            d: 4
          }
        }
      }
    };
    const state = shallowReactive(obj);
    const change = val => {
      switch (val) {
        case 1:
          state.a = "a";
          break;
        case 2:
          state.first.b = "b";
          break;
        case 3:
          state.first.second.c = "c";
          break;
        case 4:
          state.first.second.third.d = "d";
          break;
      }
    };
    return { state, change };
  }
};
</script>

<style></style>

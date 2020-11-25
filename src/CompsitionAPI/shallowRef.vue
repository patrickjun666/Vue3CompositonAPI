<template>
  <div>
    <p>{{ `第一层：${state.a}` }}</p>
    <p>{{ `第二层：${state.first.b}` }}</p>
    <p>{{ `第三层：${state.first.second.c}` }}</p>
    <p></p>
    <button @click="change(1)">.value重新赋值</button>
    <button @click="change(2)">vlaue逐层修改</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
  name: "shallowRef",
  /**
   * @name: shallowRef
   * @function: 与shallowReactive一样，监听对象第一层的数据变化，那么shallowRef则是监听.value的值的变化来更新驱动
   */
  setup() {
    const obj = {
      a: 1,
      first: {
        b: 2,
        second: {
          c: 3
        }
      }
    };
    const state = shallowRef(obj);
    const change = val => {
      console.log(state);
      switch (val) {
        case 1:
          state.value = {
            a: "a",
            first: {
              b: "b",
              second: {
                c: "c"
              }
            }
          };
          break;
        case 2:
          state.value.a = "A";
          state.value.first.b = "B";
          state.value.first.second.c = "C";
          /**
           * @name: triggerRef
           * @function: 立即更新视图
           * @param: 需要更新的数据名
           */
          triggerRef(state);
          break;
      }
    };
    return { state, change };
  }
};
</script>

<style></style>

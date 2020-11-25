<template>
  <div>
    <ul>
      <li>我是reactive创建出的响应式对象</li>
      <li>{{ `我的名字是：${todoList.name}` }}</li>
      <li>{{ `我的年龄是：${todoList.age}` }}</li>
    </ul>
    <button @click="() => (todoList.name = '李四')">change name</button>
    <button @click="() => (todoList.age = 25)">change age</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "reactive",
  /**
   * @name: reactive
   * @function: 用来创建一个响应式的数据对象
   * @notice: reactive一般用来创建一个复杂的响应式数据对象，例如一个对象
   */
  setup() {
    let todoList = reactive({
      name: "张三",
      age: 18
    });

    return { todoList };
  }
};
</script>

<style></style>

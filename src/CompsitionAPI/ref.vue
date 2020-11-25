<template>
  <div>
    <input type="text" v-model="addData" />
    <button @click="() => dataList.unshift(addData)">add</button>
    <p></p>
    {{ dataList }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ref",
  /**
   * @name: ref
   * @function: ref也是创建响应式数据的一种方式，ref其实就是reactive包装了一个对象。然后将值传给该对象的value属性，在业务层代码
   * 访问ref创建的响应式数据时，需要额外带上.value才能访问到，但在template中不需要带上.value
   * @notice: 要创建的响应式数据类型是基本数据类型时，使用ref，数据类型是引用类型时使用reactive
   */
  setup() {
    const dataList = ref([]);
    const addData = ref(null);

    return { addData, dataList };
  }
};
</script>

<style></style>

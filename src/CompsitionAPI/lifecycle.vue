<template>
  <div>
    <button @click="() => count++">+</button>
    <span>{{ count }}</span>
    <button @click="() => count--">-</button>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue";
export default {
  name: "lifecyle",
  setup() {
    let count = ref(0);
    onBeforeMount(() => {
      console.log("onBeforeMount");
      alert("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
      alert("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
      alert("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
      alert("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
      alert("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
      alert("onUnmounted");
    });
    return { count };
  }
};
</script>

<style></style>

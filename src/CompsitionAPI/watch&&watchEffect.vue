<template>
  <div>
    {{ state }}
    <p></p>
    <button @click="state++">+</button>
    <p>------------------</p>
    {{ `count:${messages.count} -- name:${messages.name}` }}
    <button @click="messages.count++, (messages.name = 'lisi')">change</button>
    <p>------------------</p>
    {{ `id:${news.id} -- title:${news.title}` }}
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  name: "watch&&watchEffect",
  /**
   * @name watch
   * @function 监听指定数据的数据变化
   * @param immediate:是否初始化就执行, deep: 是否深度监听
   * @notice watch方法会返回一个stop方法，若想要停止监听，便可直接执行该stop函数
   */
  setup() {
    /**
     * 监听一个值
     **/
    const state = ref(0);
    watch(state, (newValue, oldValue) => {
      console.log(`原始值为${oldValue}`);
      console.log(`新值为${newValue}`);
    });

    /**
     * 监听多个值
     **/
    const messages = reactive({
      count: 0,
      name: "zhangsan "
    });
    // watch(
    //   [() => messages.count, () => messages.name],
    //   ([newCount, newName], [oldCount, oldName]) => {
    //     console.log(oldCount);
    //     console.log(oldName);
    //     console.log(newCount);
    //     console.log(newName);
    //   }
    // );

    /**
     * @name watchEffect
     * @function 监听数据发生变化
     * @notice 与watch不同的是，watchEffect不需要手动传入依赖，每次初始化时会执行一次回调函数来自动获取依赖，无法获取到原值，只能得到变化后的值
     */
    const news = reactive({ id: 0, title: "冷啊" });
    watchEffect(() => {
      console.log(news.id);
      console.log(news.title);
      console.log("messages", messages.count);
    });
    setTimeout(() => {
      news.id++;
      news.title = "快冷死了";
    }, 1000);
    return { state, messages, news };
  }
};
</script>

<style></style>

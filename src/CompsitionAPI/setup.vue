<template>
  <div>
    {{ msg }}
    <p></p>
    {{ `Compostion API 真 ${feel}` }}
    <p></p>
    <slot name="slots">
      123
    </slot>
  </div>
  <button @click="changeTitle">change</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "setup",
  /**
   * @name: setup
   * @function: setup函数是Vue3.0 Composition API的入口函数
   * @notice: 在setup函数中,this的指向不再是Vue实例而是undefined，setup的执行周期在beforeCreate之前
   * @params: [
   *  props, {attrs, emit, slots}
   *    {
   *      @name: props
   *      @function: 储存定义当前组件允许外界传递来的参数名称以及对应的值，是响应式的
   *      @notice: props是响应式的，不能使用ES6解构赋值，因为它会消除prop的响应性，props必须要先声明才能取值，props不包含事件
   *     },
   *    {
   *      @name: attrs
   *      @function: 和props一样，是获取父组件给子组件的传值，但attrs只能接收String类型，但不需要像props去声明，attrs包含事件并且attrs是非响应式的
   *      @notice: props中声明过的属性,attrs里不会出现
   *     },
   *    {
   *      @name: slots,
   *      @function: 返回父组件调用子组件时插槽的数组，每一项为声明并使用的插槽的属性和值
   *      @notice: slots是非响应式数据
   *    }
   * ]
   */
  props: {
    msg: String
  },
  setup(props, context) {
    const { attrs, emit, slots } = context;
    console.log(props); // Welcome use Vue Compositon Api
    console.log(attrs); // nice  onChangeTitle
    console.log(slots); //() => Array 返回一个数组，包含父组件中使用插槽的属性和值
    let feel = attrs.Feeling;

    const changeTitle = () => {
      emit("changeTitle", "it is enjoy to use Vue Compositon Api"); //子组件向父组件传递信息
    };
    return { changeTitle, feel };
  }
};
</script>

<style scoped></style>

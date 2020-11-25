<template>
  <div>
    <div class="document-wrap">
      <ul class="left-nav">
        <span class="nav-logo">Vue3.0 Composition API</span>
        <li
          class="nav-item"
          v-for="item in routeList"
          :key="item.path"
          @click="() => router.push(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="right-content">
        <div class="basic-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();
    const routeList = router.options.routes[0].children;
    return { router, routeList };
  }
};
</script>

<style scoped>
.document-wrap {
  position: relative;
  background-color: wheat;
  width: 100vw;
  height: 100vh;
}
.left-nav {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  margin: 0;
  padding: 0;
  list-style: none;
  border-right: 2px solid orange;
}
.nav-logo {
  display: block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #817f7f;
}

.right-content {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: calc(100vw - 300px);
}
.nav-item {
  width: 100%;
  height: 24px;
  margin: 0;
  text-align: center;
  padding: 10px 0;
  color: #817f7f;
  cursor: pointer;
}
.basic-content {
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 20px 20px;
}
</style>

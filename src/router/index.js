import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/components/index"),
    children: [
      {
        path: "/setupNode",
        name: "setupNode",
        component: () => import("@/components/setupNode"),
        children: [
          {
            path: "/setup",
            name: "setup",
            component: () => import("@/CompsitionAPI/setup")
          }
        ]
      },
      {
        path: "/lifecycle",
        name: "lifecycle",
        component: () => import("@/CompsitionAPI/lifecycle")
      },
      {
        path: "/reactive",
        name: "reactive",
        component: () => import("@/CompsitionAPI/reactive")
      },
      {
        path: "/ref",
        name: "ref",
        component: () => import("@/CompsitionAPI/ref")
      },
      {
        path: "/toRef",
        name: "toRef",
        component: () => import("@/CompsitionAPI/toRef")
      },
      {
        path: "/toRefs",
        name: "toRefs",
        component: () => import("@/CompsitionAPI/toRefs")
      },
      {
        path: "/shallowReactive",
        name: "shallowReactive",
        component: () => import("@/CompsitionAPI/shallowRective")
      },
      {
        path: "/shallowRef",
        name: "shallowRef",
        component: () => import("@/CompsitionAPI/shallowRef")
      },
      {
        path: "/toRaw",
        name: "toRaw",
        component: () => import("@/CompsitionAPI/toRaw")
      },
      {
        path: "/markRaw",
        name: "markRaw",
        component: () => import("@/CompsitionAPI/markRaw")
      },
      {
        path: "/provide&&inject",
        name: "provide&&inject",
        component: () => import("@/components/provide&&inject")
      },
      {
        path: "/watch&&watchEffect",
        name: "watch&&watchEffect",
        component: () => import("@/CompsitionAPI/watch&&watchEffect")
      },
      {
        path: "/getCurrentInstance",
        name: "getCurrentInstance",
        component: () => import("@/CompsitionAPI/getCurrentInstance")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

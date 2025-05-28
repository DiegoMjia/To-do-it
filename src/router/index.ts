import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import TrashComponent from "../components/task/TrashComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: () => import("../components/login/CreateAccount.vue"),
  },
  {
    path: "/showTasks",
    name: "tasks",
    component: () => import("../views/task/MainTask.vue"),
  },
  {
    path: "/trashTask",
    name: "trash",
    component: TrashComponent
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

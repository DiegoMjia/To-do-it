import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/calendario",
    name: "Calendario",
    component: () => import("../views/CalendarView.vue"),
  },

  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: () => import("../components/login/CreateAccount.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/task/MainTask.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

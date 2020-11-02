import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import App from "../App.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/topics",
    name: "Topics",
    component: () => import("../views/Topics.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../components/Dashboard.vue"),
    children: [
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "data",
        name: "Data",
        component: () => import("../views/Data.vue"),
      },
      {
        path: "import",
        name: "Import",
        component: () => import("../components/Import.vue"),
      },
      {
        path: "category",
        name: "Category",
        component: () => import("../components/Category.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

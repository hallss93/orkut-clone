import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/profile",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home/HomeView.vue"),
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/Home/ProfileView.vue"
          ),
      },
      {
        path: "/community",
        name: "community",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "../views/Home/CommunityView.vue"
          ),
      },
      {
        path: "/gallery",
        name: "gallery",
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "../views/Home/GalleryView.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/profile",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../views/templates/Home/HomeView.vue"
      ),
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/pages/ProfileView.vue"
          ),
      },
      {
        path: "/community",
        name: "community",
        component: () =>
          import(
            /* webpackChunkName: "community" */ "../views/pages/CommunityView.vue"
          ),
      },
      {
        path: "/gallery",
        name: "gallery",
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "../views/pages/GalleryView.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../views/templates/Login/LoginView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

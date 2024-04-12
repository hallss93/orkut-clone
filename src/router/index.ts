import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/profile",
    name: "home",
    meta: {
      breadcrumb: "Início",
    },
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../views/templates/Home/HomeView.vue"
      ),
    children: [
      {
        path: "/profile",
        name: "profile",
        meta: {
          breadcrumb: "Perfil",
        },
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/pages/ProfileView.vue"
          ),
      },
      {
        path: "/community",
        name: "community",
        meta: {
          breadcrumb: "Comunidades",
        },
        component: () =>
          import(
            /* webpackChunkName: "community" */ "../views/pages/CommunityView.vue"
          ),
      },
      {
        path: "/gallery",
        name: "gallery",
        meta: {
          breadcrumb: "Galeria",
        },
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "../views/pages/GalleryView.vue"
          ),
      },
      {
        path: "/gallery/:id",
        name: "album",
        meta: {
          breadcrumb: "Álbum",
        },
        component: () =>
          import(
            /* webpackChunkName: "gallery" */ "../views/pages/AlbumView.vue"
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

<template>
  <nav
    class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 p-4"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <router-link
        href="#"
        :to="{ path: '/' }"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="@/assets/logo.svg" alt="Orkut" class="h-8" />
      </router-link>
      <navbar-profile-menu-component />
      <div
        class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 lg:p-0 mt-4 font-medium lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0"
        >
          <li v-for="(m, index) in menu" :key="index" class="flex items-center">
            <a
              @click="open_item(m)"
              :class="{
                'text-pink-500': m.active,
                'text-gray-900 cursor-pointer': !m.active,
              }"
              class="block py-2 px-3 rounded lg:p-0"
              aria-current="page"
              >{{ m.name }}</a
            >
          </li>
          <li class="hidden xl:block">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium sr-only"
                >Pesquisar no Orkut</label
              >
              <div class="relative">
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 pe-10 text-sm bg-blue-50 rounded-lg"
                  placeholder="Pesquisar no Orkut"
                  required
                />
                <div
                  class="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import NavbarProfileMenuComponent from "@/views/components/molecules/navbar/navbar-profile-menu.component.vue";
import router from "@/router";

const menu = computed(() => [
  {
    key: "inicio",
    name: "Início",
    active: router.currentRoute.value.name === "home",
    link: "/home",
  },
  {
    key: "perfil",
    name: "Perfil",
    active: router.currentRoute.value.name === "profile",
    link: "/profile",
  },
  {
    key: "recados",
    name: "Recados",
    active: router.currentRoute.value.name === "scraps",
    link: "/scraps",
  },
  {
    key: "amigos",
    name: "Amigos",
    active: router.currentRoute.value.name === "friends",
    link: "/friends",
  },
  {
    key: "comunidades",
    name: "Comunidades",
    active: router.currentRoute.value.name === "communities",
    link: "/communities",
  },
  {
    key: "aplicativos",
    name: "Aplicativos",
    active: router.currentRoute.value.name === "apps",
    link: "/apps",
  },
]);

function open_item(item: any): void {
  if (!item.active) {
    router.push(item.link);
  }
}
</script>

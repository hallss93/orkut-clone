<template>
  <nav
    class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 p-4"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <a
        href="https://orkut.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="@/assets/logo.png" alt="Orkut" class="h-8" />
      </a>
      <navbar-profile-menu-component />
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li v-for="(m, index) in menu" :key="index" class="flex items-center">
            <a
              href="#"
              @click="open_item(m.key)"
              :class="{
                'text-pink-500': m.active,
                'text-gray-900': !m.active,
              }"
              class="block py-2 px-3 rounded md:p-0"
              aria-current="page"
              >{{ m.name }}</a
            >
          </li>
          <li>
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
import { reactive } from "vue";
import NavbarProfileMenuComponent from "@/components/navbar/navbar-profile-menu.component.vue";

const menu = reactive([
  { key: "inicio", name: "Início", active: true },
  { key: "perfil", name: "Perfil", active: false },
  { key: "recados", name: "Recados", active: false },
  { key: "amigos", name: "Amigos", active: false },
  { key: "comunidades", name: "Comunidades", active: false },
  { key: "aplicativos", name: "Aplicativos", active: false },
]);

function open_item(key: string): void {
  alert(key);
}
</script>

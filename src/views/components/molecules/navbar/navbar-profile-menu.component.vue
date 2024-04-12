<template>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div class="relative inline-block text-left">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full outline-none justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 flex items-center"
          >
            <avatar-image-component rounded hight="h-10" width="w-10" />
            hallison melo
            <ChevronDownIcon
              class="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1 block lg:hidden">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                >
                  <FontAwesomeIcon
                    :icon="faUser"
                    class="me-4 text-gray-500 w-7"
                  />Perfil</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faUserPen"
                    class="me-4 text-gray-500 w-7"
                  />Editar Perfil</a
                >
              </MenuItem>
            </div>
            <div class="py-1 block lg:hidden">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faUserGroup"
                    class="me-4 text-gray-500 w-7"
                  />Amigos</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faPeopleRoof"
                    class="me-4 text-gray-500 w-7"
                  />Comunidades</a
                >
              </MenuItem>
            </div>
            <div class="py-1 block lg:hidden">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faEnvelope"
                    class="me-4 text-gray-500 w-7"
                  />Recados</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faMessage"
                    class="me-4 text-gray-500 w-7"
                  />Depoimentos</a
                >
              </MenuItem>
            </div>
            <div class="py-1 block lg:hidden">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faImages"
                    class="me-4 text-gray-500 w-7"
                  />Galeria</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faGamepad"
                    class="me-4 text-gray-500 w-7"
                  />Aplicativos</a
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }" class="hidden lg:block">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faUserPen"
                    class="me-4 text-gray-500 w-7"
                  />Editar Perfil</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faGear"
                    class="me-4 text-gray-500 w-7"
                  />Configurações</a
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  ><FontAwesomeIcon
                    :icon="faArrowRightFromBracket"
                    class="me-4 text-gray-500 w-7"
                  />Sair</a
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faEnvelope,
  faGamepad,
  faUserPen,
  faMessage,
  faImages,
  faGear,
  faArrowRightFromBracket,
  faUserGroup,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";

import AvatarImageComponent from "@/views/components/atoms/avatar-image.component.vue";
</script>

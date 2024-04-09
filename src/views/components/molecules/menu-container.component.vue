<template>
  <div class="text-center">
    <avatar-image-component rounded hight="h-40" width="w-40" />
  </div>
  <ul class="text-sm font-medium text-gray-500 bg-white text-center">
    <li class="w-full px-4 py-5 border-b border-gray-200 rounded-t-lg">
      <h6 class="text-lg font-bold text-gray-600">Hallison Melo</h6>
      <h6 class="text-md font-normal text-gray-500">masculino, solteiro</h6>
      <h6 class="text-md font-normal text-gray-500">Brasil</h6>
    </li>
    <li
      v-for="(menu, index) in menu_items"
      :key="index"
      class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer"
      :class="{ 'border-b border-gray-200': menu.spaced }"
      @click="router.push(menu.link ?? '/')"
    >
      <FontAwesomeIcon :icon="menu.icon" class="me-4" />
      {{ menu.text }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserPlus,
  faBan,
  faUser,
  faEnvelope,
  faImages,
  faMessage,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import router from "@/router";
import AvatarImageComponent from "@/views/components/atoms/avatar-image.component.vue";

const menu_items = ref([
  { icon: faUserPlus, text: "Adicionar" },
  { icon: faBan, text: "Denunciar", spaced: true },
  { icon: faUser, text: "Perfil" },
  { icon: faEnvelope, text: "Recados (3)" },
  { icon: faImages, text: "Galeria (40)", link: "/gallery" },
  { icon: faMessage, text: "Depoimentos (10)" },
  { icon: faGamepad, text: "Aplicativos (2)" },
]);
</script>

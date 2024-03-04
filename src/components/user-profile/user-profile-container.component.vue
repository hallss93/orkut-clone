<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-large shadow"
  >
    <img
      class="inline-block h-40 w-40 rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div class="mt-4"></div>
    <ul class="text-sm font-medium text-gray-500 bg-white">
      <li class="w-full px-4 py-5 border-b border-gray-200 rounded-t-lg">
        <h6 class="text-lg font-bold text-gray-600">Hallison Melo</h6>
        <h6 class="text-md font-normal text-gray-500">masculino, solteiro</h6>
        <h6 class="text-md font-normal text-gray-500">Brasil</h6>
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faUserPlus" class="me-4" />
        Adicionar
      </li>
      <li
        class="w-full px-4 ps-12 py-4 border-b border-gray-200 flex items-center cursor-pointer"
      >
        <FontAwesomeIcon :icon="faBan" class="me-4" />
        Denunciar
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faUser" class="me-4" />
        Perfil
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faEnvelope" class="me-4" />
        Recados (3)
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faImages" class="me-4" />
        Galeria (40)
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faMessage" class="me-4" />
        Depoimentos (39)
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faGamepad" class="me-4" />
        Aplicativos (2)
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
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
</script>

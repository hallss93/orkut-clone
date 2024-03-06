<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-large shadow text-center"
  >
    <img
      class="inline-block h-40 max-w-full rounded-lg ring-2 ring-white object-contain"
      src="https://colunaitalo.com.br/upload/noticias/990/GATO_4_view.jpg"
      alt=""
    />
    <ul class="text-sm font-medium text-gray-500 bg-white">
      <li class="w-full px-4 py-5 border-b border-gray-200 rounded-t-lg">
        <h6 class="text-lg font-bold text-gray-600">Eu Odeio Acordar Cedo</h6>
        <h6 class="text-md font-normal text-gray-500">(20150 membros)</h6>
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faUserPlus" class="me-4" />
        Participar
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faNewspaper" class="me-4" />
        Fórum
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faSquarePollHorizontal" class="me-4" />
        Enquetes
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faCalendarDays" class="me-4" />
        Eventos
      </li>
      <li class="w-full px-4 ps-12 py-4 flex items-center cursor-pointer">
        <FontAwesomeIcon :icon="faPeopleGroup" class="me-4" />
        Membros
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserPlus,
  faPeopleGroup,
  faCalendarDays,
  faNewspaper,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";
</script>

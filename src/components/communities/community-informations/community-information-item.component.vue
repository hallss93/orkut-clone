<template>
  <div class="max-w-screen-xl">
    <ul class="text-sm font-medium text-gray-500 bg-white striped">
      <li
        class="w-full px-2 py-5"
        v-for="(item, index) in options"
        :key="index"
      >
        <div class="grid grid-cols-12 gap-x-4 gap-y-4">
          <div class="col-span-4 sm:col-span-3 text-left">
            <span class="text-normal text-gray-500">{{ item.label }}</span>
          </div>
          <div class="col-span-8 sm:col-span-9 text-left">
            <span v-if="item.link" class="text-gray-700">
              <a href="#" class="font-normal text-blue-500 underline">{{
                item.value
              }}</a>
            </span>
            <span v-else class="text-normal text-gray-700">
              {{ item.value }}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="grid grid-cols-12 gap-x-4 gap-y-4"></div>
  </div>
</template>
<script lang="ts" setup>
import { format } from "date-fns";
import { pt } from "date-fns/locale";

const options = [
  {
    label: "descrição:",
    value: "Para todos aqueles que acham que o dia só começa após o meio-dia.",
  },
  { label: "idioma:", value: "Português" },
  { label: "categoria:", value: "Outros" },
  { label: "dono:", value: "Hallison Melo", link: true },
  { label: "moderadores:", value: "nenhum" },
  { label: "tipo:", value: "pública" },
  {
    label: "privacidade do conteúdo:",
    value: "aberta para não-membros",
  },
  { label: "local:", value: "Brasil" },
  {
    label: "criado em:",
    value: format(new Date("2001-01-05 "), "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    }),
  },
  { label: "membros:", value: "20150" },
];
</script>

<style scoped lang="scss">
li:nth-child(even) {
  background-color: rgb(239 246 255 / var(--tw-bg-opacity));
}
</style>

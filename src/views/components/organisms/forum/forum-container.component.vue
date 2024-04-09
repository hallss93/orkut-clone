<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <div class="flex">
      <div class="grow h-14">
        <h6 class="text-sm font-bold text-gray-500 text-left">Fórum</h6>
      </div>
    </div>
    <div class="flex flex-wrap w-full">
      <div
        class="flex w-full flex-col pb-3"
        v-for="(item, index) in forums"
        :key="index"
      >
        <dl class="mb-1 md:text-lg">
          {{ item.title }}
        </dl>
        <div class="flex justify-between">
          <dd class="text-sm text-gray-400">
            {{ item.answers }} resposta{{ item.answers != 1 ? "s" : "" }}
          </dd>
          <dd class="text-sm text-gray-500 font-semibold truncate w-7/12">
            {{ item.text }}
          </dd>
          <dd class="text-sm text-gray-400">
            {{
              format(item.created, "dd 'de' MMMM 'de' yyyy", {
                locale: pt,
              })
            }}
          </dd>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { format } from "date-fns";
import { pt } from "date-fns/locale";
const forums = [
  {
    title: "Eu tenho ódio de segunda-feira",
    text: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto",
    created: new Date("2001-01-05 "),
    answers: 2,
  },
  {
    title: "Eu tenho ódio de segunda-feira",
    text: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto",
    created: new Date("2011-08-15 "),
    answers: 1,
  },
  {
    title: "Eu tenho ódio de segunda-feira",
    text: "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto",
    created: new Date("2011-08-15 "),
    answers: 0,
  },
];
</script>

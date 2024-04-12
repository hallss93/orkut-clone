<template>
  <div class="max-w-screen-xl mt-4">
    <div class="grid grid-cols-12 gap-x-4 sm:gap-y-4 gap-y-0">
      <div
        class="col-span-12 sm:col-span-3 sm:py-0 py-2 sm:px-0 px-4 sm:text-left text-start sm:bg-white bg-blue-50 rounded-lg"
      >
        <span class="text-gray-500">relacionamento</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left sm:py-0 py-2 sm:px-0 px-4">
        <span class="text-gray-700"> solteiro </span>
      </div>

      <div
        class="col-span-12 sm:col-span-3 sm:py-0 py-2 sm:px-0 px-4 sm:text-left text-start sm:bg-white bg-blue-50 rounded-lg"
      >
        <span class="text-gray-500">quem sou eu</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left sm:py-0 py-2 sm:px-0 px-4">
        <span class="text-gray-700">
          Lorem ipsum lobortis aliquam a gravida lectus malesuada, purus curae
          vitae magna nullam et eget nullam, nec potenti congue aliquet fusce
          pretium. nibh vehicula justo posuere nam non nibh et vivamus, cubilia
          fames praesent hac mattis tellus mauris, faucibus aliquam at diam quam
          dapibus pulvinar.
        </span>
      </div>

      <div
        class="col-span-12 sm:col-span-3 sm:py-0 py-2 sm:px-0 px-4 sm:text-left text-start sm:bg-white bg-blue-50 rounded-lg"
      >
        <span class="text-gray-500">país</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left sm:py-0 py-2 sm:px-0 px-4">
        <span class="text-gray-700"> Brasil </span>
      </div>

      <div
        class="col-span-12 sm:col-span-3 sm:py-0 py-2 sm:px-0 px-4 sm:text-left text-start sm:bg-white bg-blue-50 rounded-lg"
      >
        <span class="text-gray-500">música</span>
      </div>
      <div
        class="col-span-8 sm:col-span-9 text-left sm:py-0 py-2 sm:px-0 px-4 flex flex-wrap"
      >
        <tag-item-component
          v-for="(item, index) in musics"
          :key="index"
          :title="item"
        >
          {{ item }}
        </tag-item-component>
      </div>

      <div
        class="col-span-12 sm:col-span-3 sm:py-0 py-2 sm:px-0 px-4 sm:text-left text-start sm:bg-white bg-blue-50 rounded-lg"
      >
        <span class="text-gray-500">filmes</span>
      </div>
      <div
        class="col-span-8 sm:col-span-9 text-left sm:py-0 py-2 sm:px-0 px-4 flex flex-wrap"
      >
        <tag-item-component
          v-for="(item, index) in films"
          :key="index"
          :title="item"
        >
          {{ item }}
        </tag-item-component>
      </div>

      <div
        class="col-span-12 sm:col-span-3 sm:py-0 py-2 sm:px-0 px-4 sm:text-left text-start sm:bg-white bg-blue-50 rounded-lg"
      >
        <span class="text-gray-500">livros</span>
      </div>
      <div
        class="col-span-8 sm:col-span-9 text-left sm:py-0 py-2 sm:px-0 px-4 flex flex-wrap"
      >
        <tag-item-component
          v-for="(item, index) in books"
          :key="index"
          :title="item"
        >
          {{ item }}
        </tag-item-component>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import tagItemComponent from "@/views/components/atoms/tag-item.component.vue";

const musics = [
  "Mr. Kitty",
  "Molchat Doma",
  "Blink-182",
  "Mäneskin",
  "Alissic",
  "Grimes",
  "Motorama",
  "IC3PEAK",
];
const films = ["Noiva Cadáver", "Pulp Fiction", "Sweeney Todd"];
const books = ["Fausto - Goethe", "Divina Comédia - Dante"];
</script>

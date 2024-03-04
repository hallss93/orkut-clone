<template>
  <div class="max-w-screen-xl mt-4">
    <div class="grid grid-cols-12 gap-x-4 gap-y-4">
      <div class="col-span-4 sm:col-span-3 text-left">
        <span class="text-gray-500">relacionamento</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left">
        <span class="text-gray-700"> solteiro </span>
      </div>

      <div class="col-span-4 sm:col-span-3 text-left">
        <span class="text-gray-500">quem sou eu</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left">
        <span class="text-gray-700">
          Lorem ipsum lobortis aliquam a gravida lectus malesuada, purus curae
          vitae magna nullam et eget nullam, nec potenti congue aliquet fusce
          pretium. nibh vehicula justo posuere nam non nibh et vivamus, cubilia
          fames praesent hac mattis tellus mauris, faucibus aliquam at diam quam
          dapibus pulvinar.
        </span>
      </div>

      <div class="col-span-4 sm:col-span-3 text-left">
        <span class="text-gray-500">país</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left">
        <span class="text-gray-700"> Brasil </span>
      </div>

      <div class="col-span-4 sm:col-span-3 text-left">
        <span class="text-gray-500">música</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left flex flex-wrap">
        <div
          class="py-1 px-4 bg-white border border-pink-400 rounded-large text-gray-700 me-3 mb-3"
          v-for="(item, index) in musics"
          :key="index"
        >
          {{ item }}
        </div>
      </div>

      <div class="col-span-4 sm:col-span-3 text-left">
        <span class="text-gray-500">filmes</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left flex flex-wrap">
        <span
          class="py-1 px-4 bg-white border border-pink-400 rounded-large text-gray-700 me-3 mb-3"
          v-for="(item, index) in films"
          :key="index"
        >
          {{ item }}
        </span>
      </div>

      <div class="col-span-4 sm:col-span-3 text-left">
        <span class="text-gray-500">livros</span>
      </div>
      <div class="col-span-8 sm:col-span-9 text-left flex flex-wrap">
        <span
          class="py-1 px-4 bg-white border border-pink-400 rounded-large text-gray-700 me-3 mb-3"
          v-for="(item, index) in books"
          :key="index"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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

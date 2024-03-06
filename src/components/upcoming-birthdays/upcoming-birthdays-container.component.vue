<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <div class="flex">
      <div class="grow h-14">
        <h6 class="text-sm font-bold text-gray-500 text-left">
          Próximos aniversários
        </h6>
      </div>
    </div>
    <div class="grid grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-4">
      <upcoming-birthdays-item-component
        v-for="(item, index) in array"
        :key="index"
        :option="item"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import upcomingBirthdaysItemComponent from "./upcoming-birthdays-item.component.vue";
import { IOption } from "../upcoming-birthdays/upcoming-birthdays-item.component.vue";

const array: IOption[] = new Array(12).fill({
  title: "Olivia Joestar",
  description: new Date(),
});
</script>

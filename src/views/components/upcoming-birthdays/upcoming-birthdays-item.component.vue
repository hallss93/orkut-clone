<template>
  <div class="cursor-pointer" @click="open_friend()">
    <img
      class="inline-block h-auto max-w-full rounded-lg ring-2 ring-white"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <h6 class="text-sm font-normal text-gray-500 text-center">
      {{ option.title }}
    </h6>
    <h5
      v-if="option.description"
      class="text-sm font-bold text-gray-500 text-center"
    >
      {{ format(option.description, "MMMM dd") }}
    </h5>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { format } from "date-fns";

export interface IOption {
  title: string;
  description?: string;
}

defineProps({
  option: { type: Object as () => IOption, required: true },
});

function open_friend(): void {
  console.log("action to open");
}
</script>

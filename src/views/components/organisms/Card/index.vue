<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <div class="flex">
      <div class="grow h-14">
        <h6 class="text-sm font-bold text-gray-500 text-left">
          {{ title }}
        </h6>
      </div>
      <div class="grow 0"></div>
      <div class="grow h-14">
        <h6
          class="text-sm font-bold text-pink-500 text-right cursor-pointer"
          @click="handle_open_link"
        >
          {{ link }}
        </h6>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-x-8 gap-y-4">
      <community-item-component v-for="i in 9" :key="i" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";
import CommunityItemComponent from "./community-item.component.vue";

defineProps({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

const emit = defineEmits<{
  (e: "handle_click"): void;
}>();

function handle_open_link(): void {
  emit("handle_click");
}
</script>

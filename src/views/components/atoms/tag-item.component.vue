<template>
  <div
    class="py-1 px-4 bg-white border border-pink-400 rounded-large text-gray-700 me-3 mb-3"
  >
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  title: { type: String, required: true },
});
</script>

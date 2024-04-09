<template>
  <img
    class="inline-block ring-2 ring-white"
    :class="[{ 'rounded-full': rounded, 'rounded-lg': !rounded }, hight, width]"
    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    alt=""
  />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  rounded: { type: Boolean, required: false },
  hight: { type: String, required: false, default: "h-auto" },
  width: { type: String, required: false, default: "max-w-full" },
});
</script>

<template>
  <div class="cursor-pointer" @click="open_friend()">
    <img
      class="inline-block h-auto max-w-full ring-2 ring-white"
      :class="{
        'rounded-full': avatar,
        'rounded-lg': !avatar,
      }"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <h6 class="text-sm font-normal text-gray-500">Olivia Joestar</h6>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  avatar: { type: Boolean, required: false, default: true },
});

function open_friend(): void {
  console.log("action to open");
}
</script>

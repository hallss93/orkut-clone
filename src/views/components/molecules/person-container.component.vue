<template>
  <div class="cursor-pointer" @click="open_item()">
    <avatar-image-component rounded />
    <h6 class="text-sm font-normal text-gray-500 text-center">
      Olivia Joestar
    </h6>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import AvatarImageComponent from "@/views/components/atoms/avatar-image.component.vue";

defineProps({
  avatar: { type: Boolean, required: false, default: true },
});

function open_item(): void {
  console.log("action to open");
}
</script>

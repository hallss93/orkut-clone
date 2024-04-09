<template>
  <div class="cursor-pointer" @click="open_person()">
    <avatar-image-component />
    <h6 class="text-sm font-normal text-gray-500">Olivia Joestar</h6>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import AvatarImageComponent from "../atoms/avatar-image.component.vue";

function open_person(): void {
  router.push("/community");
}
</script>

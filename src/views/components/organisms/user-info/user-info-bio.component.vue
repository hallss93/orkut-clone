<template>
  <div class="text-center">
    <avatar-image-component
      rounded
      hight="h-40"
      width="w-40"
      class="block lg:hidden"
    />
    <p class="text-xl font-bold text-center lg:text-start mt-4">
      Hallison Melo
    </p>
    <div class="py-2 px-4 text-start bg-blue-50 rounded-lg mt-4">
      Minha mensagem de bio
    </div>
  </div>
</template>

<script lang="ts" setup>
import AvatarImageComponent from "@/views/components/atoms/avatar-image.component.vue";
</script>

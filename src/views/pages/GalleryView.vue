<template>
  <home-layout unique>
    <template #first>
      <card-container-component>
        <template #body>
          <menu-container-component />
        </template>
      </card-container-component>
    </template>
    <template #unique>
      <gallery-container-component />
    </template>
  </home-layout>
</template>

<script setup lang="ts">
import HomeLayout from "@/views/layouts/HomeLayout.vue";
import MenuContainerComponent from "@/views/components/molecules/menu-container.component.vue";
import GalleryContainerComponent from "@/views/components/organisms/gallery/gallery-container.component.vue";
import CardContainerComponent from "@/views/components/organisms/card/card-container.component.vue";
</script>

<template>
  <div class="grid justify-items-center mb-8">
    <navbar-component />
    <div class="max-w-sm sm:max-w-prose lg:max-w-screen-xl mt-10">
      <div class="mt-20">
        <div class="grid grid-cols-12 gap-x-4 gap-y-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/views/components/navbar/navbar-container.component.vue";
</script>

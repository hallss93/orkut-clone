<template>
  <div class="grid justify-items-center mb-8">
    <navbar-component />
    <div class="w-11/12 lg:w-11/12 mt-10 xl:w-10/12 2xl:w-8/12">
      <div class="mt-20">
        <div class="grid grid-cols-12 gap-x-4 gap-y-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/views/components/organisms/navbar/navbar-container.component.vue";
</script>

<template>
  <div class="grid justify-items-center mb-8">
    <navbar-component />
    <div class="max-w-screen-xl mt-10">
      <div class="mt-20">
        <div class="grid grid-cols-12 gap-x-4 gap-y-4">
          <first-column-component />
          <second-column-component />
          <third-column-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/components/navbar/navbar-container.component.vue";
import FirstColumnComponent from "@/components/home/first-column.component.vue";
import SecondColumnComponent from "@/components/home/second-column.component.vue";
import ThirdColumnComponent from "@/components/home/third-column.component.vue";
</script>

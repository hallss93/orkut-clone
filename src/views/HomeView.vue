<template>
  <div class="grid justify-items-center mb-8">
    <navbar-component />
    <div class="max-w-xs sm:max-w-prose lg:max-w-screen-xl mt-10">
      <div class="mt-20">
        <div class="grid grid-cols-12 gap-x-4 gap-y-4">
          <first-column-component />
          <div
            class="col-span-12 lg:col-span-9 grid-cols-9 gap-x-4 gap-y-4 flex flex-wrap lg:grid"
          >
            <second-column-component />
            <third-column-component />
          </div>
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

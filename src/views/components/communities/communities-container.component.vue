<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <div class="flex">
      <div class="grow h-14">
        <h6 class="text-sm font-bold text-gray-500 text-left">
          Comunidades (56)
        </h6>
      </div>
      <div class="grow 0"></div>
      <div class="grow h-14">
        <h6
          class="text-sm font-bold text-pink-500 text-right cursor-pointer"
          @click="open_communities"
        >
          Ver todas
        </h6>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-x-8 gap-y-4">
      <community-item-component v-for="i in 9" :key="i" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommunityItemComponent from "./community-item.component.vue";
function open_communities(): void {
  console.log("action to open");
}
</script>

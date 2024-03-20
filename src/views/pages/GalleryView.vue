<template>
  <first-column-component>
    <user-profile-container-component />
  </first-column-component>
  <div
    class="col-span-12 lg:col-span-9 grid-cols-9 gap-x-4 gap-y-4 flex flex-wrap lg:grid"
  >
    <div class="col-span-12">
      <div class="grid grid-cols-12 gap-x-4 gap-y-4">
        <div class="col-span-12">
          <gallery-container-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FirstColumnComponent from "@/views/components/home/first-column.component.vue";
import UserProfileContainerComponent from "@/views/components/user-profile/user-profile-container.component.vue";
import GalleryContainerComponent from "@/views/components/gallery/gallery-container.component.vue";
</script>

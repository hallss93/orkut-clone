<template>
  <div class="col-span-6">
    <div class="grid grid-cols-12 gap-x-4 gap-y-4">
      <div class="col-span-12">
        <user-info-container-component />
      </div>
      <div class="col-span-12">
        <upcoming-birthdays-container-component />
      </div>
      <div class="col-span-12">
        <user-depositions-container-component />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfoContainerComponent from "@/components/user-info/user-info-container.component.vue";
import UpcomingBirthdaysContainerComponent from "../upcoming-birthdays/upcoming-birthdays-container.component.vue";
import UserDepositionsContainerComponent from "@/components/user-info/user-depositions-container.component.vue";
</script>

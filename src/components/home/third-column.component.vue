<template>
  <div class="col-span-3 grid gap-y-4">
    <friends-container-component />
    <communities-container-component />
  </div>
</template>

<script setup lang="ts">
import FriendsContainerComponent from "@/components/friends/friends-container.component.vue";
import CommunitiesContainerComponent from "@/components/communities/communities-container.component.vue";
</script>

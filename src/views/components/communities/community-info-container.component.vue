<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <p class="text-xl font-bold text-start px-2 my-4">Eu Odeio Acordar Cedo</p>
    <breadcrumbs class="px-2" />
    <community-informations-container-component />
  </div>
</template>
<script lang="ts" setup>
import Breadcrumbs from "@/views/components/atoms/breadcrumb/breadcrumb-container.component.vue";
import CommunityInformationsContainerComponent from "@/views/components/communities/community-informations/community-informations-container.component.vue";
</script>

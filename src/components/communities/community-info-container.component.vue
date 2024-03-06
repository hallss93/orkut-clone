<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <p class="text-xl font-bold text-start mt-4">Eu Odeio Acordar Cedo</p>
    <breadcrumbs />
    <community-informations-container-component />
  </div>
</template>
<script lang="ts" setup>
import Breadcrumbs from "@/components/breadcrumbs/breadcrumb-container.component.vue";
import CommunityInformationsContainerComponent from "@/components/communities/community-informations/community-informations-container.component.vue";
</script>

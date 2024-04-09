<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <breadcrumbs />
    <user-info-bio />
    <user-classifiers-container-component />
    <user-informations-container-component />
  </div>
</template>
<script lang="ts" setup>
import Breadcrumbs from "@/views/components/atoms/breadcrumb/breadcrumb-container.component.vue";
import UserInfoBio from "@/views/components/organisms/user-info/user-info-bio.component.vue";
import UserClassifiersContainerComponent from "@/views/components/organisms/user-info/user-classifiers/user-classifiers-container.component.vue";
import UserInformationsContainerComponent from "@/views/components/organisms/user-info/user-informations/user-informations-container.component.vue";
</script>

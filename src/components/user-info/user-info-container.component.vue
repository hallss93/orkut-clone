<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <breadcrumbs />
    <user-info-bio />
    <user-classifiers-container-component />
  </div>
</template>
<script lang="ts" setup>
import Breadcrumbs from "@/components/breadcrumbs/breadcrumb-container.component.vue";
import UserInfoBio from "@/components/user-info/user-info-bio.component.vue";
import UserClassifiersContainerComponent from "@/components/user-info/user-classifiers/user-classifiers-container.component.vue";
</script>

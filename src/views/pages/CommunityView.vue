<template>
  <home-layout>
    <template #first>
      <community-profile-container-component />
    </template>
    <template #second>
      <div class="col-span-12">
        <community-info-container-component />
      </div>
    </template>
    <template #third>
      <card-container-component>
        <template #header>
          <div class="grow h-14">
            <h6 class="text-sm font-bold text-gray-500 text-left">
              Membros (20150)
            </h6>
          </div>
          <div class="grow 0"></div>
          <div class="grow h-14">
            <h6
              class="text-sm font-bold text-pink-500 text-right cursor-pointer"
            >
              Ver todos
            </h6>
          </div>
        </template>
        <template #body>
          <div class="grid grid-cols-3 gap-x-8 gap-y-4">
            <person-container-component v-for="i in 9" :key="i" avatar />
          </div>
        </template>
      </card-container-component>
    </template>
  </home-layout>
</template>

<script setup lang="ts">
import HomeLayout from "@/views/layouts/HomeLayout.vue";
import CommunityProfileContainerComponent from "@/views/components/communities/community-profile-container.component.vue";
import CommunityInfoContainerComponent from "@/views/components/communities/community-info-container.component.vue";
import CardContainerComponent from "@/views/components/organisms/card/card-container.component.vue";
import PersonContainerComponent from "@/views/components/molecules/person-container.component.vue";
</script>

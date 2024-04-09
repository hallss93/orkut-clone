<template>
  <home-layout>
    <template #first>
      <card-container-component>
        <template #body>
          <menu-container-component />
        </template>
      </card-container-component>
    </template>
    <template #second>
      <div class="col-span-12">
        <user-info-container-component />
      </div>
      <div class="col-span-12">
        <upcoming-birthdays-container-component />
      </div>
      <div class="col-span-12">
        <user-new-deposition-container-component />
      </div>
      <div class="col-span-12">
        <user-depositions-container-component />
      </div>
    </template>
    <template #third>
      <card-container-component>
        <template #header>
          <div class="grow h-14">
            <h6 class="text-sm font-bold text-gray-500 text-left">
              Amigos (16)
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
      <card-container-component>
        <template #header>
          <div class="grow h-14">
            <h6 class="text-sm font-bold text-gray-500 text-left">
              Comunidades (56)
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

import UserInfoContainerComponent from "@/views/components/organisms/user-info/user-info-container.component.vue";
import UpcomingBirthdaysContainerComponent from "@/views/components/organisms/upcoming-birthdays/upcoming-birthdays-container.component.vue";
import UserDepositionsContainerComponent from "@/views/components/organisms/user-info/user-depositions-container.component.vue";
import UserNewDepositionContainerComponent from "@/views/components/organisms/user-info/user-new-deposition-container.component.vue";
import MenuContainerComponent from "@/views/components/molecules/menu-container.component.vue";
import CardContainerComponent from "@/views/components/organisms/card/card-container.component.vue";
import PersonContainerComponent from "@/views/components/molecules/person-container.component.vue";
</script>

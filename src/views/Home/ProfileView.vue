<template>
  <first-column-component>
    <user-profile-container-component />
  </first-column-component>
  <div
    class="col-span-12 lg:col-span-9 grid-cols-9 gap-x-4 gap-y-4 flex flex-wrap lg:grid"
  >
    <second-column-component>
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
    </second-column-component>

    <third-column-component>
      <friends-container-component title="Amigos" :total="50" avatar />
      <communities-container-component />
    </third-column-component>
  </div>
</template>

<script setup lang="ts">
import FirstColumnComponent from "@/components/home/first-column.component.vue";
import SecondColumnComponent from "@/components/home/second-column.component.vue";
import ThirdColumnComponent from "@/components/home/third-column.component.vue";

import UserProfileContainerComponent from "@/components/user-profile/user-profile-container.component.vue";

import UserInfoContainerComponent from "@/components/user-info/user-info-container.component.vue";
import UpcomingBirthdaysContainerComponent from "@/components/upcoming-birthdays/upcoming-birthdays-container.component.vue";
import UserDepositionsContainerComponent from "@/components/user-info/user-depositions-container.component.vue";
import UserNewDepositionContainerComponent from "@/components/user-info/user-new-deposition-container.component.vue";

import FriendsContainerComponent from "@/components/friends/friends-container.component.vue";
import CommunitiesContainerComponent from "@/components/communities/communities-container.component.vue";
</script>

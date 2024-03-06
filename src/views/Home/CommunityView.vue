<template>
  <first-column-component>
    <community-profile-container-component />
  </first-column-component>
  <div
    class="col-span-12 lg:col-span-9 grid-cols-9 gap-x-4 gap-y-4 flex flex-wrap lg:grid"
  >
    <second-column-component>
      <div class="col-span-12">
        <community-info-container-component />
      </div>
    </second-column-component>

    <third-column-component>
      <friends-container-component title="Membros" :total="20150" />
    </third-column-component>
  </div>
</template>

<script setup lang="ts">
import FirstColumnComponent from "@/components/home/first-column.component.vue";
import SecondColumnComponent from "@/components/home/second-column.component.vue";
import ThirdColumnComponent from "@/components/home/third-column.component.vue";

import CommunityProfileContainerComponent from "@/components/communities/community-profile-container.component.vue";

import CommunityInfoContainerComponent from "@/components/communities/community-info-container.component.vue";

import FriendsContainerComponent from "@/components/friends/friends-container.component.vue";
</script>

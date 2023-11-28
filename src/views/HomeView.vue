<template>
  <div class="home">
    <navbar-component />
    <div class="info-container">
      <user-options-component />
      <profile-infos-component />
      <friends-component />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/components/navbar-component.vue";
import UserOptionsComponent from "@/components/user-options-component.vue";
import ProfileInfosComponent from "@/components/profile-infos-component.vue";
import FriendsComponent from "@/components/friends-component.vue";
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.info-container {
  margin-top: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
@media (min-width: 1500px) {
  .info-container {
    max-width: 1500px;
  }
}
</style>

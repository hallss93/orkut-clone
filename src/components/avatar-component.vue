<template>
  <div class="avatar-container">
    <div class="avatar">
      <user-photo-profile-component></user-photo-profile-component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserPhotoProfileComponent from "./user-photo-profile-component.vue";
</script>

<style scoped lang="scss">
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    flex-shrink: 0;
    border: 2px solid #ed2590;
    border-radius: 50%;
    .profile-photo {
      width: 125px;
      height: 125px;
      border-radius: 50%;
    }
  }
}
</style>

<template>
  <div class="profile-container">
    <container-component>
      <template #body>
        <avatar-component />
        <p class="user-name">Hallison Melo</p>
        <p class="gender">masculino, solteiro</p>
        <p class="country">Brasil</p>
      </template>
    </container-component>
  </div>
</template>

<script lang="ts" setup>
import AvatarComponent from "./avatar-component.vue";
import ContainerComponent from "./container-component.vue";
</script>

<style scoped lang="scss">
.profile-container {
  width: 20vw;
  flex-shrink: 0;
  margin-top: 30px;

  p {
    margin-top: 8px;
  }

  .user-name {
    color: #4b4b4b;
    text-align: center;
    font: 700 16px/24px "SF Pro Display", sans-serif;
    font-style: normal;
    letter-spacing: 0.2px;
  }

  .gender,
  .country {
    color: #4b4b4b;
    text-align: center;
    font: 400 16px/24px Roboto, sans-serif;
    font-style: normal;
    letter-spacing: 0.2px;
  }
}
@media (min-width: 1500px) {
  .profile-container {
    max-width: 300px;
  }
}
</style>

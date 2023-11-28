<template>
  <div class="profile-container">
    <container-component>
      <template #body>
        <p>amigos</p>
      </template>
    </container-component>
  </div>
</template>

<script lang="ts" setup>
import ContainerComponent from "./container-component.vue";
</script>

<style scoped lang="scss">
.profile-container {
  width: 20vw;
  flex-shrink: 0;
  margin-top: 30px;
}
@media (min-width: 1500px) {
  .profile-container {
    max-width: 300px;
  }
}
</style>

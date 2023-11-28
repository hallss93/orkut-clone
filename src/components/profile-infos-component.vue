<template>
  <div class="profile-container">
    <container-component>
      <template #body>
        <p>Hallison Melo</p>
      </template>
    </container-component>
  </div>
</template>

<script lang="ts" setup>
import ContainerComponent from "./container-component.vue";
</script>

<style scoped lang="scss">
.profile-container {
  width: 50vw;
  min-height: 150px;
  flex-shrink: 0;
  margin-top: 30px;

  border-radius: 20px;
  background: #fdfeff;
}
@media (min-width: 1500px) {
  .profile-container {
    max-width: 750px;
  }
}
</style>

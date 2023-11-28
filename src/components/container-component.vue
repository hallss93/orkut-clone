<template>
  <div class="container">
    <slot name="body"></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 24px;

  border-radius: 20px;
  background: #fdfeff;
  min-height: 150px;
  margin: 0px 25px;
}
</style>

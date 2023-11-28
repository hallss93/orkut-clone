<template>
  <img
    class="profile-photo"
    :class="{ small: props.small }"
    src="https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg"
    alt="Foto Perfil"
  />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  small: { type: Boolean, default: false },
});
</script>

<style scoped lang="scss">
.profile-photo {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  &.small {
    width: 42px;
    height: 42px;
  }
}
</style>

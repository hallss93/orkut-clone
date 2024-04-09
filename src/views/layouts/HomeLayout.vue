<template>
  <div class="col-span-3 hidden lg:block">
    <slot name="first" />
  </div>
  <div
    class="col-span-12 lg:col-span-9 grid-cols-9 gap-x-4 gap-y-4 flex flex-wrap lg:grid"
  >
    <div class="col-span-9" v-if="unique">
      <slot name="unique" />
    </div>
    <div class="col-span-6">
      <div class="grid grid-cols-12 gap-x-4 gap-y-4">
        <slot name="second" />
      </div>
    </div>

    <div class="col-span-3">
      <div class="grid gap-y-4">
        <slot name="third" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  unique: { type: Boolean, required: false },
});
</script>

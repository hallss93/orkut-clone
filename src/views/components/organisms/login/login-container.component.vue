<template>
  <div class="flex items-center h-screen justify-center">
    <div class="w-9/12">
      <div class="grid grid-cols-12 gap-4 items-center h-screen">
        <div
          class="col-start-2 lg:col-start-2 col-span-12 lg:col-span-10 xl:col-start-2 lg:col-span-8 md:h-3/6"
        >
          <div class="grid grid-cols-12">
            <login-into-component />
            <login-form-component />
          </div>
          <login-footer-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginFooterComponent from "./login-footer.component.vue";
import LoginIntoComponent from "./login-into.component.vue";
import loginFormComponent from "./login-form.component.vue";
</script>

<template>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex w-full outline-none justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 flex items-center"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <user-profile-photo-component />
          hallison melo
          <svg
            class="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserProfilePhotoComponent from "@/components/user-profile/user-profile-photo.component.vue";
</script>

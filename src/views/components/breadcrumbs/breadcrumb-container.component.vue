<template>
  <nav class="flex p-0" aria-label="Breadcrumb">
    <ol
      class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
    >
      <li class="inline-flex items-center">
        <router-link
          :to="'/home'"
          class="inline-flex items-center text-sm font-medium text-gray-700"
        >
          Início
        </router-link>
      </li>
      <li>
        <div class="flex items-center">
          <svg
            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <a href="#" class="ms-1 text-sm font-bold text-pink-500">Perfil</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

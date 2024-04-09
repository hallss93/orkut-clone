<template>
  <div
    class="col-span-12 md:col-span-4 lg:col-span-4 grid grid-cols-12 mt-2 md:mt-0"
  >
    <div class="col-span-12 bg-blue-100 p-4 mb-2 border border-2 border-white">
      <p class="text-gray-500 text-center mb-4">
        Acesse o orkut com a sua conta
      </p>
      <!-- E-mail -->
      <div class="flex items-baseline gap-2 mb-2">
        <div class="flex w-1/4 justify-end">
          <label
            for="error"
            :class="{ 'text-red-700': error }"
            class="block mb-2 text-sm font-medium text-gray-500 w-max text-right"
            >E-mail:</label
          >
        </div>
        <div class="flex flex-wrap w-full">
          <input
            type="text"
            id="error"
            :class="{
              'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 ':
                error,
            }"
            class="border text-sm rounded-lg focus:border-red-500 block w-full p-2.5 w-full"
          />
          <p v-if="error" class="mt-2 text-sm text-red-600">E-mail inválido!</p>
        </div>
      </div>

      <!-- Password -->

      <div class="flex items-baseline gap-2 mb-5">
        <div class="flex w-1/4 justify-end">
          <label
            for="error"
            :class="{ 'text-red-700': error }"
            class="block mb-2 text-sm font-medium text-gray-500 w-max text-right"
            >Senha:</label
          >
        </div>
        <div class="flex flex-wrap w-full">
          <input
            type="text"
            id="error"
            :class="{
              'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 ':
                error,
            }"
            class="border text-sm rounded-lg focus:border-red-500 block w-full p-2.5 w-full"
          />
          <p v-if="error" class="mt-2 text-sm text-red-600">Senha inválida!</p>
        </div>
      </div>
      <div class="flex items-center mb-4 items-center">
        <div class="flex w-1/4 justify-end">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 me-4"
          />
        </div>
        <div class="flex">
          <label
            for="default-checkbox"
            class="text-sm font-medium text-gray-500"
            >Salvar as minhas informações neste computador</label
          >
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          @click="entrar()"
          class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          Login
        </button>
      </div>

      <div class="text-center">
        <a href="#" class="font-normal text-blue-500 underline"
          >Não consegue acessar a sua conta?</a
        >
      </div>
    </div>
    <div class="col-span-12 bg-white p-4 flex items-center justify-center">
      <div class="text-center">
        <p class="text-gray-500 mb-1">Ainda não é membro?</p>
        <a href="#" class="font-bold text-blue-500 underline uppercase"
          >Entrar Já</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const error = ref();
const router = useRouter();

function entrar(): void {
  router.push("/home");
}
</script>

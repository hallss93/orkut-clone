<template>
  <div class="flex items-center h-screen justify-center">
    <div class="w-9/12">
      <div class="grid grid-cols-12 gap-4 items-center h-screen">
        <div
          class="col-start-2 lg:col-start-2 col-span-12 lg:col-span-10 xl:col-start-2 lg:col-span-8 h-3/6"
        >
          <div class="grid grid-cols-12 h-full">
            <div
              class="col-span-12 md:col-span-8 lg:col-span-8 flex flex-wrap justify-center items-center bg-white md:me-2 p-4"
            >
              <div class="flex flex-wrap justify-center h-fit">
                <img src="@/assets/logo.svg" alt="Orkut" class="h-20 mb-4" />
                <p class="text-gray-500 mb-1">
                  <span class="text-pink-500 font-bold">Conecte-se</span> aos
                  seus amigos e familiares usando recados e mensagens
                  instantâneas
                </p>
                <p class="text-gray-500 mb-1">
                  <span class="text-pink-500 font-bold">Conheça</span> novas
                  pessoas através de amgios de seus amigos e comunidades
                </p>
                <p class="text-gray-500 mb-1">
                  <span class="text-pink-500 font-bold">Compartilhe</span> seus
                  vídeos, fotos e paixões em um só lugar
                </p>
              </div>
            </div>
            <div
              class="col-span-12 md:col-span-4 lg:col-span-4 grid grid-cols-12 mt-2 md:mt-0"
            >
              <div
                class="col-span-12 bg-blue-100 p-4 mb-2 border border-2 border-white"
              >
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
                    <p v-if="error" class="mt-2 text-sm text-red-600">
                      E-mail inválido!
                    </p>
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
                    <p v-if="error" class="mt-2 text-sm text-red-600">
                      Senha inválida!
                    </p>
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
              <div
                class="col-span-12 bg-white p-4 flex items-center justify-center"
              >
                <div class="text-center">
                  <p class="text-gray-500 mb-1">Ainda não é membro?</p>
                  <a href="#" class="font-bold text-blue-500 underline"
                    >ENTRAR JÁ</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Footer -->
          <div class="bg-blue-200 mt-2 text-center">
            <ul
              class="flex flex-wrap items-center justify-center text-gray-600"
            >
              <li>
                <a href="#" class="me-4 hover:underline md:me-6"
                  >© 2024 Orkut</a
                >
              </li>
              <li>
                <a href="#" class="me-4 underline md:me-6 text-blue-500"
                  >Sobre o Orkut</a
                >
              </li>
              <li>
                <a href="#" class="me-4 underline md:me-6 text-blue-500"
                  >Centro de segurança</a
                >
              </li>
              <li>
                <a href="#" class="me-4 underline md:me-6 text-blue-500"
                  >Privacidade</a
                >
              </li>
              <li>
                <a href="#" class="me-4 underline md:me-6 text-blue-500"
                  >Termos</a
                >
              </li>
            </ul>
          </div>
        </div>
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

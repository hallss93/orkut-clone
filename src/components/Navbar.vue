<template>
  <div class="header-bg">
    <img class="logo" src="@/assets/logo.png" />
    <div class="menu-options">
      <div class="in-cio">Início</div>

      <div class="perfil">Perfil</div>

      <div class="recados">Recados</div>

      <div class="amigos">Amigos</div>

      <div class="comunidades">Comunidades</div>

      <div class="aplicativos">Aplicativos</div>
    </div>
    <div class="input-search">
      <div class="bg">
        <div class="pesquisar-no-orkut">Pesquisar no Orkut</div>

        <svg
          class="search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clip-path="url(#clip0_201_230)">
            <path
              d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="#4B4B4B"
            />
          </g>
          <defs>
            <clipPath id="clip0_201_230">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="user">
      <img class="foto" src="@/assets/foto.png" />
      <div class="dante-lucca">Dante Lucca</div>

      <svg
        class="down"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_201_239)">
          <path
            d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
            fill="#ED2590"
          />
        </g>
        <defs>
          <clipPath id="clip0_201_239">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.header-bg {
  background: var(--white, #fdfeff);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
}
.menu-options {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0px 40px;
}
.in-cio {
  color: var(--text, #4b4b4b);
  text-align: center;
  font: 400 16px/24px "Roboto", sans-serif;
  left: 250px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.perfil {
  color: var(--primary-brand, #ed2590);
  text-align: center;
  font: 700 16px/24px "Roboto", sans-serif;
  left: 318px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recados {
  color: var(--text, #4b4b4b);
  text-align: center;
  font: 400 16px/24px "Roboto", sans-serif;
  left: 386px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.amigos {
  color: var(--text, #4b4b4b);
  text-align: center;
  font: 400 16px/24px "Roboto", sans-serif;
  left: 478px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.comunidades {
  color: var(--text, #4b4b4b);
  text-align: center;
  font: 400 16px/24px "Roboto", sans-serif;
  left: 562px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aplicativos {
  color: var(--text, #4b4b4b);
  text-align: center;
  font: 400 16px/24px "Roboto", sans-serif;
  left: 690px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 132px;
  height: 39px;
  left: 80px;
  top: 25px;
  padding-left: 80px;
}
.user {
  height: 42px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 80px;
  min-width: 225px;
}
.dante-lucca {
  color: var(--text, #4b4b4b);
  text-align: center;
  font: 700 16px/24px "SF Pro Display", sans-serif;
  left: 1307px;
  top: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.foto {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  left: 1257px;
  top: 25px;
}
.down {
  left: 1408px;
  top: 34px;
  overflow: visible;
}

.input-search {
  width: 355px;
  height: 44px;
  margin-right: 64px;
}
.bg {
  background: var(--input, #eff3f8);
  border-radius: 10px;
  width: 355px;
  height: 44px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.pesquisar-no-orkut {
  color: var(--text, #4b4b4b);
  text-align: left;
  font: 400 16px/24px "SF Pro Display", sans-serif;
  opacity: 0.5;
  width: 263px;
}
.search {
  opacity: 0.5;
  overflow: visible;
}
</style>

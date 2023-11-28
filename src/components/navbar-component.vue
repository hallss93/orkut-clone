<template>
  <div class="header-bg">
    <img class="logo" src="@/assets/logo.png" alt="Logo" />
    <div class="menu-options">
      <div
        v-for="(m, index) in menu"
        :key="index"
        class="menu-item"
        :class="{ active: m.active }"
        @click="open_item(m.key)"
      >
        {{ m.name }}
      </div>
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
      <user-photo-profile-component small></user-photo-profile-component>
      <p class="user-name">Hallison Melo</p>

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

<script lang="ts" setup>
import { reactive } from "vue";
import UserPhotoProfileComponent from "./user-photo-profile-component.vue";

const menu = reactive([
  { key: "inicio", name: "Início", active: true },
  { key: "perfil", name: "Perfil", active: false },
  { key: "recados", name: "Recados", active: false },
  { key: "amigos", name: "Amigos", active: false },
  { key: "comunidades", name: "Comunidades", active: false },
  { key: "aplicativos", name: "Aplicativos", active: false },
]);

function open_item(key: string): void {
  alert(key);
}
</script>

<style scoped lang="scss">
.header-bg {
  position: fixed;
  background: var(--white, #fdfeff);
  width: 91vw;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5vw 25px 4vw;
  gap: 30px;

  .logo {
    min-width: 70px;
    max-width: 132px;
    width: 15vw;
    height: auto;
  }
  .menu-options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .menu-item {
      color: var(--text, #4b4b4b);
      text-align: center;
      font: 400 16px/24px "Roboto", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.active {
        color: var(--primary-brand, #ed2590);
        font: 700 16px/24px "Roboto", sans-serif;
        cursor: default;
      }
    }
  }
  .input-search {
    height: 44px;
    .bg {
      background: var(--input, #eff3f8);
      border-radius: 10px;
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding-left: 5px;
      padding-right: 5px;
      .pesquisar-no-orkut {
        color: var(--text, #4b4b4b);
        text-align: left;
        font: 400 16px/24px "SF Pro Display", sans-serif;
        opacity: 0.5;
        width: 15vw;
      }
      .search {
        opacity: 0.5;
        overflow: visible;
      }
    }
  }
  .user {
    height: 42px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    gap: 5px;
    .user-name {
      color: var(--text, #4b4b4b);
      text-align: center;
      font: 700 16px/24px "SF Pro Display", sans-serif;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .down {
      overflow: visible;
    }
  }
}

@media (max-width: 980px) {
  .user {
    p {
      display: none;
    }
  }
}
</style>

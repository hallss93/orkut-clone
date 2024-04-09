<template>
  <div
    class="flex flex-col justify-start items-start me-8"
    v-for="(item, index) in options"
    :key="index"
  >
    <span class="text-gray-500">
      {{ item.text }}
    </span>
    <div class="flex justify-start items-center mt-3 leading-none">
      <FontAwesomeIcon
        v-for="(icon, iconIndex) in item.icon"
        :key="iconIndex"
        :icon="icon"
        class="me-2"
        :class="item.iconColor"
      />
      {{ item.value }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faStar,
  faSmile,
  faThumbsUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSmile as faSmileRegular,
  faThumbsUp as faThumbsUpRegular,
  faHeart as faHeartRegular,
} from "@fortawesome/free-regular-svg-icons";

const options = [
  { text: "fãs", value: 85, icon: [faStar], iconColor: "text-yellow-500" },
  {
    text: "confiável",
    icon: [faSmile, faSmileRegular, faSmileRegular],
    iconColor: "text-yellow-500",
  },
  {
    text: "legal",
    icon: [faThumbsUp, faThumbsUp, faThumbsUpRegular],
    iconColor: "text-blue-400",
  },
  {
    text: "sexy",
    icon: [faHeart, faHeart, faHeartRegular],
    iconColor: "text-pink-500",
  },
];
</script>

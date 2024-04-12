<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <breadcrumbs />
    <p class="text-xl font-bold text-start my-4">Álbum teste (12)</p>

    <div class="w-full">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
        class="mb-8"
      >
        <Slide v-for="(a, index) in albums" :key="index">
          <div class="carousel__item">
            <img class="rounded-lg" :src="a.src" alt="" />
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(a, index) in albums" :key="index">
          <div class="carousel__item" @click="slideTo(index)">
            <img class="h-30 w-30 rounded-lg" :src="a.src" alt="" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useRoute } from "vue-router";
import router from "@/router";

import Breadcrumbs from "@/views/components/atoms/breadcrumb/breadcrumb-container.component.vue";

const route = useRoute();

const albums = [
  {
    title: "Álbum 1",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  },
  {
    title: "Álbum 2",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    title: "Álbum 3",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    title: "Álbum 4",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
  {
    title: "Álbum 5",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
  {
    title: "Álbum 6",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  },
  {
    title: "Álbum 7",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  },
  {
    title: "Álbum 8",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  },
  {
    title: "Álbum 9",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  },
  {
    title: "Álbum 10",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  },
  {
    title: "Álbum 11",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  },
  {
    title: "Álbum 12",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  },
];

const currentSlide = ref(0);

function slideTo(val: number) {
  currentSlide.value = val;
}

if (!route.params.id) router.push("/gallery/");
currentSlide.value = Number(route.params.id);
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>

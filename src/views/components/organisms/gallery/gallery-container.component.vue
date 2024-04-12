<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <breadcrumbs />
    <p class="text-xl font-bold text-start my-4">Galeria (120)</p>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(a, index) in albums"
        :key="index"
        class="mb-4 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
        @click="open_album(index)"
      >
        <img class="h-auto max-w-full rounded-lg" :src="a.src" alt="" />
        <p class="text-xl font-medium text-slate-900 my-2">
          {{ a.title }}
        </p>
        <p>
          Use this example to show four larger images with two items on a row.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
import Breadcrumbs from "@/views/components/atoms/breadcrumb/breadcrumb-container.component.vue";

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

function open_album(index: number) {
  router.push("/gallery/" + index);
}
</script>

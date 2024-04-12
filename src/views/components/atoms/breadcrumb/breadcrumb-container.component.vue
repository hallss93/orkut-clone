<template>
  <!-- <nav class="breadcrumb">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      </li>
    </ul>
  </nav> -->
  <nav class="flex p-0" aria-label="Breadcrumb">
    <ol
      class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
    >
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="inline-flex items-center"
      >
        <div v-if="index === breadcrumbs.length - 1" class="flex items-center">
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
          <a href="#" class="ms-1 text-sm font-bold text-pink-500"
            ><router-link :to="crumb.to">{{ crumb.label }}</router-link></a
          >
        </div>
        <router-link v-else :to="crumb.to">{{ crumb.label }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
console.log(route);

const breadcrumbs = computed(() => {
  const matchedRoutes = route.matched;
  const matchedLastRoute = route.matched[route.matched.length - 1];
  console.log("route", route);
  console.log("matchedRoutes", matchedRoutes);
  console.log("matchedLastRoute", matchedLastRoute);
  matchedRoutes.splice(-1);

  return matchedRoutes
    .map((routeItem) => ({
      label: routeItem.meta.breadcrumb || routeItem.name,
      to: getRoutePath(route, routeItem),
    }))
    .concat([
      {
        label: matchedLastRoute.meta.breadcrumb || matchedLastRoute.name,
        to: getRoutePath(route, matchedLastRoute),
      },
    ]);
});

function getRoutePath(route: any, routeItem: any) {
  const matchedSegments = route.matched.slice(
    0,
    route.matched.indexOf(routeItem) + 1
  );

  return matchedSegments.map((segment: any) => segment.path).join("/");
}
</script>

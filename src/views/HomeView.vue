<template>
  <div class="home">
    <Navbar msg="Orkut" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Navbar,
  },
})
export default class HomeView extends Vue {}
</script>

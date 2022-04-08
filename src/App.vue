<template>
  <router-link to="/">
    <img class="logo" src="@/assets/logo.webp" alt="Cuisine" />
  </router-link>
  <search />
  <categories />
  <router-view />
</template>

<script>
import Categories from "@/components/Categories.vue";
import Search from "./components/Search.vue";
export default {
  components: {
    Categories,
    Search,
  },
};
</script>

<style>
.logo {
  max-width: 7rem;
  margin-left: 4rem;
}

.wrap {
  margin: 3rem;
}

@media screen and (max-width: 48rem) {
  .logo {
    display: flex;
    max-width: 14rem;
    margin: auto;
  }

  .wrap {
    margin: 1rem;
  }
}
</style>

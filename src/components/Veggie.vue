<template>
  <div class="wrap_veggie">
  <h2>Veggie picks:</h2>
    <Splide :options="options">
      <SplideSlide
        class="popular_food"
        v-for="recipe in veggie"
        :key="recipe.id"
      >
        <card :title="recipe.title" :image="recipe.image" :id="recipe.id"/>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Card from './Card.vue';

export default {
  components: {
    Splide,
    SplideSlide,
    Card,
  },
  setup() {
    const store = useStore();

    const veggie = ref([]);

    const options = {
      perPage: 3,
      arrows: false,
      pagination: false,
      drag: "free",
      gap: "5rem",
      breakpoints: {
        768: {
          perPage: 2
        },
        425: {
          perPage: 1
        }
      }
    };

    onMounted(async () => {
      await store.dispatch("getVeggie");
      veggie.value = store.state.veggie;
    });

    return { veggie, options };
  },
};
</script>

<style scoped>

h2 {
  padding: 1rem;
  text-decoration: underline;
  font-size: 2em;
}

</style>

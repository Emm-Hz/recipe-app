<template>
  <div
    class="wrap-cuisine"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  >
    <div
      class="recipes"
      v-for="item in recipes"
      :key="item.id"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      <card :title="item.title" :image="item.image" :id="item.id" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  setup() {
    const store = useStore();
    const route = useRoute();
    const type = ref("");

    watchEffect(async () => {
      type.value = route.params.type;
      await store.dispatch("getCuisine", type.value);
    });

    const recipes = computed(() => {
      return store.state.cuisine;
    });

    return { recipes };
  },
};
</script>

<style scoped>
.wrap-cuisine {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  place-items: center;
  margin: 3rem 9rem 1rem;
}

.recipes {
  text-align: center;
}

.recipes img {
  border-radius: 20px;
}

.recipes p {
  font-family: var(--poppins);
}

@media screen and (max-width: 48rem) {
  .wrap-cuisine {
    margin: 2rem 0 0;
  }
}
</style>


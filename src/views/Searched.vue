<template>
  <div class="wrap-search">
    <div class="recipes" v-for="item in recipes" :key="item.id">
      <card
        :title="item.title"
        :image="item.image"
        :id="item.id"
        v-motion
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
        }"
      />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  setup() {
    const store = useStore();
    const recipes = ref([]);

    watchEffect(() => {
      recipes.value = store.state.search;
    });

    return { recipes };
  },
};
</script>

<style scoped>
.wrap-search {
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
  .wrap-search {
    margin: 2rem 0 1rem;
  }
}
</style>
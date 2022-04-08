<template>
  <div class="card" @click="move">
    <img class="card__image" :src="image" :alt="title" />
    <div class="card__content" v-if="image">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
import { provide } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    props: ["title", "image", "id"],
    setup(props) {
      const store = useStore();

      const id = props.id;

      const move = () => {
        store.dispatch('getRecipe',id)
      }

      return { move }
    }
}
</script>

<style scoped>
.card {
  position: relative;
  max-width: 30rem;
  width: 100%;
  cursor: pointer;
}

.card__image {
  width: 100%;
  border-radius: 2rem;
  font-family: var(--poppins);
}
.card__content {
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  width: 100%;
  border-radius: 0 0 2rem 2rem;
  background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 1));
}

.card__content p {
  font-family: var(--poppins);
  color: var(--white);
}
</style>
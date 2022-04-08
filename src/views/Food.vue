<template>
  <div
    class="wrapp-recipe"
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
    }"
  >
    <div class="recipe_book">
      <h1>{{ info.title }}</h1>
      <div class="elements">
        <img :src="info.image" :alt="info.title" />
        <article>
          <div class="buttons">
            <button
              class="button"
              :class="[state == true ? 'active' : 'inactive']"
              :disabled="state"
              @click="swich"
            >
              Ingredients
            </button>
            <button
              class="button"
              :class="[state == false ? 'active' : 'inactive']"
              :disabled="!state"
              @click="swich"
            >
              Instructions
            </button>
          </div>
          <ul v-if="state">
            <li v-for="elements in info.extendedIngredients" :key="elements.id">
              <p>
                {{ elements.original }}
              </p>
            </li>
          </ul>
          <p v-else class="$style.summary" v-html="info.summary"></p>
        </article>
      </div>
      <p v-if="!state" class="instructions" v-html="info.instructions"></p>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const info = ref([]);
    const state = ref(true);

    const swich = () => {
      state.value = !state.value;
      console.log(state.value);
    };

    onMounted(() => {
      if (localStorage.getItem("recipe")) {
        const object = JSON.parse(localStorage.getItem("recipe"));
        info.value = object;
        console.log(info.value);
      }
    });

    return { info, state, swich };
  },
};
</script>

<style scoped>
body {
  width: 88vw;
}

article {
  width: 100%;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, 28rem) 64%;
  padding-inline: 1rem;
}

.wrapp-recipe {
  margin-inline: auto;
}

.recipe_book {
  margin: 3rem;
}

.recipe_book h1 {
  font=size: clamp(1.75rem, calc(1.57rem + 0.89vw), 2.00rem);
}

.elements {
  display: flex;
  gap: 2rem;
  padding: 2rem 0 0;
  font-family: var(--poppins);
}

.elements img {
  margin: auto;
  max-width: 30rem;
  max-height: 20rem;
  border-radius: 30px;
}

.instructions {
  padding: 2rem 1rem;
  font-family: var(--poppins);
}

.buttons {
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
}

.button {
  max-width: 10rem;
  width: 100%;
  height: 4rem;
  border: none;
  cursor: pointer;
  font-family: var(--barlow);
  font-size: 1.3em;
  color: var(--white);
  background-color: var(--gray);
}

.active {
  outline: 2px solid var(--gray);
  color: var(--black);
  background-color: var(--eton);
}

@media screen and (max-width: 48rem) {
  ul {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 1rem;
  }

  .recipe_book {
    margin: 2rem 0 0;
    padding-inline: 1rem;
  }

  .recipe_book h1 {
    text-align: center;
  }

  .elements {
    flex-direction: column;
  }

  .buttons {
    justify-content: center;
  }

  .instructions {
    padding: 2rem 0;
  }
}
</style>
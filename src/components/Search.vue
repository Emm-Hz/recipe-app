<template>
  <form class="form" @submit.prevent="search">
    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass bar-image"></i>
      <input type="text" class="bar-input" v-model="text" />
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const text = ref("");
    const store = useStore();

    const search = async () => {
      await store.dispatch("filterName", text.value);
      text.value = "";
    };

    return { text, search };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  place-content: center;
  margin: auto;
  max-width: 32rem;
  height: 3rem;
}

.search-bar {
  display: flex;
  place-items: center;
  width: 100%;
  border: 1px solid var(--eton);
  border-radius: 20px;
  background-color: var(--gray);
}

.bar-input {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  outline: none;
  font-family: var(--poppins);
  color: var(--white);
  background-color: var(--gray);
}

.bar-image {
  padding-inline: 0.5rem;
  color: var(--linen);
}
</style>
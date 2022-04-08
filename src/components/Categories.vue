<template>
  <nav>
    <div class="nav-wrapp">
      <router-link
        :to="{
          name: 'Cuisine',
          params: { type: 'Italian' },
        }"
      >
        <div class="nav-element">
          <i class="fa-solid fa-pizza-slice"></i>
          <h4>Italian</h4>
        </div>
      </router-link>

      <router-link
        :to="{
          name: 'Cuisine',
          params: { type: 'American' },
        }"
      >
        <div class="nav-element">
          <i class="fa-solid fa-burger"></i>
          <h4>American</h4>
        </div>
      </router-link>

      <router-link
        :to="{
          name: 'Cuisine',
          params: { type: 'Japanese' },
        }"
      >
        <div class="nav-element">
          <i class="fa-solid fa-bowl-food"></i>
          <h4>Japanese</h4>
        </div>
      </router-link>

      <router-link
        :to="{
          name: 'Cuisine',
          params: { type: 'Mexican' },
        }"
      >
        <div class="nav-element">
          <i class="fa-solid fa-pepper-hot"></i>
          <h4>Mexican</h4>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  max-width: 6rem;
  width: 100%;
  color: var(--linen);
  text-decoration: none;
  background-color: var(--gray);
  border-radius: 50%;
}

.nav-wrapp {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 0 auto;
  padding: 2rem 0 0;
  max-width: 30rem;
}

.nav-element {
  display: flex;
  flex-direction: column;
  place-content: center;
  max-width: 6rem;
  aspect-ratio: 1 / 1;
  text-align: center;
  font-size: clamp(1.00rem, calc(0.82rem + 0.89vw), 1.25rem);
}

a.is-activated {
  background: var(--eton);
  /* background: linear-gradient(90deg, #D7907B,#6C4B5E) */
}


</style>
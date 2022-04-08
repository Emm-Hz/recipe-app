<template>
  <div
    class="wrapp-landing wrap"
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
    }"
  >
    <veggie />
    <popular />
  </div>
</template>

<script>
import Veggie from "@/components/Veggie";
import Popular from "@/components/Popular";

export default {
  components: {
    Veggie,
    Popular,
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&display=swap");

:root {
  /* Colors */
  --white: #ffffff;
  --black: #000000;
  --linen: #f2e9dc;
  --gray: #595959;
  --eton: #91c499;

  /* Fonts */
  --poppins: "Poppins", sans-serif;
  --barlow: "Barlow Condensed", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--linen);
}

h1,
h2,
h4 {
  font-family: var(--barlow);
}

a {
  color: var(--black);
}
</style>

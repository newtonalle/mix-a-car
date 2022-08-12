<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark outlined-light">
      <div class="container-fluid">
        <img src="../../public/favicon.png" />
        <router-link
          style="margin-left: 10px"
          class="navbar-brand"
          :to="{ name: 'game' }"
          >Mix a Car!</router-link
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link
              :class="['nav-link', $route.name === 'game' ? 'active' : '']"
              :to="{ name: 'game' }"
              >Jogo</router-link
            >
            <router-link
              :class="['nav-link', $route.name === 'tutorial' ? 'active' : '']"
              :to="{ name: 'tutorial' }"
              >Tutorial</router-link
            >
            <router-link
              :class="['nav-link', $route.name === 'almanac' ? 'active' : '']"
              :to="{ name: 'almanac' }"
              >Almanaque</router-link
            >
            <button
              class="btn btn-outline-danger"
              style="margin-left: 10px"
              type="reset"
              @click="resetState"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    resetState() {
      if (
        confirm(
          "Fazer isso vai deletar todo o seu progresso, tem certeza que quer continuar?"
        )
      ) {
        this.$store.dispatch("resetState");
      }
    },

    goToTutorial() {
      this.$router.push({ name: "tutorial" });
    },

    goToAlmanac() {
      this.$router.push({ name: "almanac" });
    },
  },
};
</script>

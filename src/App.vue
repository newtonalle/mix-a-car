<template>
  <div class="text-center bg-dark text-light">
    <game-header></game-header>
    <router-view></router-view>
  </div>
</template>

<script>
import GameHeader from "./layout/GameHeader.vue";

export default {
  components: { GameHeader },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm"><garage /></div>
        <div class="col-sm"><stock /></div>
        <div class="col-sm"><mixing /></div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import Stock from "./components/Stock.vue";
import Garage from "./components/Garage.vue";
import Mixing from "./components/Mixing.vue";

export default {
  components: { Stock, Garage, Mixing },

  data: () => ({
    setIntervalId: 0,
  }),

  methods: {
    updateGame() {
      this.$store.dispatch("updateGame");
    },
  },

  created() {
    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.setIntervalId);
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>
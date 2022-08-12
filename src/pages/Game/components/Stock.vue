<template>
  <div>
    <h2>Estoque</h2>
    <br />
    <div
      v-for="(vehicle, index) in stock"
      :key="`vehicle-${vehicle.name}-index-${index}`"
    >
      <div v-if="vehicle.found" :id="vehicle.name">
        <h3>{{ vehicle.label }}</h3>
        <p>Partes {{ vehicle.partsAmount }}x</p>
        <p>Constrídos {{ vehicle.amount }}x</p>

        <button
          class="btn btn-success"
          @click="buildVehicle(vehicle.name)"
          :disabled="
            vehicle.partsAmount < vehicle.partsCost ||
            garage.totalSlots - garage.vehicles.length <= 0
          "
        >
          Construir {{ vehicle.label }} ({{ vehicle.partsCost }} partes)
        </button>

        <br />
        <br />

        <button
          class="btn btn-light"
          @click="replicateVehicleIntoParts(vehicle.name)"
          :disabled="vehicle.amount <= 0"
        >
          Replicar {{ vehicle.label }} em partes
        </button>

        <br />

        <p>x{{ vehicles[vehicle.name].partsPerVehicle }} Partes por veículo</p>

        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {
    buildVehicle(vehicle) {
      this.$store.dispatch("buildVehicle", vehicle);
    },

    replicateVehicleIntoParts(vehicle) {
      this.$store.dispatch("replicateVehicleIntoParts", vehicle);
    },
  },

  computed: {
    garage() {
      return this.$store.getters.getGarage;
    },

    vehicles() {
      return this.$store.getters.getVehicles;
    },

    stock() {
      return this.$store.getters.getStock;
    },
  },
};
</script>

<style scoped>
.btn {
  width: 300px;
}
</style>
<template>
  <div>
    <h2>Garagem</h2>
    <h4>({{ garage.totalSlots - garage.vehicles.length }} boxes livres)</h4>

    <br />

    <p class="fs-5" v-if="garage.vehicles.length <= 0">
      Nenhum veículo sendo construído!
    </p>

    <div
      v-for="(vehicle, index) in garage.vehicles"
      :key="`vehicle-${vehicle.name}-index-${index}`"
    >
      <p class="fs-5">
        Construindo {{ vehicle.label }} ({{ vehicle.buildingTime }}s)
      </p>

      <button class="btn btn-danger" @click="removeVehicle(index)">
        Remover
      </button>
      <br />
      <br />

      <!-- Stage 1 (Lowest) -->

      <img
        v-if="
          vehicle.buildingTime >= (vehicles[vehicle.name].buildingTime / 3) * 2
        "
        :src="
          require(`../../../assets/vehicles/${vehicle.name}/BuildingStage1.png`)
        "
        width="400px"
        height="300px"
      />

      <!-- Stage 2 (Mid) -->

      <img
        v-if="
          vehicle.buildingTime >= vehicles[vehicle.name].buildingTime / 3 &&
          vehicle.buildingTime < (vehicles[vehicle.name].buildingTime / 3) * 2
        "
        :src="
          require(`../../../assets/vehicles/${vehicle.name}/BuildingStage2.png`)
        "
        width="400px"
        height="300px"
      />

      <!-- Stage 3 (Highest) -->

      <img
        v-if="
          vehicle.buildingTime >= 0 &&
          vehicle.buildingTime < vehicles[vehicle.name].buildingTime / 3
        "
        :src="
          require(`../../../assets/vehicles/${vehicle.name}/BuildingStage3.png`)
        "
        width="400px"
        height="300px"
      />

      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
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

  methods: {
    removeVehicle(index) {
      this.$store.dispatch("removeVehicle", index);
    },
  },
};
</script>
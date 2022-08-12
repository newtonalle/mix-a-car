<template>
  <div>
    <h2>Almanaque</h2>
    <p>
      Você encontrou {{ totalFoundVehicles }}/{{ Object.values(stock).length }}
      carros diferentes!
    </p>

    <div v-for="(vehicle, index) in stock" :key="`${vehicle}-${index}`">
      <div v-if="vehicle.found">
        <h3>{{ vehicle.label }}</h3>
        <br />
        <img
          :src="
            require(`../../assets/vehicles/${vehicle.name}/BuildingStage3.png`)
          "
          width="400px"
          height="300px"
        />
        <br />
        <br />
        <p>{{ vehicles[vehicle.name].lore }}</p>
        <p>Tempo para construir: {{ vehicles[vehicle.name].buildingTime }}s</p>
        <p>Tipo: {{ stock[vehicle.name].type }}</p>
        <br />
      </div>
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

    totalFoundVehicles() {
      return this.$store.getters.getTotalFoundVehicles;
    },
  },
};
</script>
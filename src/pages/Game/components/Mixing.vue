<template>
  <div>
    <h2>Misturar Veículos</h2>
    <br />
    <br />

    <!-- Vehicle Mixing -->

    <div class="container">
      <button
        :disabled="
          mainVehicle === '' ||
          secondaryVehicle === '' ||
          (stock[mainVehicle].amount <= 1 &&
            mainVehicle === secondaryVehicle) ||
          stock[mainVehicle].amount <= 0 ||
          stock[secondaryVehicle].amount <= 0
        "
        @click="mixVehicles"
        class="btn btn-primary"
      >
        Misturar Veículos
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50%" />
            <th scope="col" style="width: 50%" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <div class="dropdown">
                <button
                  class="btn btn-success dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Veículo Principal
                </button>
                <ul class="dropdown-menu">
                  <li
                    v-for="(vehicle, index) in stock"
                    :key="`${index}-${vehicle.name}`"
                  >
                    <a
                      v-if="vehicle.name === mainVehicle && vehicle.found"
                      class="dropdown-item active"
                      >{{ vehicle.label }}</a
                    >
                    <a
                      v-if="vehicle.name != mainVehicle && vehicle.found"
                      class="dropdown-item"
                      @click="mainVehicle = vehicle.name"
                      >{{ vehicle.label }}</a
                    >
                  </li>
                </ul>
                <br />
                <br />
                <h5 class="fw-bold text-light" v-if="mainVehicle != ''">
                  {{ vehicles[mainVehicle].label }}
                </h5>
              </div>
            </th>
            <td>
              <div class="dropdown">
                <button
                  class="btn btn-success dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Veículo Secundário
                </button>
                <ul class="dropdown-menu">
                  <li
                    v-for="(vehicle, index) in stock"
                    :key="`${index}-${vehicle.name}`"
                  >
                    <a
                      v-if="vehicle.name === secondaryVehicle && vehicle.found"
                      class="dropdown-item active"
                      >{{ vehicle.label }}</a
                    >
                    <a
                      v-if="vehicle.name != secondaryVehicle && vehicle.found"
                      class="dropdown-item"
                      @click="secondaryVehicle = vehicle.name"
                      >{{ vehicle.label }}</a
                    >
                  </li>
                </ul>
                <br />
                <br />
                <h5 class="fw-bold text-light" v-if="secondaryVehicle != ''">
                  {{ vehicles[secondaryVehicle].label }}
                </h5>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Seed Mixing Log -->

    <div
      v-for="(combination, index) in vehicleCombinationLog"
      :key="`${combination}-${index}`"
    >
      <h5>
        {{ combination.main }} + {{ combination.secondary }} =
        <span
          v-if="combination.result != ''"
          @click="scrollWindowToVehicle(combination.result)"
          style="cursor: pointer"
        >
          {{ vehicles[combination.result].label }}
        </span>

        <span v-if="combination.result === ''"> Nada </span>
        <span
          style="cursor: pointer"
          class="fs-4 text-danger"
          @click="removeCombinationLogLine(index)"
        >
          X
        </span>
      </h5>
    </div>

    <br />
    <br />

    <button
      v-if="vehicleCombinationLog.length > 0"
      @click="clearCombinationLog"
      class="btn btn-danger"
    >
      Clear Combination Log
    </button>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    mainVehicle: "",
    secondaryVehicle: "",
  }),

  computed: {
    vehicles() {
      return this.$store.getters.getVehicles;
    },

    stock() {
      return this.$store.getters.getStock;
    },

    vehicleCombinationLog() {
      return this.$store.getters.getVehicleCombinationLog;
    },
  },

  methods: {
    mixVehicles() {
      if (
        (this.stock[this.mainVehicle].amount === 2 &&
          this.mainVehicle === this.secondaryVehicle) ||
        this.stock[this.mainVehicle].amount === 1 ||
        this.stock[this.secondaryVehicle].amount === 1
      ) {
        // If seed is the last remaining seed, confirm it's usage

        if (
          confirm(
            "Você tem certeza que deseja gastar seu último carro desse tipo?"
          )
        ) {
          this.$store.dispatch("mixVehicles", {
            mainVehicle: this.mainVehicle,
            secondaryVehicle: this.secondaryVehicle,
          });
          this.mainVehicle = "";
          this.secondaryVehicle = "";
        }
      } else {
        // If it is not the last seed, use it

        this.$store.dispatch("mixVehicles", {
          mainVehicle: this.mainVehicle,
          secondaryVehicle: this.secondaryVehicle,
        });
        this.mainVehicle = "";
        this.secondaryVehicle = "";
      }
    },

    clearCombinationLog() {
      this.$store.dispatch("clearCombinationLog");
    },

    scrollWindowToVehicle(vehicleToScroll) {
      this.$store.dispatch("scrollWindowToVehicle", vehicleToScroll);
    },

    removeCombinationLogLine(index) {
      this.$store.dispatch("removeCombinationLogLine", index);
    },
  },
};
</script>

<style scoped>
button {
  width: 200px;
}
</style>
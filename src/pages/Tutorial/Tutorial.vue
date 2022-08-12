<template>
  <div>
    <h2>Tutorial</h2>
    <br />
    <p class="fs-5">
      Nesse jogo o seu objetivo é construir a maior variedade de carros o
      possível!
    </p>
    <p class="fs-5">Isso pode ser feito da misturando carros, por exemplo:</p>
    <p class="fs-5">
      ● Um Lada somado a um carro Volvo resultaria em um carro Fiat
    </p>
    <p class="fs-5">
      ● Um carro Volvo somado a um carro Jaguar resultaria em um carro Chevrolet
    </p>
    <p class="fs-5">Assim por diante...</p>
    <p class="fs-5">
      Alguns dessas misturas podem falhar, principalmente quando os veículos
      sendo misturados forem resultados de muitas misturas!
    </p>
    <p class="fs-5">
      ● Existem 6 veículos com a dificuldade para serem encontrados BEM maior,
      sendo uma sequência específica de misturas, boa sorte!
    </p>
    <br />
    <p class="fs-5">
      Note que esse projeto foi criado em menos de duas semanas e pode conter
      múltiplos BUGS.
    </p>
    <p class="fs-5">
      Se você encontrar algum, reporte-o ao criador ou use ele, você que
      escolhe!
    </p>
    <br />
    <br />
    <img
      src="../../assets/vehicles/bmw/BuildingStage3.png"
      width="400px"
      height="300px"
    />
    <br />
    <br />
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
};
</script>
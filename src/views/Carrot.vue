<template>
  <div class="carrot">
    <v-container class="yellow--text text--darken-2">
      <h1>{{titleview}}</h1>
      <h2>{{ bitDateInfo }}</h2>
      <v-row>
        <v-col v-for="c in bitInfo" :key="c">
          <v-card color="yellow darken-2">
            <v-card-title>{{ c.rate_float.toFixed(2) }}</v-card-title>
            <v-card-text>{{ c.description }}</v-card-text>
            <v-card-title>{{ c.code }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Carrot",

  data() {
    return {
      titleview: this.$store.getters.bigTitle
    }
  },

  computed: {
    bitInfo() {
      return this.$store.state.bit
    },
    bitDateInfo(){
      return this.$store.state.date
    }
  },

  created() {
    this.$store.dispatch('fetchBit')
    this.$store.dispatch('fetchDate')
  }
};
</script>

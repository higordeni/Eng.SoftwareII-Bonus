<template>
  <v-card>
    <v-toolbar elevation="4" light>
      <v-btn icon color="blue">
        <router-link style="text-decoration: none; color: inherit" to="/">
          <v-icon>mdi-home</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon color="deep-purple accent-4">
        <router-link style="text-decoration: none; color: inherit" to="/grape">
          <v-icon>mdi-fruit-grapes</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon color="amber darken-4">
        <router-link style="text-decoration: none; color: inherit" to="/carrot">
          <v-icon>mdi-carrot</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon color="red darken-1">
        <router-link style="text-decoration: none; color: inherit" to="/apple">
          <v-icon>mdi-food-apple</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon color="green">
        <router-link style="text-decoration: none; color: inherit" to="/leaf">
          <v-icon>mdi-leaf</v-icon>
        </router-link>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>



<script>
export default {
  name: "Toolbar",

  data: () => ({}),
};
</script>

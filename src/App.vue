<template>
  <v-app>


<div>
    <v-system-bar
    app
      dark
      color="primary"
    >
      <v-spacer></v-spacer>
      <span><strong>Dia : {{ new Date().getDate() }}/{{ (new Date().getMonth())+1 }}</strong></span>
    </v-system-bar>
  </div>


    <v-app-bar
      app
      color="indigo"
      dark
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <toolbar />
    </v-app-bar>


    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>


    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <router-link style="text-decoration: none; color: inherit" to="/">
            <v-list-item active-class="blue--text text--">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link
            style="text-decoration: none; color: inherit"
            to="/grape"
          >
            <v-list-item active-class="deep-purple--text text--accent-4">
              <v-list-item-icon>
                <v-icon>mdi-fruit-grapes</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link
            style="text-decoration: none; color: inherit"
            to="/carrot"
          >
            <v-list-item active-class="amber--text text--darken-4">
              <v-list-item-icon>
                <v-icon>mdi-carrot</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link
            style="text-decoration: none; color: inherit"
            to="/apple"
          >
            <v-list-item active-class="red--text text--darken-1">
              <v-list-item-icon>
                <v-icon>mdi-food-apple</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </router-link>

          <router-link
            style="text-decoration: none; color: inherit"
            to="/leaf"
          >
            <v-list-item active-class="green--text text--">
              <v-list-item-icon>
                <v-icon>mdi-leaf</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-footer padless>
    <v-col
      class="text-center"
      cols="14"
    >
      {{ new Date().getFullYear() }} — <strong>V-Footer</strong>
    </v-col>
  </v-footer>


<v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
  >
    <v-btn>
      <span>Tv</span>

      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <span>Music</span>

      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>Image</span>

      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
  
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    Toolbar
  },

  data: () => ({ 
    value: 1,
    drawer: false,
    group: null,
    }),
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'green'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },

    watch: {  
      group () {
        this.drawer = false
      },
    },
};
</script>
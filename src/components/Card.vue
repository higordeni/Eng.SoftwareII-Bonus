<template>
  <v-card class="mx-auto my-12" max-width="374">

    <v-card-title>{{titulo}}</v-card-title>

    <v-row
        align="center"
        class="mx-0"
      >
    <v-card-text>
      <h3 :class='ct'>{{tipo}}</h3>
    </v-card-text>
    <v-card-text>
      <div>{{desc}}</div>
    </v-card-text>
    <v-card-text>
      <h4>{{acao}}</h4>
    </v-card-text>
    </v-row>

    <v-card-actions>
      <v-btn
        text
      >
        {{at1}}
      </v-btn>
      <v-btn
        text
      >
        {{at2}}
      </v-btn>
      <v-btn
        text
      >
        {{at3}}
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: "Card",

  props: ['titulo', 'acao', 'tipo', 'desc', 'at1', 'at2', 'at3', 'ct'],

  data(){},

};
</script>
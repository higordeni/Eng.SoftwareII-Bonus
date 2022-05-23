import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    title: ['Bulbasaur', 'Charmander ', 'Squirtle', 'Pikachu'],
    tipo: ['Planta', 'Fogo', 'Agua', 'Eletrico'],
    desc: ['Sapo com broto', 'Largatixa de fogo', 'Tartarua', 'Rato eletrico'],
    acao: 'Ações:',
    at1: ['Tackle', 'Scratch', 'Tackle', 'Quick Attack'],
    at2: ['Growl', 'Growl', 'Tail Whip', '	Growl'],
    at3: ['Leech Seed', 'Ember', 'Bubble', 'Thunder Wave'],
    ct: ['green--text', 'red--text', 'blue--text', 'yellow--text'],
    bit: null,
    date: null,
    bTitle: 'Bitcoin'
  },

  actions: {
    fetchBit({commit}) {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => {
          const payLoad = res.data.bpi;
          commit('Set_bit', payLoad);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    fetchDate({commit}){
      axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        const dateLoad = res.data.time.updated
        commit("Set_date", dateLoad)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },

  mutations: {
    Set_bit(state, payLoad) {
      state.bit = payLoad;
    },
    Set_date(state, dateLoad){
      state.date = dateLoad;
    }
  },

  getters: {
    bigTitle(state){
      return state.bTitle.toUpperCase()
    }
  }
})

export default store

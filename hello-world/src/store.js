import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    increase:0
  },
  mutations: {
    increment(state){
      state.increase++
    }
  },
  actions: {

  },
  plugins:['createPersistedState']
})

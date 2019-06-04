import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    increase:0,
    
    
  },
  //点击 改变increase的状态
  mutations: {
    increment(state){
      state.increase++   
    }
  },
 

  plugins:[createPersistedState({})]
})

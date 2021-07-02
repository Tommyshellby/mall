import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
import moduleA from './modules/moduleA.js'

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations,
  getters,
  actions,
  modules:{
    a:moduleA
  }
})

export default store

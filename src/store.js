import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      showModalLogin: false,
  },
  getters: {
      modaLogin: (state) => state.showModalLogin,
  },
  mutations: {
      setModalLogin(state, value)
      {
          state.showModalLogin = value;
      },
  },
  actions: {

  }
})

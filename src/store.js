import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0, 
    webcolor:"",
  },
  mutations: {
      setCount: (state, count) => state.count = count,
      setWebcolor: (state, webcolor) => state.webcolor = webcolor,
  },
  getters: {
      getCount: (state) =>
      {
          return state.count
      },
      getWebcolor: (state) =>
      {
          return state.webcolor
      }
  }
})
export default store;
import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import search from './modules/search'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    products,
    search
  }
})

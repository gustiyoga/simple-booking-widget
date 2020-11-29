export default {
  state: {
    products: []
  },
  actions: {
    setProducts({ commit }, products) {
      commit('SET_PRODUCTS', products)
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  }
}

export default {
  state: {
    products: [],
    selectedProduct: {}
  },
  actions: {
    setProducts({ commit }, products) {
      commit('SET_PRODUCTS', products)
    },
    setSelectedProduct({ commit }, selectedProduct) {
      commit('SET_SELECTED_PRODUCT_', selectedProduct)
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_SELECTED_PRODUCT_(state, selectedProduct) {
      state.selectedProduct = selectedProduct
    }
  }
}

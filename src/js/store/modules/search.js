export default {
  state: {
    querySearch: '',
    isSearching: false
  },
  actions: {
    querySearch({ commit }, querySearch) {
      commit('SET_QUERY_SEARCH', querySearch)
    },
    setIsSearching({ commit }, isSearching) {
      commit('SET_IS_SEARCHING', isSearching)
    }
  },
  mutations: {
    SET_QUERY_SEARCH(state, querySearch) {
      state.querySearch = querySearch
    },
    SET_IS_SEARCHING(state, isSearching) {
      state.isSearching = isSearching
    }
  }
}

<template>
  <div class="search-wrapper">
    <h2>Simple Booking Widget</h2>
    <label for="search">Search</label>
    <input
      id="search"
      v-model="querySearch"
      type="text"
      placeholder="Enter keywords"
      @keyup="doAutoSearch()"
      @keyup.enter="doSearch()"
    >
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script>
import { mapState } from 'vuex'
import { searchProduct } from 'services/search'
import { debounce } from 'utils/debounce'

export default {
  name: 'SearchBox',
  data() {
    return {
      querySearch: '',
      errorMessage: ''
    }
  },
  computed: {
    ...mapState({
      isSearching: state => state.search.isSearching
    })
  },
  methods: {
    doSearch() {
      if (!this.isSearching) {
        this.errorMessage = ''
        this.$store.dispatch('setIsSearching', true)
        this.$store.dispatch('querySearch', this.querySearch)

        searchProduct({
          q: this.querySearch,
          lat: 0,
          lng: 0
        })
          .then(res => {
            if (res.status === 200) {
              this.$store.dispatch('setProducts', res.data)
            } else {
              this.errorMessage = res.data
              this.$store.dispatch('setProducts', [])
            }

            this.$store.dispatch('setIsSearching', false)
          })
      }
    },
    doAutoSearch: debounce(function() {
      this.doSearch()
    }, 500)
  }
}
</script>

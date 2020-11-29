<template>
  <div class="search-result">
    <div
      v-if="!isProductEmpty && !isSearching"
      class="product-list"
    >
      <product-item
        v-for="product in products"
        :key="product.Id"
        :product-name="product.Name"
        :product-image="product.ImageUrl"
        :product-short-description="product.ShortDescription"
      />
    </div>

    <empty-state
      v-if="isProductEmpty || isSearching"
      :state="isProductEmpty ? EMPTY : LOADING"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script>
import { mapState } from 'vuex'
import ProductItem from 'components/ProductItem/index.vue'
import EmptyState from 'components/EmptyState/index.vue'
import { LOADING, EMPTY } from 'constants/general'

export default {
  name: 'SearchResult',
  components: {
    ProductItem,
    EmptyState
  },
  data() {
    return {
      emptyState: EMPTY
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      isProductEmpty: state => state.search.querySearch !== '' && state.products.products.length === 0 && !state.search.isSearching,
      isSearching: state => state.search.querySearch !== '' && state.search.isSearching
    })
  },
  created() {
    this.LOADING = LOADING
    this.EMPTY = EMPTY
  },
  methods: {

  }
}
</script>

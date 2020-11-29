<template>
  <div class="main">
    <div class="title">
      <h2>Simple Booking Widget</h2>
      <search-box v-if="isShowSearch" />
    </div>
    <div class="body">
      <search-result v-if="isShowSearch" />
      <availability-check v-if="!isShowSearch" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script>
import { mapState } from 'vuex'
import SearchBox from './SearchBox/index.vue'
import SearchResult from './SearchResult/index.vue'
import AvailabilityCheck from './AvailabilityCheck/index.vue'

export default {
  name: 'MainApp',
  components: {
    SearchBox,
    SearchResult,
    AvailabilityCheck
  },
  computed: {
    ...mapState({
      isShowSearch: state => Object.keys(state.products.selectedProduct).length === 0 && state.products.selectedProduct.constructor === Object
    })
  }
}
</script>

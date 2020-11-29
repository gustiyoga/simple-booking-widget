<template>
  <div class="availability-check">
    <product-item
      :is-show-book-button="false"
      :product="selectedProduct"
      :product-name="selectedProduct.Name"
      :product-image="selectedProduct.ImageUrl"
      :product-location="selectedProduct.FormattedAddressName"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
import { mapState } from 'vuex'
import ProductItem from 'components/ProductItem/index.vue'

export default {
  name: 'AvailabilityCheck',
  components: {
    ProductItem
  },
  computed: {
    ...mapState({
      selectedProduct: state => state.products.selectedProduct
    })
  }
}
</script>

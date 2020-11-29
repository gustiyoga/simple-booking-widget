<template>
  <div class="product-item">
    <div class="product-image">
      <img
        v-if="!!productImage"
        :src="`${ASSET_PRODUCT_HOST}/${productImage}`"
        alt=""
      >
      <img
        v-if="!productImage"
        src="https://res.cloudinary.com/dcuolscq3/image/upload/v1606662650/product-image-placeholder.svg"
      >
    </div>
    <div class="product-body">
      <h4>{{ productName }}</h4>
      <p><img src="https://res.cloudinary.com/dcuolscq3/image/upload/v1606662649/ic-location.svg"> <span>{{ productLocation }}</span></p>
      <button
        v-if="isShowBookButton"
        class="button-primary"
        title="book"
        type="button"
        @click="doBook(product)"
      >
        Book
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script>
import { ASSET_PRODUCT_HOST } from 'constants/api'

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
    productName: {
      type: String,
      default: ''
    },
    productImage: {
      type: String,
      default: ''
    },
    productLocation: {
      type: String,
      default: ''
    },
    isShowBookButton: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.ASSET_PRODUCT_HOST = ASSET_PRODUCT_HOST
  },
  methods: {
    doBook(product) {
      this.$store.dispatch('setSelectedProduct', product)
    }
  }
}
</script>

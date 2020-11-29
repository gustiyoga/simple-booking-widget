<template>
  <div class="product-item">
    <img
      :src="`${ASSET_HOST}/${productImage}`"
      alt=""
    >
    <h4>{{ productName }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script>
import { ASSET_HOST } from 'constants/api'

export default {
  name: 'ProductItem',
  props: {
    productName: {
      type: String,
      default: ''
    },
    productImage: {
      type: String,
      default: ''
    },
    productShortDescription: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  created() {
    this.ASSET_HOST = ASSET_HOST
  },
  methods: {

  }
}
</script>

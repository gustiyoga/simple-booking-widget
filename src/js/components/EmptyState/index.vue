<template>
  <div class="empty-state">
    <div v-if="state === LOADING">
      <img
        :src="`${ASSET_IMAGE_HOST}/v1606662649/loading.svg`"
        alt=""
      >
      <p>Loading...</p>
    </div>

    <div v-else-if="state === EMPTY">
      <img
        :src="`${ASSET_IMAGE_HOST}/v1606662650/empty-state.svg`"
        alt=""
      >
      <p>No result, please try another keywords</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script>
import { ASSET_IMAGE_HOST, LOADING, EMPTY } from 'constants/general'

export default {
  name: 'EmptyState',
  props: {
    state: {
      type: String,
      default: EMPTY
    }
  },
  created() {
    this.ASSET_IMAGE_HOST = ASSET_IMAGE_HOST
    this.LOADING = LOADING
    this.EMPTY = EMPTY
  }
}
</script>

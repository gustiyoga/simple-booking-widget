<template>
  <div class="main">
    <search-box />
    <search-result />
  </div>
</template>

<style scoped>
  .main {
    background-color: #FFF;
    border: 1px #eaeaea solid;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: 15px;
  }
</style>

<script>
import SearchBox from './SearchBox/index.vue'
import SearchResult from './SearchResult/index.vue'

export default {
  components: {
    SearchBox,
    SearchResult
  }
}
</script>

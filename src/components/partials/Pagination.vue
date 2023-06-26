<script>
export default {
  name: 'Pagination',

  props:{
    links: Array,
    current_page: Number,
  },
}
</script>

<template>
  <div class="pg-btn-container w-100 d-flex justify-content-center">
    <button class="btn btn-primary me-2" v-for="(link, index) in links" :key="index" v-html="link.label" @click="$emit('callApi', link.url)" :class="{'disabled' : index == current_page || link.url == null}"></button>
  </div>
</template>

<style lang="scss" scoped>

</style>
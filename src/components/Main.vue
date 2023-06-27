<script>
import Header from './partials/Header.vue'

export default {
  name: 'Main',

  components: {
    Header
  }
}
</script>

<template>
  <Header/>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    height: calc(100vh - 70px);
    background-color: lighten($color: #000000, $amount: 15%);
    color: white;
    .container{
      padding: 3.5rem 0;
    }
  }
</style>
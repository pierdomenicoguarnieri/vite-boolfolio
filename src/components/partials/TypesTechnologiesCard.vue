<script>
export default {
  name: 'TypesTechnologiesCard',
  
  props:{
    name: String,
    id: Number
  }
}
</script>

<template>
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">{{ name }}</h5>

        <div class="card-text">
          <span><span class="fw-bold">ID:</span> {{ id }}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
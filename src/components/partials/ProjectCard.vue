<script>
export default {
  name: 'ProjectCard',

  props:{
    title: String,
    type: String,
    technologies: Array,
    finished: Boolean
  }
}
</script>

<template>
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">{{title}}</h5>
        <div class="card-subtitle mb-2 text-body-secondary">
          <span class="badge text-bg-primary">{{ type }}</span>
        </div>

        <div>
          <span>Tecnologie: </span>
          <span v-for="technology in technologies" :key="technology.id" class="badge text-bg-warning me-2">{{ technology.name }}</span>
          <span class="badge text-bg-danger me-2" v-if="!technologies.length">No technologies</span>
        </div>
        <p class="card-text">Finished: <i class="fa-solid fa-check text-success" v-show="finished"></i>
            <i class="fa-solid fa-x text-danger" v-show="!finished"></i></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
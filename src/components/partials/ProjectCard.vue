<script>
export default {
  name: 'ProjectCard',

  props:{
    project: Object
  }
}
</script>

<template>
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">{{ project.title }}</h5>
        <div class="card-subtitle mb-2 text-body-secondary">
          <span class="badge text-bg-primary">{{ project.type.name }}</span>
        </div>

        <div class="card-text">
          <span>Tecnologie: </span>
          <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-warning me-2">{{ technology.name }}</span>
          <span class="badge text-bg-danger me-2" v-if="!project.technologies.length">No technologies</span>
        </div>

        <div class="card-text">
          <span class="card-text me-2">Finished:</span>
          <i class="fa-solid fa-check text-success" v-show="project.finished"></i>
          <i class="fa-solid fa-x text-danger" v-show="!project.finished"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  box-shadow: 0 0 20px rgba($color: white, $alpha: 0.2);
}
</style>
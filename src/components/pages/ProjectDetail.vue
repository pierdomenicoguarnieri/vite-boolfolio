<script>
import axios from 'axios';
import { store } from '../../data/store';
import Loader from '../partials/Loader.vue';

export default {
  name: 'ProjectDetail',
  
  components:{
    Loader
  },

  data(){
    return{
      project: [],
      loaded: false
    }
  },

  methods:{
    getApiDetails(){
      this.loaded = false;
      axios.get(store.apiUrl + this.$route.params.slug).then(results => {
        this.project = results.data;
        this.loaded = true;
      })
    },
  },

  mounted(){
    this.getApiDetails()
  }
}
</script>

<template>
  <Loader v-if="!loaded"/>
  <div class="pg-card-wrapper w-100 d-flex justify-content-center" v-else>
    <div class="card w-75">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <div class="card-text my-2">
          <span class="fw-bold me-2">Tipo:</span>
          <span class="badge text-bg-primary">{{ project.type.name }}</span>
        </div>

        <div class="card-text my-2">
          <span class="fw-bold">Tecnologie: </span>
          <span class="badge text-bg-danger me-2" v-if="!project.technologies.length">No technologies</span>
          <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-warning me-2" v-else>{{ technology.name }}</span>
        </div>

        <div class="card-text my-2">
          <span class="card-text me-2 fw-bold">Finished:</span>
          <i class="fa-solid fa-check text-success" v-show="project.finished"></i>
          <i class="fa-solid fa-x text-danger" v-show="!project.finished"></i>
        </div>

        <p class="card-text"><span class="fw-bold">Descrizione:</span> {{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
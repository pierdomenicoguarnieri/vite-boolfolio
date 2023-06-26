<script>
import ProjectCard from './partials/ProjectCard.vue';
import axios from 'axios';
import {store} from '../data/store';

export default {
  name: 'Main',

  components: {
    ProjectCard
  },

  data(){
    return{
      store,
      projects: null,
    }
  },

  methods:{
    getApi(endpoint){
      axios.get(endpoint).then(results => {
        this.projects = results.data.data;
        console.log(this.projects);
      })
    }
  },

  mounted(){
    this.getApi(store.apiUrl)
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Main</h1>
      <div class="row row-cols-5 py-3">
        <ProjectCard v-for="project in projects" :key="project.id" :title="project.title" :type="project.type.name" :technologies="project.technologies" :finished="project.finished"/>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  main{
    height: 100vh;
    background-color: lighten($color: #000000, $amount: 15%);
    color: white;
    .container{
      padding: 3.5rem 0;
    }
  }
</style>
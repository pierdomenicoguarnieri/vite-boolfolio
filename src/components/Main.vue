<script>
import ProjectCard from './partials/ProjectCard.vue';
import Pagination from './partials/Pagination.vue';
import axios from 'axios';
import {store} from '../data/store';

export default {
  name: 'Main',

  components: {
    ProjectCard,
    Pagination
  },

  data(){
    return{
      store,
      projects: [],
      results: []
    }
  },

  methods:{
    getApi(endpoint){
      axios.get(endpoint).then(results => {
        this.projects = results.data.data;
        this.results = results.data;
        console.log(this.projects);
        console.log(results.data);
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
      <h1>Lista dei progetti</h1>
      <div class="row row-cols-5 py-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :type="project.type.name"
          :technologies="project.technologies"
          :finished="project.finished"/>
        </div>
        <Pagination
          :links="results.links"
          :current_page="results.current_page"
          @callApi="(url) => getApi(url)" />
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
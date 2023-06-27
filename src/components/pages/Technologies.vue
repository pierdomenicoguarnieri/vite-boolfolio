<script>
import TypesTechnologiesCard from '../partials/TypesTechnologiesCard.vue';
import axios from 'axios';
import {store} from '../../data/store';

export default {
  name: 'types',
  
  components:{
    TypesTechnologiesCard
  },

  data(){
    return{
      store,
      technologies: []
    }
  },

  methods:{
    getApi(endpoint){
      axios.get(endpoint).then(results => {
        this.technologies = results.data;
      })
    }
  },

  mounted(){
    this.getApi(store.apiUrlTechnologies)
  }
}
</script>

<template>
  <h1>Lista delle tecnologie</h1>
  <div class="row row-cols-5 py-3">
    <TypesTechnologiesCard v-for="tehcnology in technologies" :key="tehcnology.id" :name="tehcnology.name" :id="tehcnology.id"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
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
      types: []
    }
  },

  methods:{
    getApi(endpoint){
      axios.get(endpoint).then(results => {
        this.types = results.data;
        console.log(this.types);
      })
    }
  },

  mounted(){
    this.getApi(store.apiUrlTypes)
  }
}
</script>

<template>
  <h1>Lista dei tipi</h1>
  <div class="row row-cols-5 py-3">
    <TypesTechnologiesCard v-for="type in types" :key="type.id" :name="type.name" :id="type.id"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
<script>
import axios from 'axios';
import {store} from '../../data/store';

export default {
  name: 'Contacts',

  data(){
    return{
      title: '',
      email: '',
      message: '',
      errors: {},
      sending: false,
      success: false
    }
  },

  methods:{
    sendForm(){
      this.sending = true;
      const data = {
        title: this.title,
        email: this.email,
        message: this.message
      }
      axios.post(store.apiUrlPost + '/contact/', data).then(result => {
        this.success = result.data.success;
        if(!result.data.success){
          this.errors = result.data.errors;
        }
        this.sending = false;
      })
    }
  }
}
</script>

<template>
  <h1>Contatti</h1>


  <div class="pg-form-wrapper bg-white text-black rounded-2 p-2 border border-dark-subtle border-1">
    <h2 class="text-success py-5" v-if="success">Form inviato correttamente</h2>
    <form @submit.prevent="sendForm()" v-else>
      <div class="mb-3">
        <label for="title" class="form-label">Titolo</label>
        <input type="text" name="title" class="form-control" :class="{'is-invalid' : errors.title, 'is-valid' : !errors.title && title != ''}" placeholder="Example" v-model.trim="title">
        <span class="text-danger ms-1" v-for="(error, index) in errors.title" :key="index">{{ error }}</span>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Indirizzo Email</label>
        <input type="email" class="form-control" :class="{'is-invalid' : errors.email, 'is-valid' : !errors.email && email != ''}" name="email" placeholder="example@email.it" v-model.trim="email">
        <span class="text-danger ms-1" v-for="(error, index) in errors.email" :key="index">{{ error }}</span>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <textarea type="password" name="message" class="form-control" :class="{'is-invalid' : errors.message, 'is-valid' : !errors.message && message != ''}" placeholder="Messaggio" cols="10" rows="10" v-model.trim="message"></textarea>
        <span class="text-danger ms-1" v-for="(error, index) in errors.message" :key="index">{{ error }}</span>
      </div>
      <button type="submit" class="btn btn-success" :disabled="sending">{{sending ? 'Invio in corso...' : 'Invia'}}</button>
    </form>
  </div>


</template>

<style lang="scss" scoped>
  .pg-form-wrapper{
    box-shadow: 0 0 20px rgba($color: white, $alpha: 0.2);
  }
</style>
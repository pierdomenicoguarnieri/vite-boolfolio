import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue';
import Types from './components/pages/Types.vue';
import Technologies from './components/pages/Technologies.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/tipi',
      name: 'types',
      component: Types
    },
    {
      path: '/tecnologie',
      name: 'technologies',
      component: Technologies
    }
  ]
})

export {router}
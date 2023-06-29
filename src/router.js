import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue';
import Types from './components/pages/Types.vue';
import Technologies from './components/pages/Technologies.vue';
import Contacts from './components/pages/Contacts.vue';
import ProjectDetail from './components/pages/ProjectDetail.vue';
import Error404 from './components/pages/Error404.vue';

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
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/progetti/:slug',
      name: 'details',
      component: ProjectDetail
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    }
  ]
})

export {router}
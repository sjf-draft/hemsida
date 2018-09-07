import Vue from 'vue'
import Router from 'vue-router'

import About from './About';
import Grant from './Grant';
import Contact from './Contact';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/bidrag',
      name: 'Bidrag',
      component: Grant
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Contact
    }
  ]
})

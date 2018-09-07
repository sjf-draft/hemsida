// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill();

import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import AsyncComputed from 'vue-async-computed';

Vue.use(StoryblokVue)
Vue.use(AsyncComputed);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

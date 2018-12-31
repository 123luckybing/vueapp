// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 引入fastclick
import './assets/reset.css'
import './assets/rem.js'
import './assets/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body) // 把fastclick绑定到document.body上面

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

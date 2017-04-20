// main.js
var Vue = require('vue')
var VueMaterial = require('vue-material')
var App = require('./app.vue')
Vue.use(VueMaterial) 

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)
  }
})
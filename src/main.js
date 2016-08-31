import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
var vm = new Vue({
  el: 'body',
  components: { App }
})



/*vm.$watch('items',function (newVal,oldVal) {
    Store.fetch(oldVal)
},{deep:true})

vm.$watch('items',function (newVal,oldVal) {
    Store.save(newVal)
},{deep:true})*/
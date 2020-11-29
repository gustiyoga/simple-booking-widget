import Vue from 'vue'
import App from './components/App.vue'
import '../scss/style.scss'
import { store } from './store'

// eslint-disable-next-line no-new
new Vue({
  el: '#simple-booking-widget',
  render: h => h(App),
  store
})

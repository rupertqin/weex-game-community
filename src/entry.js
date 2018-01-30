// entry for web


import App from './App.vue';
import router from './router'
import store from './store'
import mixins from './mixins'

Vue.mixin(mixins)

new Vue(Vue.util.extend({ el: '#root', router, store }, App))
router.push('/news')

import Router from 'vue-router'
import ViewHome from './assets/views/home.vue'
import ViewNews from './assets/views/news.vue'
import ViewNewsDetails from './assets/views/news_details.vue'
import ViewMy from './assets/views/my.vue'
import View404 from './assets/views/404.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ViewHome },
    { path: '/news', component: ViewNews },
    { path: '/news/:id', component: ViewNewsDetails },
    { path: '/my', component: ViewMy },
    { path: '*', component: View404 }
  ]
})

import Router from 'vue-router'
import ViewHome from './pages/home.vue'
import ViewNews from './pages/news.vue'
import ViewNewsDetails from './pages/news_details.vue'
import ViewMy from './pages/my.vue'
import View404 from './pages/404.vue'

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

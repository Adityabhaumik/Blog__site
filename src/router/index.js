import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StoryPage from '../views/StoryPage.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/storypage',
    name: 'StoryPage',
    component:StoryPage,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

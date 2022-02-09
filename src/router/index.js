import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'
import Navbar from '../components/Navbar.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/navbar',
    name: 'Navbar',
   component: Navbar
  },
  {
    path: '/about',
    name: 'About',
   component: About
  },
  {
    path: '/projects',
    name: 'Projects',
   component: Projects
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
   component: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
   component: Contact
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

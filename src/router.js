import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from './components/Home.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: () => import('./components/Servicios.vue')
    },
    {
      path: '/clasificados',
      name: 'Clasificados',
      component: () => import('./components/Clasificados.vue')
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('./components/Contacto.vue')
    },
  ]
})
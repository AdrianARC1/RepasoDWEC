import { createRouter, createWebHistory } from 'vue-router'
import VistaInicio from '../views/VistaInicio.vue'
import VistaAgregar from '../views/VistaAgregar.vue'
import VistaRecomendaciones from '../views/VistaRecomendaciones.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: VistaInicio
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: VistaAgregar
  },
  {
    path: '/recomendaciones',
    name: 'recomendaciones',
    component: VistaRecomendaciones
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

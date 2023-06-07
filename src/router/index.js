import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page404View from '../views/Page404View.vue'
import GallerieGraphView from '../views/GallerieGraphView.vue'
import GallerieTattooView from '../views/GallerieTattooView.vue'
import ContactView from '../views/ContactView.vue'

import ArtisteView from '../views/ArtisteView.vue'
import SalonView from '../views/SalonView.vue'
import FAQView from '../views/FAQView.vue'
import PolitiquesView from '../views/PolitiquesView.vue'
import contratView from '../views/contratView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/GallerieGraph',
      name: 'Gallerie Graph',
      component: GallerieGraphView
    },
    {
      path: '/Salon',
      name: 'Salon',
      component: SalonView
    },
    {
      path: '/Artiste',
      name: 'Artiste',
      component: ArtisteView
    },
    {
      path: '/GallerieTattoo',
      name: 'Gallerie Tattoo',
      component: GallerieTattooView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView
    },

    {
      path: '/Politiques',
      name: 'Politiques',
      component: PolitiquesView
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQView
    },
    {
      path: '/contrat',
      name: 'contrat',
      component: contratView
    },

    { path: "/:catchAll(.*)", name: "Page404View", component: Page404View },
  ]
})

export default router


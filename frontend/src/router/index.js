import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/benefits',
      name: 'benefits',
      component: () => import('../views/Benefits.vue')
    },
    {
      path: '/cta',
      name: 'cta',
      component: () => import('../views/CTA.vue')
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('../views/Plans.vue')
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('../views/Testimonials.vue')
    },
    {
      path: '/socialproof',
      name: 'socialproof',
      component: () => import('../views/SocialProof.vue')
    }

  
  ]
})

export default router

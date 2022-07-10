import HomeComponent from '@/components/TheHome.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import OrganizationsComponent from '@/components/TheOrganizations.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main ',
      component: HomeView,

      children: [
        {
          path: '/home',
          name: 'home ',
          component: HomeComponent,
        },
        {
          path: '/organizations',
          name: 'organizations ',
          component: OrganizationsComponent,
        },

      ]
    },

    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: "/skele",
      name: 'skele',
      component: SkeletonLoader
    }
  ]
})

export default router

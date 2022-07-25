import HomeComponent from '@/components/Home/TheHome.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import OrganizationsComponent from '@/components/Organizations/TheOrganizations.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import BrincarVue from '@/views/brincar.vue';
import TheContactProcessVue from '@/components/ContactProcesses/TheContactProcess.vue';
import TheOpportunitiesVue from '@/components/Opportunities/TheOpportunities.vue';
import TheCustomerOutlineVue from '@/components/Customer Outline/TheCustomerOutline.vue';
import TheCalculationsVue from '@/components/Calculations/TheCalculations.vue';
import TheDashboardVue from '@/components/Dashboard/TheDashboard.vue';
import TheDropdownVue from '@/components/Dropdown/TheDropdown.vue';


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

    {
     path: '/contactProcesses',
     name: 'contactProcesses',
     component: TheContactProcessVue,
    },
    {
     path: '/opportunities',
     name: 'opportunities',
     component: TheOpportunitiesVue,
    },
    {
     path: '/customerOutline',
     name: 'customerOutline',
     component: TheCustomerOutlineVue,
    },
    {
     path: '/calculations',
     name: 'calculations',
     component: TheCalculationsVue,
    },
    {
     path: '/dashboard',
     name: 'dashboard',
     component: TheDashboardVue,
    },
    {
     path: '/dropdown',
     name: 'dropdown',
     component: TheDropdownVue,
    },

    //In case we need to create more routes
    // {
    //  path: '/',
    //  name: ' ',
    //  component:,
    // },

   ]
  },

  {
   path: '/login',
   name: '/login',
   component: LoginView
  },
  {
   path: "/skele",
   name: 'skele',
   component: SkeletonLoader
  },
  {
   path: "/brincar",
   name: 'brincar',
   component: BrincarVue
  },
 ]
})

export default router

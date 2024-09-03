import Dashboard from '@/Pages/Dashboard.vue'
import {createRouter,createWebHistory} from 'vue-router'
import StaffManagement from '@/Pages/StaffManagement.vue';

const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"DashBoard",
      component:Dashboard
    },
    {
      path:"/Staff-Management",
      name:"StaffM",
      component:StaffManagement
    }
  ]
})

export default router;
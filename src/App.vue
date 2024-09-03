<script setup>
import DashboardVue from "./Pages/Dashboard.vue";
import SideBar from './components/SideBar.vue'


</script>

<template>
  <div class="">
    <div class=" bg-primary   flex ">
    <!-- <DashboardVue/> -->
     <SideBar/>
  
      <RouterView />
        
  
  </div>
  </div>
 


</template>

<style scoped>

</style>

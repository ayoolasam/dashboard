<script setup>
import DashboardVue from "./Pages/Dashboard.vue";
import SideBar from './components/SideBar.vue'


</script>

<template>
  <div class=" bg-primary  w-[100%] h-screen flex ">
    <!-- <DashboardVue/> -->
     <SideBar/>
     <RouterView />
  
  </div>


</template>

<style scoped>

</style>

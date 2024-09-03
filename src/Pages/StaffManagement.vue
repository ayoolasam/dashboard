<template>
  <Dashboard>
    <nav class="w-full   py-4 px-[10px] flex items-center justify-between  border-bColor border-b-[2px]">
      <h2 class=" font-bold text-primary text-2xl">Staff Management</h2>
    <div class="flex gap-2 mr-[20px] active:border-4 py-[5px] border-secondary active:rounded-md">
      <div class="w-[50px] h-[50px]">
        <img src="../assets/default_avatar.jpg" alt="profile"/>
      </div>
      <div class="">
        <p class="font-bold text-primary">Ade Adewale</p>
        <p class="text-secondary">Admin</p>
      </div>
      <div class="logo flex items-center ml-[10px] justify-center">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
    </nav>


<div class="flex gap-4 px-[10px] pt-4 border-bColor py-4 border-b-[1px]">
  <span @click="ChangeTab(EmployeeInfo)" class="cursor-pointer active:text-secondary">Employee Information</span>
  <span @click="ChangeTab(Documents)" :class="{'text-secondary border-secondary  border-b-4' : CurrentTab === Documents  ,'cursor-pointer h-full':true }" >Documents</span>
</div>




<component class="py-4 px-4  " :is="CurrentTab">

</component>

  </Dashboard>
</template>

<script setup>
import Dashboard from './Dashboard.vue';
import {ref} from'vue'
import EmployeeInfo from '../components/EmployeeInfo.vue'
import Documents from '../components/Documents.vue'

const CurrentTab = ref(EmployeeInfo)



const ChangeTab = (tab)=>{
CurrentTab.value = tab
}
</script>

<style scoped>
@media (max-width: 486px) {
  nav{
    display: flex;
    flex-direction: column;
    gap:10px;
  }
}
</style>
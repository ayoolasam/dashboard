<template>
  <div class=" dashboard    w-screen ">
<div class="bg-tertiary pb-12 h-full   slot rounded-tl-3xl">
 <slot>

 </slot>
</div>






  </div>
</template>

<script setup>

</script>

<style scoped>
@media (max-width: 780px) {
  .dashboard{
    padding-top: 0;
    width: 100%;
    

  }
  .slot{
    border-top-left-radius: 0px;
    /* width:100%; */
  }
}
@media (max-width: 734px) {
  .dashboard{
    width:100%;
    
  }
}
</style>
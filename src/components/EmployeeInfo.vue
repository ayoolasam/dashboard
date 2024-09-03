<template>
  <div class="flex employeeInfo     w-full px-12 py-[20px]  gap-[5px]">
<div class="left w-[40%] flex flex-col gap-4">
  <div class=" top rounded-lg w-full  py-4 px-4 flex flex-col gap-6 border-bColor border-[1.5px]">
    
     
    
    <div class="add  flex gap-4 items-center justify-start ">
      <img src="../assets/default_avatar.jpg" class="w-[90px] h-[90px]" alt="profile"/>
      <div class="flex flex-col">
        <h1 class="font-bold text text-xl">Name Here</h1>
        <span class="text-bColor">Role Here</span>
      </div>
    
    </div>
    <div class="">
      <button class="bg-secondary w-full rounded-2xl butt text-white py-4">Add Profile Picture</button>
    </div>
   
  </div>
  <div class="bottom bg-tertiary rounded-lg p-[8px] border-bColor border-[1.5px]">
    <h1 class="font-bold text-xl">Education History</h1>
    <form class="flex flex-col gap-4">
      <div class="control mt-[20px]">
        <label class="block text-[13px] font-semibold">School Name</label>
        <input type="text" class="bg-input w-full  rounded-md  px-4 focus:outline-none py-[4px]" placeholder="Name Here"/>
      </div>
      <div class="control">
        <label class="block text-[13px] font-semibold">Certification</label>
        <input type="text" class="bg-input w-full  rounded-md  px-4 focus:outline-none py-[4px]" placeholder="Select A Certification"/>
      </div>
      <div class="">
      <button class="bg-tertiary border-bColor border-[1.5px] w-full rounded-2xl text-black py-4">Add New History</button>
    </div>
    </form>
  </div>
</div>



<div class="right w-full rounded-lg  p-4">
  <h1 class="font-bold text-xl">Employment Documents</h1>
  
    <div class="top flex w-full gap-12 mt-[20px] ">


<div class="left px-20 py-4 border-[1.5px] border-bColor flex flex-col gap-4 rounded-t-lg rounded-b-md">
<div class="flex gap-[5px] p-4 border-[1.5px] rounded-lg border-bColor">
  <div class="icon bg-secondary h-[30px] w-[30px] rounded-full flex items-center justify-center">
    <i class="fa-regular fa-file"></i>
  </div>
  <div class="writings">
    <p class="font-bold"> Document.pdf</p>
    <p>200kb</p>
   </div>
</div>
<div class="w-full">
  <button class="bg-tertiary border-bColor font-bold border-[1.5px] w-full rounded-2xl text-black py-[2px]">Delete</button>
</div>

</div>



<div class="right border-bColor border-[1.5px] px-32 flex flex-col  items-center justify-center rounded-lg">
<div class="border-bColor border-[1.5px] flex flex-col gap-2 contain p-4 rounded-lg">
  <div class="img flex items-center justify-center">
    <i class="fa-solid fa-cloud-arrow-down"></i>
  </div>
  <div class="writings"><span class="text-secondary font-bold">Click to Upload</span> or drag and Drop
  <p>
PDF,Docx or word
  </p>
</div>
</div>
</div>



  </div>

 
  <div class="bottom w-full  flex mt-[20px] gap-8 py-4">
    <div class="right border-bColor border-[1.5px] px-24 flex flex-col py-4 items-center justify-center rounded-lg">
<div class="border-bColor border-[1.5px] flex flex-col gap-2 p-4 rounded-lg">
  <div class="img flex items-center justify-center">
    <i class="fa-solid fa-cloud-arrow-down"></i>
  </div>
  <div class="writings"><span class="text-secondary font-bold">Click to Upload</span> or drag and Drop
  <p>
PDF,Docx or word
  </p>
</div>
</div>
</div>

<div class="right border-bColor border-[1.5px] px-24 flex flex-col  items-center justify-center rounded-lg">
<div class="border-bColor border-[1.5px] flex flex-col gap-2 p-4 rounded-lg">
  <div class="img flex items-center justify-center">
    <i class="fa-solid fa-cloud-arrow-down"></i>
  </div>
  <div class="writings"><span class="text-secondary font-bold">Click to Upload</span> or drag and Drop
  <p>
PDF,Docx or word
  </p>
</div>
</div>
</div>
  </div>
</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@media (max-width: 1433px) {
  .right{
    padding-top:10px ;
    padding-bottom: 10px;
  }
}
@media (max-width: 1364px) {
  .contain{
   padding: 20px;
  
  }
  .right{
    padding:20px;
 
  }
}
@media (max-width: 989px) {
 .right{
 display: flex;
 flex-direction: column;
 }
 .top{
  display: flex;
  flex-direction: column;
 }
}
@media (max-width: 871px) {
.add{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right{
  align-items: center;
}
}

@media (max-width: 805px) {
  .employeeInfo{
    width:100%;
  }
}

@media (max-width: 1022px) {
.text{
  font-size: 20px;
}
.add{
  display: flex;
  flex-direction: column;
  align-content: center;
}
.right{
  align-items: center;
}
}
@media (max-width: 1020px) {

 .top{
 /* padding:10px */
 }
 .left{
  padding:10px;
 }
}

@media (max-width: 724px) {

.butt{
  font-size: 15px;
  padding-left: 4px;
  padding-right: 4px;

}
}
@media (max-width: 550px) {

.employeeInfo{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.left{
  width:100%;
}
}
@media (max-width: 428px) {
.bottom{
  display: flex;
  flex-direction: column;
}
}
</style>
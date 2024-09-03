<template>
  <div
    class="text-white  px-4 w-[18%] flex flex-col justify-around box items-center"
  >
    <div class="image">
      <img
        src="../assets/logo-white.png"
        alt="logo"
        class="bg-primary h-[50px] w-[100px]"
      />
    </div>
    <ul class="list w-full">
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md items-center text-[17px] justify-start flex gap-2"
      >
        <i class="fa-solid fa-house"></i>Dashboard
      </li>
      <router-link to="/Staff-Management">
        <li
          class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md  text-[17px] flex items-center justify-start gap-2"
        >
          <i class="fa-regular fa-user"></i>Staff Management
        </li>
      </router-link>

      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md  text-[17px]items-center justify-start flex gap-2"
      >
        <i class="fa-solid fa-chart-simple"></i>Staff Performance
      </li>
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px]  items-center justify-start flex gap-2"
      >
        <i class="fa-solid fa-chart-line"></i>Reports
      </li>
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px] items-center justify-start flex gap-2"
      >
        <i class="fa-regular fa-clock"></i>Time Management
      </li>
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px] items-center justify-start flex gap-2"
      >
        <i class="fa-regular fa-images"></i>Gallery Management
      </li>
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px] items-center justify-start flex gap-2"
      >
        <i class="fa-solid fa-plane-departure"></i>Leave Management
      </li>
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px] items-center justify-start flex gap-2"
      >
        <i class="fa-regular fa-clipboard"></i> OnBoarding
      </li>
      <li
        class="py-2.5 px-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px] items-center justify-start flex gap-2"
      >
        <i class="fa-regular fa-door-open"></i>Exit Management
      </li>
    </ul>
    <ul class="support w-full border-tertiary border-t-2">
      <li
        class="px-2 mt-[40px] py-2 hover:bg-tertiary hover:text-primary hover:rounded-md text-[17px] flex gap-2"
      >
        <i class="fa-solid fa-headphones"></i>Support
      </li>
      <li
        class="px-2 py-2 hover:bg-tertiary hover:text-primary hover:rounded-md  text-[17px] flex gap-2"
      >
        <i class="fa-solid fa-right-from-bracket"></i>Sign Out
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
@media (max-width: 1229px) {
  .image {
    width: 70px;
    height: 40px;
  }
  .box{
width:20%;
  }
}
@media (max-width: 805px) {
  .box{
    display: none;
  }
}
@media (max-width: 1335px) {
  .box{
    margin-top: 20px;
   
}
li{
  font-size: 15px;
}
}
@media (max-width: 1258px) {
  .box{
    margin-top: 20px;
   
}
li{
  font-size: 13px;
}
}
</style>

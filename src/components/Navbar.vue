<template>
  <nav class="bg-gray-700 flex  justify-between">
    <div id="image" class="flex">
      <img class="rounded-full h-16 w-16 p-1 mx-1 my-2 "  src="../assets/ninja.png" alt="">
      <h1 class="font-mono text-white text-4xl px-4 py-3 my-2 mx-2" >C2c</h1>
    </div >
    <div class="flex">
       <h1 @click="handelHome" class="text-white text-lg px-4 py-3 my-2 mx-2 hover:bg-white hover:text-black cursor-pointer rounded-b-2xl">Home</h1>
       <h1 @click="handelLogout" class="text-white text-lg px-4 py-3 my-2 mx-2 hover:bg-white hover:text-black cursor-pointer rounded-b-2xl" >Logout</h1>
    </div>
   
  </nav>
</template>

<script>

import {useRouter} from 'vue-router'

export default {
  setup() {

    const router = useRouter()

    const handelHome = () =>{
      console.log("Handel Home Clicked")
      router.push({name:'Home'})
    }

       const handelLogout = () =>{
       console.log("HandelLogout Clicked")
      router.push({name:'Welcome'})
    }


    return {handelHome,handelLogout};
  },
};
</script>


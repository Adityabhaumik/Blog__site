<template>
  <div class="max-w-2xl mx-5 my-5">
     <form @submit.prevent="handelSubmit">
      <input class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-black rounded text-sm shadow outline-none focus:placeholder-black focus:bg-white focus:shadow-outline w-full" type="email" required placeholder="Email" v-model="email">
      <input class="px-3 py-3 my-2 placeholder-gray-400 text-gray-700 relative bg-black rounded text-sm shadow outline-none focus:placeholder-black focus:bg-white focus:shadow-outline w-full" type="text" required placeholder="username" v-model="username">
      <input class="px-3 py-3 my-2 placeholder-gray-400 text-gray-700 relative bg-black rounded text-sm shadow outline-none focus:placeholder-black focus:bg-white focus:shadow-outline w-full" type="password" required placeholder="Password" v-model="password">
      <div class="error">{{error}} </div>
      <br>
        <button class="py-3 px-9 my-2 mx-2 bg-yellow-500 z-10 rounded-lg hover:bg-indigo-900 hover:text-white ">Sign up</button>
  </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const showLogin=ref(true)
        const email=ref('')
        const password=ref('')
        const username=ref('')
        return {showLogin,email,password,username}

    }
   
}
</script>
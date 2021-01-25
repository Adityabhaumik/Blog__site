<template>
<div>
    <h1 class="bg-gray-800 py-10 px-10 text-7xl antialiased text-white ">Welcome ... ig</h1>
    <LoginForm v-if="isLogin" @login="handelLogin"/>
    <SignupForm v-if="!isLogin"/>
</div>

<p v-if="isLogin" class="mx-6 cursor-pointer " @click="isLogin=!isLogin">Sign Up Instead</p>
<p v-if="!isLogin" class="mx-6 cursor-pointer " @click="isLogin=!isLogin">Login Instead</p>

</template>

<script>
import { ref } from 'vue'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm.vue'
import {useRouter} from 'vue-router'
export default {
    components:{LoginForm,SignupForm},
    setup(){
        const router =useRouter()
        const isLogin=ref(true)
        const handelLogin =() =>{
           router.push({name:'Home'})
        }
        return {isLogin,handelLogin}
    }
}
</script>

<style>

</style>
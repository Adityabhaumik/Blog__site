<template>
 <div class="max-w-5xl mx-1 my-2 sm:px-6 lg:px-8">
    <div class="overflow-hidden shadow-md text-gray-100">
        <!-- card header -->
        <div class="px-6 py-4 bg-gray-600 font-bold uppercase">
            What is Lorem Ipsum?
        </div>

        <!-- card body -->
        <div class="p-6 bg-gray-800">
            <!-- content goes here -->
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
        </div>

        <!-- card footer -->
        <div class="p-6 bg-gray-800 border-gray-200 text-right">
            <!-- button link -->
            <button @click="handelClick" class="bg-white shadow-md text-sm text-black font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                >Click Me</button>
        </div>
    </div>
</div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
    setup(){
        const router =useRouter()

        const handelClick =()=>{
            console.log("Youe clicked")
            router.push({name:'StoryPage'})
        }
        return {handelClick}
    }


}
</script>

<style>

</style>
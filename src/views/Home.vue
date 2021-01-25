<template>
  <div class="home">
    <Navbar/>
  </div>
   <IndiStory/>
   <IndiStory/>
   <IndiStory/>

   
</template>

<script>
// @ is an alias to /src

import Navbar from '../components/Navbar.vue'
import IndiStory from '../components/IndiStory.vue'

export default {
  name: 'Home',
  components: {  Navbar, IndiStory }
}
</script>

<template>
<div id="app " class="container-fluide " >
  <myheader/>

 <navtemplate/>
    <router-view/>
 
    <myfooter></myfooter>
</div>
</template>
<script>

import navtemplate from './components/mynav';
import myheader from './components/myheader';
import myfooter from './components/myfooter';



export default {
 data () {
   return{

   }
 },
  components:{
    navtemplate,
    myheader,
    myfooter,
  },
   methods: {
  read() {
    this.axios.get('/api/cruds').then(({ data }) => {
      // console.log(data)
    });
  }}
}
</script>
<style scoped>


</style>

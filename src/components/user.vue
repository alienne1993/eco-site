<template>
    <div id="app">
       <myfooter/>
       <mymain/>
       <myheader/>
    </div>
</template>
<script>
import myheader from './components/myheader';
import mymain from './components/mymain';
import myfooter from './components/myfooter';

 export default {
    name:"user",
    components:{
        myheader,
    mymain,
    myfooter}
}
</script>
<style scoped >

</style>
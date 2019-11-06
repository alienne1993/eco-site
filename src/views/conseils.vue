<template>
  <div class="about">
    <h1>conseils:</h1>
    <myconseil></myconseil>
  </div>
</template>
<script>
import myconseil from '../components/myconseil'
export default {
  name:"conseils",
  components:{
    myconseil,
  }
  
}
</script>
<style scoped>
 h1{
font-family: 'Lobster', serif;
font-size:55px;
color: #fff;
text-shadow: 0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 20px #ff8000, 0px -18px 40px red;
}
</style>
<template>
<div >
    <div class="col-md-12"> 
        <mygallerie :images="image"></mygallerie>
        </div>
 
  <myproduit></myproduit>
</div>
</template>

<script>
import mygallerie from '../components/mygallerie'
import myproduit from '../components/produit'

export default {
    name:"gallerie",
   components:{
        mygallerie,
        myproduit
        

       
    } ,
    data() {
        return{
            image:[
                 '/img/image2.jpg', 
                 '/img/11937035_10207740163966916_9129415252880998504_o.jpg',
                 
            ]
        }
    }
}
</script>

<style scoped>

</style>
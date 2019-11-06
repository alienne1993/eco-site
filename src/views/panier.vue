<template>
    <div>
<contient :contient="contient"></contient>
        
    </div>
</template>

<script>
import contient from '../components/contient'
export default {
    name:"panier",
    components:{
        contient,
      
    },
    data(){
        return{
       contient:[],
       
        }
    },
    created() {

        this.contient.push(JSON.parse(localStorage.getItem("panierStorage")))

    },
    methods:{
         getproduit(){
            let url="http://localhost:3000/produit/produitbyid/1";
            this.axios.get(url).then((res)=>{
                console.log(res);
                this.contient= res.data
            }
            )
        },

    }
}
</script>
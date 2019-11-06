<template>
<div>
   <mdb-row>
     
    <connectoinclient></connectoinclient>
    </mdb-row>
</div>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';

import connectoinclient from "../components/connectoinclient"
    export default {
        name: "client",
        components:{
            connectoinclient,
          
              mdbRow,
        },
        data() {
            return {
        
                
            }
        },
        created: function()
        {

        },
        methods: {
       
            }

        }
    
</script>

<style scoped>

connectoinclient{
    border-radius:100%;
}
</style>


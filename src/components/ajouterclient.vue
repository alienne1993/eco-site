<template>
    <div id="ajouterclient">
        <h2>Ajouter un nouveau client</h2>
    <form id="formclient" v-on:submit.prevent="ajouterclient">
      <input type="text" placeholder="Nom" v-model="client.nom" />
      <input type="text" placeholder="Prenom" v-model="client.prenom" />
      <input type="email" placeholder="Email" v-model="client.email" />
      <input type="integer" placeholder="Téléphone" v-model="client.tel" />
      <input type="text" placeholder="Adresse" v-model="client.adress" />



      <input type="submit" value="Ajouter le client" />
    </form>

    </div>
</template>
<script>
export default {
    name: "ajouterclient",
    data() {
        return {
            client:{},
        }
    },
    methods: {
        ajouterclient(){ //fonction évoquée  avec le v-on:submit
        let url = 'http://localhost:3000/client/add';
        this.axios.post(url,this.client)
            .then((res)=>{
                console.log(res)
            })
            .catch(err=>{
                console.log("error"+err)
            });
        }


    }
}

</script>
<style scoped>
h2{
    color:rgb(61, 57, 57);
    font-weight : 500;
    padding-top:5%;
}

#ajouterclient{
   width: 100%;
   height:395px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* background-color: rgb(236, 214, 11); */
    justify-content: space-around;
}

#formProduit{
    width:80%;
}
form{

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}
.form{
    margin-top: 50px;
}
input{
    width: 300px;
    height: 30px;
    margin: 1%;
}




</style>

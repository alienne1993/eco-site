<template>
    <div id="modifierclientAdmin">
        <h2>Modifier le client</h2>
    <form id="formclient" v-on:submit.prevent="enregistrer">
      <input type="text" placeholder="Nom" v-model="client.nom" />
      <input type="text" placeholder="Prenom" v-model="client.prenom" />
      <input type="email" placeholder="Email" v-model="client.email" />
      <input type="integer" placeholder="Téléphone" v-model="client.tel" />
      <input type="text" placeholder="Adresse" v-model="client.adress" />



      <input type="submit" value="Valider la modification du client" />
    </form>

    </div>
</template>
<script>
export default {
    name:"modifierclientAdmin",
    //protection de la route car admin
    beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("token") == null) {
      next("/login");
    } else {
      next();
    }
  },
    data() {
        return {
            client:{},
        }
    },
    created : function(){
       // la variable fournisseur  récupère les paramètres contenus dans la url
       //
        this.client = this.$route.params.clientdata;
        console.log(this.client);

    },
    methods:{
        enregistrer(){
            let url = 'http://localhost:3000/client/update/'+ this.client.id;
                    this.axios.put(url, this.client).then((response) => {
                        alert("votre fournisseur a été modifié")
                        console.log(response)
                            this.$router.push({name:"Adminproduit"})

                          window.location.reload();
                    })
                        .catch(err =>{
                            console.log("error" + err)
                        })
        }

    }
}

</script>
<style scoped>
#modifierclient{
   width: 100%;
   height:768px;
   padding-top:160px;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap; */
    background-color: #d8d4e4;
    justify-content: space-around;
}

#formProduit{
    width:80%;
}
h2{
    color:rgb(61, 57, 57);
    font-weight : 500;
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

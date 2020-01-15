<template>
<div class="panel panel-primary">
  <div class="panel-heading">Panier</div>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
       <th class="col-sm-4">image</th>
       <th class="col-sm-4">Article</th>
       <th class="col-sm-2">Quantité</th>
       <th class="col-sm-2">Prix</th>
       <th class="col-sm-2">Total</th>
       <th class="col-sm-1"></th>
       <th class="col-sm-1"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in contient" :key="item.produitId">

        <td><img :src="require(`../assets/${item.image}`)" width="150" :alt="item.nom"></td>

        <td>{{ item.nom }}</td>

        <td><input type="button" class="btn" @click="updateqtn(index)" value="-"> {{item.quantite_produit}}<input type="button" class="btn btn-dark" @click="update(index)" value="+"></td>
        <td>{{ item.prix_unitaire }} €</td>
        <td>{{ (item.quantite_produit * item.prix_unitaire).toFixed(2) }} €</td>
        <td><button class="btn btn-info btn-block" @click="modifier(item.id)"><i class="fa fa-edit fa-lg"></i></button></td>
        <td><button class="btn btn-danger btn-block" @click="supprimer(item.id)"><i class="fa fa-trash-o fa-lg"></i></button></td>
      </tr>
      <tr>
        <td id="totalpanier" colspan="4">TOTAL</td>
        <td><strong>{{total}} €</strong></td>
        <td colspan="2"></td>
      </tr>
      <button  @click="valide">valide mon panier</button>

     <!-- <editeur :produit="produit" @add="ajouter"></editeur>-->
    </tbody>
  </table>
</div>
</template>

<script>
import editeur from './editeur.vue'
import vuejwtdecode from 'vue-jwt-decode'
import braintree from 'braintree-web';
import paypal from 'paypal-checkout';
export default {
  props: ['contient'],
  data: function () {
    return {
      produit: { produit: '', quantite_produit: 0, prix: 0 },
      panierStorage:{},
      hostedFieldInstance: false,
      nonce: "",
      error: "",
      amount: ""
   }
  },
   created(){

    this.contient=JSON.parse(localStorage.getItem("panierStorage"))
      console.log(this.contient)

    },
      computed: {
          total: function () {
            var total = 0;
            if(this.contient){
            this.contient.forEach(function(item) {
              total += item.prix_unitaire * item.quantite_produit;
            });
            }
            return total;
          }
     },
  methods: {
    modifier: function(item) {
      this.produit = this.contient[item]
      this.contient.splice(item, 1)
    },
    update: function (index){
      this.contient[index].quantite_produit ++;
      this.contient[index].soustotal = this.contient[index].quantite_produit * this.contient[index].prix_unitaire

      console.log(this.contient)
      localStorage.removeItem("panierStorage")
      localStorage.setItem("panierStorage",JSON.stringify(this.contient))
    },
    updateqtn: function (index) {
      if(this.contient[index].quantite_produit > 1){
        this.contient[index].quantite_produit--;
        console.log(this.contient)
        localStorage.removeItem("panierStorage")
        localStorage.setItem("panierStorage",JSON.stringify(this.contient))
      }
      else{
        this.supprimer(index)
      }

    },
  supprimer: function (index) {
    this.contient.splice(index,1)
    localStorage.removeItem("panierStorage");
    if(this.contient.length > 0){
      localStorage.setItem("panierStorage",JSON.stringify(this.contient))
    }
  },
    valide: function () {
      console.log(localStorage.getItem("accessToken"));
      if(localStorage.getItem("accessToken") !== null){
        var user = vuejwtdecode.decode(localStorage.getItem("accessToken"));
        console.log(user.id)

        this.axios.post("http://localhost:3000/contient/newcontient",{
          clientId:user.id,
          panier:this.contient
        })
        .then(res =>{
          console.log(res.data)
          this.$router.push({name:'payement',params:{total:this.total} })
        })
      }
      else{
        this.$router.push({nom:"login"});
      }}


  },
  components: {
    editeur,
  }
}

</script>

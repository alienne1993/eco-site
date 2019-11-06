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
      <tr v-for="item in contient[0]" :key="item.produitId">
        <td><img :src="require(`../assets/${item.image}`)" width="150" :alt="item.nom"></td>
   
        <td>{{ item.nom }}</td>
        <td>{{ item.quantite_produit}}</td>
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
      <button @click="valide">valide mon panier</button>
     <!-- <editeur :produit="produit" @add="ajouter"></editeur>-->
    </tbody>
  </table>
</div>
</template>

<script>
import editeur from './editeur.vue'

export default {
  props: ['contient'],
  data: function () {
    return {
      produit: { produit: '', quantite_produit: 0, prix: 0 },
      panierStorage:{},
   }
  },
   created(){

    this.panierStorage=JSON.parse(localStorage.getItem("panierStorage"))
      console.log(this.panierStorage)

    },
      computed: {
          total: function () {
            var total = 0;
            if(this.panierStorage){
            this.panierStorage.forEach(function(item) {
              total += item.prix_unitaire * item.quantite_produit;
            });
            }
            return total; 
          }
     },
  methods: {
    modifier: function(index) {
      this.produit = this.contient[index]
      this.contient.splice(index, 1)
    },   
  
    valide: function () {
      this.axios.post("http://localhost:3000/commande/newcommande")
       
      this.axios.post("http://localhost:3000/contient/newcontient", this.panierStorage)

     .then(res=>{
       console.log(res.data);
       alert(res)

     })
     .catch(error=>{
       console.log(err)
     })
    }

  },
  components: {
    editeur,
  }
}

</script>

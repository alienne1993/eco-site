<template>
    <div>
      <br><br><br><br><br>   <br><br>
        <!-- <div @click="selectedComponent = 'ajouterProduitBD'" class="p-2 m-2 btn btn-primary">Ajouter le Produit à la base de données</div>
        <div @click="selectedComponent = 'DataTable'" class="p-2 m-2 btn btn-primary">Liste des produits</div>
        <div @click="selectedComponent = 'ajouterFournisseur'" class="p-2 m-2 btn btn-primary">Ajouter le fournisseur à la base de données</div>
        <div @click="selectedComponent = 'DataTable'" class="p-2 m-2 btn btn-primary">Liste des fournissseurs</div> -->
         <div @click="numDiv=1" class="p-2 m-2 btn btn-primary">Ajouter un produit à la base de données</div>
        <div @click="numDiv=2" class="p-2 m-2 btn btn-primary">Liste des produits</div>
         <div @click="numDiv=3" class="p-2 m-2 btn btn-primary">Ajouter le client à la base de données</div>
          <div @click="numDiv=4" class="p-2 m-2 btn btn-primary">Liste des clients</div>

        <!--component :is propre à vue js  -->
        <!-- <div >
            <component :is="selectedComponent" :fetch-url="url" :columns="columns"></component>
        </div>  -->
         <div v-if="numDiv==1">

        </div>
        <div v-if="numDiv==2">
          <DataTable
          :fetch-url="urlProduit"
          :columns="['id', 'nom', 'descrition_produit', 'prix_produit','poid_produit','stock_produit', 'image']"></DataTable>
        </div>
        <div v-if="numDiv==3">
<ajouterclient></ajouterclient>
        </div>
        <div v-if="numDiv==4">
<datatableclient
          :fetchUrlclient="urlclient"
          :columnsclient="columnsclient"></datatableclient>
        </div>

    </div>
</template>

<script>
import ajouterclient from '../components/ajouterclient'
import DataTable from '../components/DataTable'
import datatableclient from '../components/datatableclient'


export default {
  name: 'adminproduit',
  components:{DataTable,ajouterclient,datatableclient},
  //protection de la route
  beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("accessToken") == null) {
      next("/login");
    } else {
      next();
    }
  },
  data(){
      return{
      //on déclare numDiv : 1 comme étant l'affichage que l'on voit quand on arrive sur la page
      numDiv : 1,
      // selectedComponent:"ajouterProduitBD",
      urlProduit:"http://localhost:3000/produit/all",
      // columns : ['id', 'designation', 'description', 'marque', 'image','prix_achat','prix_unitaire','TVA','date de création','date de modification','fournisseurId','categorieId','souscategorieId'],
      // selectedComponent:"ajouterFournisseur",
      urlclient:"http://localhost:3000/client/FindAll",
      columnsclient: ['Id', 'Nom','prenom', 'Adresse','email','Tel'],
  }
}
}
</script>
<style scoped>

</style>

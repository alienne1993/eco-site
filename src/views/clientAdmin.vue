<template>
  <div id="clientAdmin">
    <div @click="selectedComponent = 'ajouterclient'" class="p-2 m-2 btn btn-primary">
      Ajouter le client à la base de données</div>
    <div @click="selectedComponent = 'DataTable'" class="p-2 m-2 btn btn-primary">Liste des clients</div>


    <div
      @click="selectedComponent = 'DataTable'"
      class="p-2 m-2 btn btn-primary"
    >Liste des catégories</div>
    <div>
      <component :is="selectedComponent" :fetch-url="url" :columns="columns"></component>
    </div>
    <div
      @click="retour"
      class="p-2 m-2 btn btn-primary"
    >Retour</div>
  </div>
</template>
<script>
import ajouterclient from '../components/ajouterclient'
import DataTable from '../components/DataTable'

export default {
    name:"clientAdmin",
    components:{ajouterclient,DataTable},
    //protection de la route
    beforeRouteEnter(from, to, next) {
    if (localStorage.getItem("accessToken") == null) {
      next("/login");
    } else {
      next();
    }
  },
    methods: {
      retour: function (){

    this.$router.push({name:"adminhome"})      }
    },
}
</script>
<style scoped>
#clientAdmin{
    padding-top:200px;
}

</style>

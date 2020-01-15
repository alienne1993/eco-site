<template>
    <div >
        <br><br> <br><br><br><br>
        <ul >
            <li><router-link class="home" to="/adminproduit">Produit</router-link></li>

            <li><router-link class="home" to="/clientAdmin">Client</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"adminhome",
    //beforeRouteEnter permet de sécuriser la vue si directmement tapée dans url
    //si pas de connexion alors ça renvoit sur la page de connexion

}
</script>
<style>
home{
  font-style:italic;
  color: rgb(0, 89, 0);
  background: rgb(255, 252, 168);
  text-shadow: rgb(255, 252, 168) 2px 2px 0px, rgb(156, 156, 156) 4px 4px 0px;
  --darkreader-inline-color:#363d42;
  --darkreader-inline-bgimage: initial;
  --darkreader-inline-bgcolor:#ffffff;
}
</style>

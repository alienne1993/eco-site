<template>
    <div class="container">
    <h3 class="h3">BOUTIQUE</h3>
    <div class="row">
        <div class="col-md-3 col-sm-6" v-for="item in produits" :key="item.id">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">

                        <img class="pic-1" :src="require(`../assets/${item.image}`)"   width="550" height="260" >
                        <img class="pic-2" :src="require(`../assets/${item.image}`)" width="550" height="260" >
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Aperçu rapide"><i class="fa fa-eye"></i></a></li>
                        <li><a href="/panier" data-tip="Ajouter à la liste de souhaits"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/panier" data-tip="Ajouter au chariot"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>   
                    <input type="button" @click="ajouter(item.image,item.id,item.nom,item.prix_produit,item.quantite_produit)" class="add-to-cart" value="Ajouter au panier"/>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">{{item.descrition_produit}}</a></h3>
                    <span class="price">{{item.prix_produit}}€</span>
                    <br>
                    <span class="poid">{{item.poid_produit}}g</span>
                </div>
            </div>
        </div>
      
    </div>
</div>

</template>
<script>
export default {
    name:"myboutique",
   data(){
        return{
            produits:{},
            produit:[],
           Panier:[]
        }
    },

    created:function(){
        this.getproduit();
     this.recupLocalStorage();
    },
    methods: {
//axios sert à la communication au client ou serveur
        getproduit(){
            let url="http://localhost:3000/produit/All";
            this.axios.get(url).then((res)=>{
                console.log(res);
                this.produits= res.data
            }
            )
        },
        addproduit(){
            console.log(this.url)

            this.axios.post("http:/localhost:3000/produit/All",this.produit)
            .then((res)=>{
              console.log(res)  
            })
            .catch(err =>{
                console.log(err)
            })
        },
      //  add(image,id,nom,prix,quntite){
       //     this.produit.push({
        //        produit:nom,
          //      id:id,
            //    prix:prix,
             //   quantite:1,
             //   image:image,

           // })
          //  localStorage.getItem('panier')
           //  localStorage.setItem('panier',JSON.stringify(this.produit));

      //  }
  //  },
       ajouter(image,id,nom,prix_unitaire,quantite_produit) {
      //j'efface mon localstorage pour éviter un panier erroné
      //je vide mon LS avec clear
            alert(`le produit ${nom} a bien été ajouté dans votre panier!`);
      console.log(this.Panier);
      localStorage.clear();
      //on verifie la lg du tableauPanier, s'il est vide on ajoute le produit
      //sans vérification de la présence de ce produit

      if (this.Panier.length == 0) {
        let quantite_Produit = 1;
        this.Panier.push({
          image: image,
          produitId: id,
          nom:nom,
          quantite_produit: quantite_Produit,
          prix_unitaire: prix_unitaire,
          soustotal: quantite_Produit * prix_unitaire
        });
      } else {
        let existenceProduit = false;
        //dans le cas où le tableauPanier n'est pas vide, on va boucler
        //pour vérifier si le pdt ajouté est dans le tableauPanier
        this.Panier.forEach(item => {
          //on trouver le produit, on incrémente la quantité
          if (item.produitId == id) {
            item.quantite_produit++;
            item.soustotal = item.quantite_produit * item.prix_unitaire;
            existenceProduit = true;
            console.log("produit existant");
          }
        });
        //le produit n'existe pas donc on ajoute le nouveau produit
        if (existenceProduit == false) {
          let quantite_Produit = 1;
          this.Panier.push({
            image: image,
            produitId: id,
            nom:nom,
            quantite_produit: quantite_Produit,
            prix_unitaire: prix_unitaire,
            soustotal: quantite_Produit * prix_unitaire
          });
          console.log("produit absent");
        }
        console.log(this.Panier);

        this.existenceProduit = id;
        console.log(this.existenceProduit);
      }
      //on envoie le tableauPanier dans le localstorage
      localStorage.setItem("panierStorage", JSON.stringify(this.Panier));
    },
    //récupérer le localStorage
    //si le LS il n'est pas vide on récupère ce qu'il a dedans
    //on le met dans created pour que la fonction se fasse au chargement
    recupLocalStorage() {
      let recupererLS = localStorage.getItem("panierStorage");
      if (recupererLS != null || recupererLS != undefined) {
        this.Panier = JSON.parse(recupererLS);
        console.log(this.Panier);
      }
    }
  }
};
    
    

</script>

<style scoped>

.product-grid2{background: #48ED15;
background: -moz-linear-gradient(45deg, #48ED15 0%, #FFFFFF 37%, #F53518 100%);
background: -webkit-linear-gradient(45deg, #48ED15 0%, #FFFFFF 37%, #F53518 100%);
background: linear-gradient(45deg, #48ED15 0%, #FFFFFF 37%, #F53518 100%);}
  .demo{padding:45px 0}
.product-grid2{font-family:'Open Sans',sans-serif;position:relative}
.product-grid2 .product-image2{overflow:hidden;position:relative}
.product-grid2 .product-image2 a{display:block}
.product-grid2 .product-image2 img{width:100%;height:260px}
.product-image2 .pic-1{opacity:1;transition:all .5s; width:150px ;}
.product-grid2:hover .product-image2 .pic-1{opacity:0}
.product-image2 .pic-2{width:100%;height:100%;opacity:0;position:absolute;top:0;left:0;transition:all .5s}
.product-grid2:hover .product-image2 .pic-2{opacity:1}
.product-grid2 .social{padding:0;margin:0;position:absolute;bottom:50px;right:25px;z-index:1}
.product-grid2 .social li{margin:0 0 10px;display:block;transform:translateX(100px);transition:all .5s}
.product-grid2:hover .social li{transform:translateX(0)}
.product-grid2:hover .social li:nth-child(2){transition-delay:.15s}
.product-grid2:hover .social li:nth-child(3){transition-delay:.25s}
.product-grid2 .social li a{color:#505050;background-color:#fff;font-size:17px;line-height:45px;text-align:center;height:45px;width:45px;border-radius:50%;display:block;transition:all .3s ease 0s}
.product-grid2 .social li a:hover{color:#fff;background-color:#3498db;box-shadow:0 0 10px rgba(0,0,0,.5)}
.product-grid2 .social li a:after,.product-grid2 .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;line-height:22px;border-radius:3px;padding:0 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid2 .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-22px;z-index:-1}
.product-grid2 .social li a:hover:after,.product-grid2 .social li a:hover:before{opacity:1}
.product-grid2 .add-to-cart{color:#fff;background-color:#404040;font-size:15px;text-align:center;width:100%;padding:10px 0;display:block;position:absolute;left:0;bottom:-100%;transition:all .3s}
.product-grid2 .add-to-cart:hover{background-color:#3498db;text-decoration:none}
.product-grid2:hover .add-to-cart{bottom:0}
.product-grid2 .product-new-label{background-color:#3498db;color:#fff;font-size:17px;padding:5px 10px;position:absolute;right:0;top:0;transition:all .3s}
.product-grid2:hover .product-new-label{opacity:0}
.product-grid2 .product-content{padding:20px 10px;text-align:center}
.product-grid2 .title{font-size:17px;margin:0 0 7px}
.product-grid2 .title a{color:#303030}
.product-grid2 .title a:hover{color:#3498db}
.product-grid2 .price{color:#303030;font-size:15px}
@media screen and (max-width:990px){.product-grid2{margin-bottom:30px}
}
               
 
</style>
































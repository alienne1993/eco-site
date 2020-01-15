<template>
<div id="ajouterproduit">
  <form id="fromproduit" v-on:submit.prevent="ajouterproduit">
    <input type="text" placeholder="nom-produit" v-model="nom-produit" required/>
    <input type="text" placeholder="descrition-produit" v-model="descrition-produit" required/>
<input type="text" placeholder="prix-produit" v-model="prix-produit" required/>
<input type="text" placeholder="poid-produit" v-model="poid-produit" required/>
<input type="text" placeholder="stock-produit" v-model="stock-produit" required/>
<div class="image-telecharger">
  <p> télécharger un fichier image: </p>
  <input type="image" @change="previewImage" accept="image/*">
</div>
<div class="image-previewImage" v-if="imageData.length > 0">
  <img class="preview" :src="imageData">
</div>
<input type="text" placeholder="Image" :value="imageLien"/>

<input type="text" placeholder="commande" v-model="commande" required/>
<input type="submit" value="ajouter le produit"/>
</form>
</div>

</template>

<script>
export default {
name: "myadminajouteproduit",
  data() {
    return {
      produit: {},
      client: [],
      photo: null,
      imageData:"",
      imageLien:"",
}
  },
  created: function() {
    //au chargement de la page
    this.getAll();
  },
  methods: {
ajouterProduit() {
      //fonction évoquée en l3 avec le v-on:submit
      let url = "http://localhost:3000/produit/add";
      this.axios
        .post(url, this.produit)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },getAll() {
      //fait référence à la fonction en ligne 37 created
      let url = "http://localhost:3000/client/FindAll";
      this.axios
        .get(url)
        .then(res => {
          console.log(res);
          this.client = res.data;
        })
        .catch(err => {
          console.log("error" + err);
        });},
            previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
                this.imageLien =`"img/${input.files[0].name}"`
                console.log(this.imageLien)
            }
        }
  }
};
</script>

<style scoped>
#ajouterUnProduit {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: rgb(236, 214, 11); */
  justify-content: space-around;
}

#formProduit {
  width: 80%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.form {
  margin-top: 50px;
}
input {
  width: 300px;
  height: 30px;
  margin: 1%;
}
img{
  max-width:180px;
}
.file-telecharge, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color:grey ;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>

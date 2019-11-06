<template>
<div class="container">
	<div class="row">
		<form  class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Creer ta fiche don</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Nom</label>  
  <div class="col-md-4">
  <input name="textinput" class="form-control input-md" id="textinput"  type="text" placeholder="Nom" v-model="client.nom">
    
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">descritif du don</label>  
  <div class="col-md-4">
  <input name="textinput" class="form-control input-md" id="textinput" type="text" placeholder="descritif" v-model="don.descritif_don" >
    
  </div>
</div>
<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">date</label>  
  <div class="col-md-4">
  <input name="textinput" class="form-control input-md" id="textinput" type="text" placeholder="date" v-model="don.date" >
    
  </div>
</div>
<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="E-mail" >E-mail:</label>  
  <div class="col-md-4">
  <input name="E-mail" class="form-control input-md" id="E-mail" type="text" placeholder="E-mail" v-model="client.email" >
    
  </div>
</div>



<!-- File Button --> 
<div class="form-group">
  <label class="col-md-4 control-label" for="filebutton">image de l'article</label>
  <div class="col-md-4">
    <input name="filebutton" class="input-file" id="filebutton" type="file" >
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="singlebutton">Submit</label>
  <div class="col-md-4">
    <button name="singlebutton" class="btn btn-primary" id="singlebutton">Button</button>
  </div>
</div>

</fieldset>
</form>

	</div>
</div>

</template>
<script>
export default {
	name:"mydon",
    data(){
		return{
			don:{},
			client:{},
		}
	}, created:function(){
        this.getdon();
    
    },
    methods: {

    //processFile(event){
	//	this.someData = event.target.files[0]
	//},
        getdon(){
            let url="http://localhost:3000/don/All";
            this.axios.get(url).then((res)=>{
                console.log(res);
                this.don= res.data
            }
            )
        },
        adddon(){
            console.log(this.url)

            this.axios.post("http:/localhost:3000/don/newdon",this.don)
            .then((res)=>{
              console.log(res)  
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },
    
}
</script>
<style scoped>
    
</style>
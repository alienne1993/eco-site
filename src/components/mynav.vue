<template>
<nav class="navbar navbar-default navbar-expand-lg navbar-light">
	<div class="navbar-header d-flex col">
		
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle navbar-toggler ml-auto">
			<span class="navbar-toggler-icon"></span> 
		</button>
	</div>
	<!-- Collection of nav links, forms, and other content for toggling -->
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-space-evenly">
		<ul class="nav navbar-nav">
			<li class="nav-item"><a href="/" class="nav-link">accueil</a></li>
			<li class="nav-item"><a href="/gallerie" class="nav-link">galerie</a></li> 
		<!--	<li class="nav-item dropdown">
				<a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">Services <b class="caret"></b></a>
				<ul class="dropdown-menu">
					<li><a href="#" class="dropdown-item">Web Design</a></li>
					<li><a href="#" class="dropdown-item">Web Development</a></li>
					<li><a href="#" class="dropdown-item">Graphic Design</a></li>
					<li><a href="#" class="dropdown-item">Digital Marketing</a></li>
				</ul>
			</li>-->
			<li class="nav-item active"><a href="/boutique" class="nav-link">boutique</a></li>
			<li class="nav-item"><a href="/conseil" class="nav-link">conseils</a></li>
			<li class="nav-item"><a href="/don" class="nav-link">dons</a></li>
           
		</ul>


		<ul class="nav navbar-nav navbar-right ml-auto" v-if="statu == false" >
			<li class="nav-item">
	  <a class="btn btn-success btn-sm ml-3" href="/panier">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="badge badge-light"></span>
                </a>
				</li>

			<li class="nav-item" >
				<a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">se connecte</a>
				<ul  class="dropdown-menu form-wrapper">
					<li>
            <p v-if="loginError">{{loginError}} </p>

            <p v-if="loginSuccessful">connecte avec success</p>

						<form @submit.prevent="loginSubmit" >
							<p class="hint-text">Connectez-vous avec votre reseau </p>
							<div class="form-group social-btn clearfix">
								<a href="http://localhost:3000/client/auth/facebook" class="btn btn-primary pull-left"><i class="fa fa-facebook"></i> Facebook</a>
								
							</div>
							<div class="or-seperator"><b>ou</b></div>

							<div class="form-group">
								<input type="text" class="form-control" placeholder="email" required="required" v-model="email">
							</div>
							<div class="form-group">
								<input type="password" class="form-control" placeholder="mots de passe" required="required" v-model="mot_de_passe_client">
							</div>
							<input type="submit" class="btn btn-primary btn-block" value="connecte">
							<div class="form-footer">
								<a href="#">Mot de passe oublié?</a>
							</div>
						</form>
					</li>
				</ul>
			</li>
			<li class="nav-item">
				<a href="#"  data-toggle="dropdown" class="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">S'inscrire</a>
				<ul class="dropdown-menu form-wrapper">
					<li>
        <form @submit.prevent="addclient">
			<div class="form-group social-btn clearfix">
								<a href="#" class="btn btn-primary pull-left"><i class="fa fa-facebook"></i> Facebook</a>
								
							</div>
                            <p class="hint-text">Remplissez ce formulaire pour créer votre compte!</p>
							<p v-if="ClientError">{{ClientError}} </p>

							<p v-if="clientSuccessful">compte créer avec success</p>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Nom" required="required" v-model="client.nom">
							</div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Prenom" required="required" v-model="client.prenom">
							</div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="email" required="required" v-model="client.email">
                            </div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="tel" required="required" v-model="client.tel">
							</div>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="adress" required="required" v-model="client.adress">
							</div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Mot de passe" required="required" v-model="client.mot_passe_client">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Confirme le mot de passe" required="required">
                            </div>
                            <div class="form-group">
                                <label class="checkbox-inline"><input type="checkbox" required="required"> J'accepte le <a href="#">Terms &amp; Conditions</a></label>
                            </div>
                            <input type="submit" class="btn btn-primary btn-block" value="inscrire">
                        </form>

					</li>
				</ul>
			</li>
			<li class="nav-item">
				<a href="" @click="logout"  class="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">deconnexion</a>
					</li>
		</ul>
	</div>
</nav>



</template>

<script>
import{ mapState,mapActions} from 'vuex';

import Editeur from './editeur.vue'
export default {
    name:"mynav",
	components:{
		Editeur,
	},
	data: function () {
		return {
			email: '',
			mot_de_passe_client: '',
			client: {},
			statu: false,
			ClientError: '',
			clientSuccessful:''


		}
	},
    computed:{
      ...mapState(
      [
        'loggingIn',
        'loginError',
        'loginSuccessful',
      ])
    },
    methods:{
      ...mapActions([
        'doLogin',
        'logout'
      ]),
      loginSubmit(){
        this.doLogin({
          email:this.email,
          mot_de_passe_client:this.mot_de_passe_client,
        });
      },
        addclient(){

                let url = 'http://localhost:3000/client/new';
                this.axios.post(url, this.client).then((res) => {
						// eslint-disable-next-line no-mixed-spaces-and-tabs
                	this.clientSuccessful = res.data;
                })
                    .catch(err =>{
						this.ClientError = err;
                    });
            }
      }


}
</script>

<style scoped>
@import url("https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css");
	body{
		font-family: 'Varela Round', sans-serif;
	
	}
	.form-control {
		box-shadow: none;
		font-weight: normal;
		font-size: 13px;
	}
	.nav-link{
		font-size: 25px;
		text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, rgb(241, 255, 45) 0px 0px 20px, yellow 0px 0px 30px, yellow 0px 0px 40px,yellow 0px 0px 50px,yellow 0px 0px 75px, 2px -19px 2px rgba(40,247,27,0);
	}
	.form-control:focus {
		border-color: #33cabb;
		box-shadow: 0 0 8px rgba(0,0,0,0.1);
	}
	.navbar-header.col {
		padding: 0 !important;
	}
	.navbar {
		background: #28CE0E;
background: -moz-linear-gradient(-45deg, #28CE0E 0%, #F5F5F5 50%, #EB0C32 100%);
background: -webkit-linear-gradient(-45deg, #28CE0E 0%, #F5F5F5 50%, #EB0C32 100%);
background: linear-gradient(135deg, #28CE0E 0%, #F5F5F5 50%, #EB0C32 100%);
		padding-left: 16px;
		padding-right: 16px;
		border-bottom: 1px solid #dfe3e8;
		border-radius: 0;
	}
	.nav-link img {
		border-radius: 50%;
		width: 36px;
		height: 36px;
		margin: -8px 0;
		float: left;
		margin-right: 10px;
	}
	.navbar .navbar-brand, .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {
		padding-left: 0;
		font-size: 20px;
		padding-right: 50px;
	}
	.navbar .navbar-brand b {
		font-weight: bold;
		color: #33cabb;
	}
	.navbar .form-inline {
        display: inline-block;
    }
	.navbar .nav li {
		position: relative;
	}
	.navbar .nav li a {
		color: #888;
	}
	.search-box {
        position: relative;
    }
    .search-box input {
        padding-right: 35px;
		border-color: #dfe3e8;
        border-radius: 4px !important;
		box-shadow: none
    }
	.search-box .input-group-addon {
        min-width: 35px;
        border: none;
        background: transparent;
        position: absolute;
        right: 0;
        z-index: 9;
        padding: 7px;
		height: 100%;
    }
    .search-box i {
        color: #a0a5b1;
		font-size: 19px;
    }
	.navbar .nav .btn-primary, .navbar .nav .btn-primary:active {
		color: #fff;
		background: #33cabb;
		padding-top: 8px;
		padding-bottom: 6px;
		vertical-align: middle;
		border: none;
	}
	.navbar .nav .btn-primary:hover, .navbar .nav .btn-primary:focus {
		color: #fff;
		outline: none;
		background: #31bfb1;
	}
	.navbar .navbar-right li:first-child a {
		padding-right: 30px;
	}
	.navbar .nav-item i {
		font-size: 18px;
	}
	.navbar .dropdown-item i {
		font-size: 16px;
		min-width: 22px;
	}
	.navbar ul.nav li.active a, .navbar ul.nav li.open > a {
		background: transparent !important;
	}
	.navbar .nav .get-started-btn {
		min-width: 120px;
		margin-top: 8px;
		margin-bottom: 8px;
	}
	.navbar ul.nav li.open > a.get-started-btn {
		color: #fff;
		background: #31bfb1 !important;
	}
	.navbar .dropdown-menu {
		border-radius: 1px;
		border-color: #e5e5e5;
		box-shadow: 0 2px 8px rgba(0,0,0,.05);
	}
	.navbar .nav .dropdown-menu li {
		color: #999;
		font-weight: normal;
	}
	.navbar .nav .dropdown-menu li a, .navbar .nav .dropdown-menu li a:hover, .navbar .nav .dropdown-menu li a:focus {
		padding: 8px 20px;
		line-height: normal;
	}
	.navbar .navbar-form {
		border: none;
	}
	.navbar .dropdown-menu.form-wrapper {
		width: 280px;
		padding: 20px;
		left: auto;
		right: 0;
        font-size: 14px;
	}
	.navbar .dropdown-menu.form-wrapper a {
		color: #33cabb;
		padding: 0 !important;
	}
	.navbar .dropdown-menu.form-wrapper a:hover{
		text-decoration: underline;
	}
	.navbar .form-wrapper .hint-text {
		text-align: center;
		margin-bottom: 15px;
		font-size: 13px;
	}
	.navbar .form-wrapper .social-btn .btn, .navbar .form-wrapper .social-btn .btn:hover {
		color: #fff;
        margin: 0;
		padding: 0 !important;
		font-size: 13px;
		border: none;
		transition: all 0.4s;
		text-align: center;
		line-height: 34px;
		width: 47%;
		text-decoration: none;
    }
	.navbar .social-btn .btn-primary {
		background: #507cc0;
	}
	.navbar .social-btn .btn-primary:hover {
		background: #4676bd;
	}
	.navbar .social-btn .btn-info {
		background: #64ccf1;
	}
	.navbar .social-btn .btn-info:hover {
		background: #4ec7ef;
	}
	.navbar .social-btn .btn i {
		margin-right: 5px;
		font-size: 16px;
		position: relative;
		top: 2px;
	}
	.navbar .form-wrapper .form-footer {
		text-align: center;
		padding-top: 10px;
		font-size: 13px;
	}
	.navbar .form-wrapper .form-footer a:hover{
		text-decoration: underline;
	}
	.navbar .form-wrapper .checkbox-inline input {
		margin-top: 3px;
	}
	.or-seperator {
        margin-top: 32px;
		text-align: center;
		border-top: 1px solid #e0e0e0;
    }
    .or-seperator b {
		color: #666;
        padding: 0 8px;
		width: 30px;
		height: 30px;
		font-size: 13px;
		text-align: center;
		line-height: 26px;
		background: #fff;
		display: inline-block;
		border: 1px solid #e0e0e0;
		border-radius: 50%;
		position: relative;
		top: -15px;
		z-index: 1;
    }
    .navbar .checkbox-inline {
		font-size: 13px;
	}
	.navbar .navbar-right .dropdown-toggle::after {
		display: none;
	}
.btn-success {background: #48ED15;
background: -moz-linear-gradient(left, #48ED15 0%, #FFFFFF 50%, #F53518 100%);
background: -webkit-linear-gradient(left, #48ED15 0%, #FFFFFF 50%, #F53518 100%);
background: linear-gradient(to right, #48ED15 0%, #FFFFFF 50%, #F53518 100%);}
.fa-shopping-cart:before {
	color:black;
}
	@media (min-width: 1200px){
		.form-inline .input-group {
			width: 300px;
			margin-left: 30px;
		}
		
	}
	@media (max-width: 780px){
		.navbar .dropdown-menu.form-wrapper {
			width: 100%;
			padding: 10px 15px;
			background: transparent;
			border: none;
		}
		.navbar .form-inline {
			display: block;
		}
		.navbar .input-group {
			width: 100%;
		}
		.navbar .nav .btn-primary, .navbar .nav .btn-primary:active {
			display: block;
		}
	
	}

</style>

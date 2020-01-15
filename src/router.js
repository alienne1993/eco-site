import Vue from 'vue';
import Router from 'vue-router';
import accuiel from './views/accuiel.vue';
import gallerie from './views/gallerie.vue';
import client from './views/client.vue';
import boutique from './views/boutique';
import conseils from './views/conseils';
import don from './views/don';
import contient  from './components/contient';
import livraison from './views/livraison';
import payement from './views/payement';
import panier from './views/panier';
import adminhome from './views/adminhome';
import adminproduit from './views/adminproduit';
import modifierclientAdmin from './views/modifierclientAdmin';
import clientAdmin from './views/clientAdmin';
import store from './store';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'accuiel',
    component: accuiel
  },
{
  path:'/gallerie',
  name:'gallerie',
  component:gallerie
},
{
  path:'/client',
  name:'client',
  component:client
},
{
  path:'/boutique',
  name:'boutique',
  component:boutique
},
{
  path:'/conseil',
  name:'conseil',
  component:conseils
},
{path:'/contient',
  name:'contient',
  component:contient,
},
{
  path:'/panier',
  name:'panier',
  component:panier,
},
{
 path:'/don',
  name:'don',
  component:don,
},
{
  path:'/payement',
   name:'payement',
   component:payement,
 },{
  path:'/livraison',
   name:'livraison',
   component:livraison,
 },{
  path:'/adminhome',
   name:'adminhome',
   component:adminhome,
 },{
  path:'/adminproduit',
   name:'adminproduit',
   component:adminproduit,
 },{
  path:'/modifierclientAdmin',
   name:'modifierclientAdmin',
   component:modifierclientAdmin,
 },{
  path:'/clientAdmin',
   name:'clientAdmin',
   component:clientAdmin,
 },

];
const router = new Router({
  mode: 'history', // a simule un URL
  base: process.env.BASE_URL,
  routes
});
// avent rentre dans chaque route si le token existe alors on le laisse passe a la page accueil

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  // si le client sur le panier on verifier sinon on renvoyer sur la page accueil
  if (to.fullPath === '/panier') {
      if (!store.state.accessToken) {
          next('/');
      }
  }

  next();
});

export default router;

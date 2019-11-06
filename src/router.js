import Vue from 'vue'
import Router from 'vue-router'
import accuiel from './views/accuiel.vue'
import gallerie from './views/gallerie.vue'
import client from './views/client.vue'
import boutique from './views/boutique'
import conseils from './views/conseils'
import don from './views/don'
import contient  from './components/contient'
//import livraison from './components/livraison'
import panier from './views/panier'
import store from './store'

Vue.use(Router)

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
}
]
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
          next('/panier');
      }
  }
  
  next();
});

export default router

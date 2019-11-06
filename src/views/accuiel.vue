<template>
<div>
<h1>présentation des catégories </h1>

<myaccuiel :images="carouselItems" ></myaccuiel>
</div>
</template>


<script>
import myaccuiel from '../components/myaccuiel'

export default {
  name: "accuiel",

  components: {
    myaccuiel
    
  },
  data() {
    return {
       carouselItems: [
        {
          id: 1,
          image: "../img/img.jpg",
          text: "cannette recy"
        },
        {
          id: 2,
          image: "../img/RDBN6906.jpg",
          text: "ecran d'ordi ramasse dans le cadie"
        },
        {
          id: 3,
          image: "../img/TKTV5709.jpg",
          text: "meuble ramasse par terre dans la rue "
        },
        {
          id: 4,
          image: "../img/IMG_4062.png",
          text: "table maquin fait 100% recyclage"
        }
      ],
    }

  }
}
</script>
<style scoped>

h1{
font-family: 'Lobster', serif;
color: rgb(255, 0, 0);
text-shadow: 3px 3px 0 rgb(238, 255, 0);
font-size: 50px;
display:flex;
justify-content:center;
}

</style>
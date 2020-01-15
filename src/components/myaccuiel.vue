<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <b-carousel-slide  v-for="item in images"   :key="item.id"
                    :caption="item.text"
                  
                    :img-src="item.image"
                  
            ></b-carousel-slide>
        </b-carousel>
</div>
    
</template>
<script>
export default {
  name: "myaccuiel",
  // le props communique avec les parents envoie un donnée
  //required : true, je veux cette valeur
  // type: Array, la valeur que tu récupère est un tableau 
  props:  {
            images: { type: Array, required: true },
                },
   data() {
      return {
        slide: 0,
        sliding: null,
     
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
  


</script>
<style scoped>
#carousel-1{
  width:100%;
}
</style>
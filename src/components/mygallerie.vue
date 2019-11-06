<template>
    <div >
        <h1>Présentation et évolution du produit</h1>
        <p></p>
<h6>Catégorie:</h6>
<div class="slider">
        <transition-group name="fade" tag="div">
            
            <div v-for="i in [currentIndex]" :key="i">
                   <img :src="currentImg" id="img" width="100%" height="600px"/>
            </div>
        </transition-group>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    
    </div>
    <div>
        <h3>photo des produits:</h3>
        </div>
            

    </div>
</template>

<script>
export default {
    name:"mygallerie",
      props: {
            images: { type: Array, required: true },
        },
        data() {
            return {
                image: this.images,
                timer: null,
                currentIndex: 0
            };
        },

        mounted: function() {
            this.startSlide();
        },

        methods: {
            startSlide: function() {
                this.timer = setInterval(this.next, 4000);
            },

            next: function() {
                this.currentIndex += 1;
            },
            prev: function() {
                this.currentIndex -= 1;
            }
        },

        computed: {
            currentImg: function() {
                return this.image[Math.abs(this.currentIndex) % this.image.length];
            }
        }
}
</script>
<style scoped >
   h1{
    
   font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 18px;
letter-spacing: 0.6px;
word-spacing: 2.8px;
color: #000000;
font-weight: normal;
text-decoration: none;
font-style: italic;
font-variant: small-caps;
text-transform: lowercase;
   } 
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.9s ease;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width:100%;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        width:100%;
        opacity: 0;
    }

    #img {
        height:800px;
        width:100%;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.7s ease;
        border-radius: 0 4px 4px 0;
        text-decoration: none;
        user-select: none;
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.9);
    }
    .slider{
        position: relative;
        height:800px;
        width:100%;
        
    }
</style>
<template>
    <div class="carousel">
        <slot></slot>
        <button class="btn_next" @click.prevent="next">Next</button>
        <button class="btn_back" @click.prevent="back">Back</button>
    </div>
</template>
<script>
    export default {
        name: "carousel",
        data(){
            return{
                index: 0,
                slides: [],
                timer: null
            }
        },
        mounted() {
            this.startSlide();
            this.slides = this.$children
            this.slides.forEach((slide, i) =>{
                slide.index = i
            })
        },
        computed: {
            slidesCout() {return this.slides.length}
        },
        methods:
        { 
            startSlide: function() {
                this.timer = setInterval(this.next, 4000);
            },
            next(){
                this.index ++;
                if(this.index >= this.slidesCout){
                    this.index = 0
                }
            },
            back(){
                this.index --;
                if(this.index < 0){
                    this.index = this.slidesCout -1
                }
            }
        }


    }
</script>

<style scoped>

    .carousel{
        position: relative;
        height: 500px;
        overflow: hidden;
    }
    .btn_next{
        position: absolute;
        top: 50%;
        right: 10px;
    }
    .btn_back{
        position: absolute;
        top: 50%;
        left: 10px;
    }

</style>

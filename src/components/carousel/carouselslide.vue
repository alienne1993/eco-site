<template>
    <transition name="slide" >
        <div  v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "carouselslide",
        data(){
            return {
                index: 0
            }
        },
        computed: {
            visible() {
                return this.index === this.$parent.index
            }
        }
    }
</script>

<style scoped>
    .slide-enter-active{
        animation: slideIn 5s;
        top: 0;
        
    }

    .slide-leave-active{
        animation: slideOut 5s;
        top: 0;

    }
    @keyframes slideIn {
        from{
            transform: translateX(100%);

        }
        to{
            transform: translateX(0);
        }

    }

    @keyframes slideOut {
        from{
            transform: translateX(0);

        }
        to{
            transform: translateX(-100%);
        }

    }


</style>

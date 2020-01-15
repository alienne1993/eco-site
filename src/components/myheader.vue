<template>
    <div class="header" >
 <!--<img src="../assets/tumblr_static_tumblr_static__640.gif" width="100%" height="200px" >-->
        <h4>eco-art-recyclable</h4>
        <h2>l'eco art de <br> geek-unilicorne </h2>
        <img class="lo" src="../assets/logoEmilie.png">
    </div>

</template>
<script>

export default {
    name:"myheader"
}
</script>
<style scoped>

*{
    margin: 0px;
    padding: 0px;
     box-sizing: border-box;
}
div .lo{
     width:150px;
}

h4{
 text-shadow: 0 -2px 10px #ff0, 5px -3px 13px rgba(242,255,73,0.9);
color: aliceblue;
  position: absolute;
  left:15px;
  top: 85px;
  font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 25px;
letter-spacing: 2px;
word-spacing: 2px;
font-weight: 700;
text-decoration: none;
font-style: italic;
font-variant: normal;
text-transform: lowercase;
transform: rotate(-35deg)
}

h2{
    text-shadow: 0 -2px 10px #ff0, 5px -3px 13px rgba(242,255,73,0.9);
color: aliceblue;
  position: absolute;
right: 50px;
  top:70px;
 font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 20px;
letter-spacing: 2px;
word-spacing: 2px;
font-weight: 700;
text-decoration: none;
font-style: italic;
font-variant: normal;
text-transform: lowercase;
transform: rotate(35deg)
}
.header{
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    background-image: url("../assets/tumblr_static_tumblr_static__640.gif");
    width:100%;
}
@media screen and (min-width:320px) and (max-width:1200px){
div .lo{
     width:20%;
     height:50%;
}
h4{
 text-shadow: 0 -2px 10px #ff0, 5px -3px 13px rgba(242,255,73,0.9);
color : aliceblue;
 display: none;
  font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 25px;
letter-spacing: 2px;
word-spacing: 2px;
font-weight: 700;
text-decoration: none;
font-style: italic;
font-variant: normal;
text-transform: lowercase;
transform: rotate(-35deg)
}

h2{
    text-shadow: 0 -2px 10px #ff0, 5px -3px 13px rgba(242,255,73,0.9);
color: aliceblue;
 display: none;
 font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 20px;
letter-spacing: 2px;
word-spacing: 2px;
font-weight: 700;
text-decoration: none;
font-style: italic;
font-variant: normal;
text-transform: lowercase;
transform: rotate(35deg)
}
.header{
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    background-image: url("../assets/tumblr_static_tumblr_static__640.gif")
}

}

</style>

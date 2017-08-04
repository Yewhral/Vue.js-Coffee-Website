<template>
  <section id="recipe-content">
        <section id="inner-grid">
            <div id="ingredients"> <h3 class=recipe-category> ingredients: </h3></div>
            <div id="drawing"> <img> an image with a subtitle </img> </div>
            <div id="recipe"> <h3> {{recipe.name}} : </h3>  </div>
        </section>
  </section>
</template>


<script>

export default {
   data () {
       return {
        recipe: {
            name: 'Coffee latte'
        }
       }
     }
}

</script>



<style scoped>
#recipe-content{
    background: #f7eadd;
    grid-column: 2/8;
    grid-row: 1/8;
    padding: 50px;
}

#inner-grid{
    display: grid;
    grid-gap: 5px;
    background:#f5b378;
    padding:30px;
}
#ingredients{
    background: #fae0c8;
    grid-column: 1;
    grid-row: 1/2;
    padding: 20px;
}
#drawing{
     background: #fae0c8;
     grid-column: 2/4;
     grid-row: 1/2;
     padding: 20px;
}
#recipe{
     background: #fae0c8;
     grid-column: 1/4;
     grid-row: 2/4;
     padding: 20px;
}
.recipe-category{
    text-align:center;
}
</style>
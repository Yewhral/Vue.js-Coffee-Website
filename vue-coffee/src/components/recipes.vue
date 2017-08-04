<template>
 <article id="main-recipes">
    <nav id="recipe-links">
        <h3 class="recipe-category"> recipes list: </h3>
        <ul><li v-for="recipe in recipes">{{recipe.Name}}</li></ul>
    </nav>
    <section id="recipe-content">
        <section id="inner-grid">
            <div id="ingredients"> <h3 class=recipe-category> ingredients: </h3></div>
            <div id="drawing"> <img> an image with a subtitle </img> </div>
            <div id="recipe"> <h3> {{recipe.name}} : </h3>  </div>
        </section>
    </section>

 </article>
</template>


<script>

import singleRecipe from './singleRecipe.vue'

export default {
    components: {
        'singleRecipe' : singleRecipe
    },
    data(){
        return{
            recipe:{
                name: 'Coffee Latte'
            },
            recipes:[]
        }
    },
    created(){
        this.$http.get('https://fir-for-coffee-project.firebaseio.com/coffees.json').then(function(data){
            return data.json();
        }).then(function(data) {
            var coffeesArray = [];
            for (let key in data){
                data[key].id = key;
                coffeesArray.push(data[key]);
            }
            this.recipes = coffeesArray;
        })
    }
}

</script>



<style scoped>
#main-recipes{
    display: grid;
    grid-gap: 50px;
    background:#fff3e7;
    margin-top:50px;
    margin-bottom:50px;
    padding: 50px;
    min-height: 400px;
}
#recipe-links{
    background: #f7eadd;
    grid-column: 1;
    grid-row: 1/8;
}
#recipe-content{
    background: #f7eadd;
    grid-column: 2/8;
    grid-row: 1/8;
    padding: 50px;
}
.recipe-category{
    text-align:center;
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

</style>
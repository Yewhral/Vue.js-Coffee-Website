<template>
 <article id="main-recipes">
    <nav id="recipe-links">
        <h3 class="recipe-category"> recipes list: </h3>
        <ul><li v-for="recipe in recipes" class="links"><router-link v-bind:to="'/recipe/' + recipes.id">{{recipe.Name}}</router-link></li></ul>
    </nav>
        <singleRecipe></singleRecipe>


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
.recipe-category{
    text-align:center;
}
a{
    line-height: 30px;
    text-decoration: none;
    font-family: Veranda, serif;
    color: #626173;
    padding: 6px 8px;

}
a:hover{
    background: #bd793d;
    border-radius: 10px;
    color: #fff;
}


</style>
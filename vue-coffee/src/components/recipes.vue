<template>
 <section id="main-recipes">
    <nav id="recipe-links">
        <h3 class="recipe-category">recipes list:</h3>
    </nav>
    <section id="recipe-content">
        <section id="inner-grid">
j
        </section>
    </section>
    <singleRecipe></singleRecipe>
 </section>
</template>


<script>

import singleRecipe from './singleRecipe.vue'

export default {
    components: {
        'singleRecipe' : singleRecipe
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
}
#recipe-content{
    background: #f7eadd;
    grid-column: 2/8;
    padding: 50px;
}
#inner-grid{
    background:#f5b378;
}
.recipe-category{
    text-align:center;
}
</style>
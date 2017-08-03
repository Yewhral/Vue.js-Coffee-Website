import recipes from './components/recipes.vue'
import history from './components/history.vue'
import singleRecipe from './components/singleRecipe.vue'


export default [
    {path:'/', component:recipes},
    {path:'/history', component:history},
    {path:'/singleRecipe:id', component:singleRecipe}

]
<template>
  <div>
    <app-nav></app-nav>
    <app-header></app-header>

     <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>

import history from './components/history.vue'
import recipes from './components/recipes.vue'
import singleRecipe from './components/singleRecipe.vue'
import nav from './components/nav.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  components: {
    'history': history,
    'recipes': recipes,
    'singleRecipe': singleRecipe,
    'app-nav' : nav,
    'app-header': header,
    'app-footer': footer
  },

  data () {
    return {
    }
  }
}
</script>


<style>
body{
    margin:0;
    box-sizing: border-box;
    background: #f0d4bb;
    color: #626173;
}
</style>

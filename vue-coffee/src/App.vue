<template>
  <div>
    <app-nav></app-nav>
    <app-header></app-header>
    <h1>{{ msg }}</h1>

    text

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
      msg: 'Welcome to CoffeeLand'
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

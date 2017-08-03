<template>
<h1 id='main-header'> {{this.headerText}} </h1>
</template>


<script>

export default {
   data () {
     return {
         headerText:'Welcome to the CoffeeLand'
        }
   },
}

</script>



<style scoped>
#main-header {
    background: #bd793d;
}
</style>
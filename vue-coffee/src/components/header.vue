<template>
<header id='main-header'>
<h1 id="headline"> {{this.headerText}} </h1>
</header>
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
    height: 100px;
}
#headline{
    color: #fff;
    position: relative;
    float: left;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
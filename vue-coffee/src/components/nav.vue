<template>
 <nav>
    <ul>
        <li><router-link to='/history' exact> History </router-link></li>
        <li><router-link to='/recipes' exact> Recipes </router-link></li>
    </ul>
 </nav>
</template>


<script>

export default {
}

</script>



<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #626173;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

nav{
    background:#fff3e7;
    color: #626173;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #bd793d;
    color: #444;
}
</style>
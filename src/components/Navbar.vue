<template>
    <div id="navbar">
        <router-link to="/" id="logoUrl" >
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home </router-link>
        <router-link to="/pedidos"> Pedidos</router-link>
        
    </div>
</template>
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>
<style scoped>
#navbar {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#navbar #logoUrl {
    margin: auto;
    margin-left: 0;
}
#logo {
    width: 40px;
    height: 40px;
}
#navbar a {
    color: yellow;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}
#navbar a:hover {
    color: white;
}
</style>
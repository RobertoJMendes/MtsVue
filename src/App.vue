<template>
  <div id="app">
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view />
  <Footer />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar, 
    Footer
  },
  data(){
    return{
      logo_src: "/img/logo.png",
      app_name: "Monte seu Lanche!"
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* box-sizing serve para os inputs não passarem do tamanho do elemento pai */ 
}
.mainContainer {
  margin: 50px;
  min-height: 250px;
}
h1 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
  color: darkblue;
}
</style>
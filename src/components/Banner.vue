<template>
  <div id="mainBanner">
    <h1>Crie e/ou Monte seu Lanche</h1>
  </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
    #mainBanner {
        background-image: url('../../public/img/burger.jpg');
        background-position: 0px -250px;
        background-size: cover;
        background-repeat: no-repeat;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #mainBanner h1 {
        color: green;
        text-align: center;
        font-size: 50px;
        padding: 20px 40px;
    }
</style>
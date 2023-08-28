<template>
    <Banner />
    <div class="home mainContainer">
        <h1>Monte seu Lanche:</h1>
        <BurgerForm />

    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '@/components/BurgerForm.vue'
export default {
    name: "Home",
    components: {
        Banner,
        BurgerForm
        }
}
</script>

<style scoped>
.home h1 {
    color: red;
    }
</style>
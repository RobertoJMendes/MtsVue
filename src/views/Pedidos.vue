<template>
    <div class="pedidos mainContainer">
        <h1>Pedidos:</h1>
        <Dashboard />
    </div>
</template>
<script>
import Dashboard from '../components/Dashbord.vue'
export default {
    name: 'Pedidos',
    components: {
        Dashboard
    }
}
</script>
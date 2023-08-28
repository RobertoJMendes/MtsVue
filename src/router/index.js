import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
//import Pedidos from '../views/Pedidos.vue'
// o component Pedidos esta em lase-lood 


const routes =[{
    path: '/',
    component: Home
},
{
    path:'/pedidos',
    component: () => import ('../views/Pedidos.vue')
}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
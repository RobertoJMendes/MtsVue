<template>
  <Message :msg="msg" v-show="msg" />
  <div id="burgerForm">
    <form @submit="createBurger" >
        <div class="inputContainer">
            <label for="name">Nome do Cliente:</label>
            <input type="text" id="name" name="nome" v-model="nome" placeholder="Digite seu Nome">
        </div>
        <div class="inputContainer">
            <label for="pao">Escolha o seu pão:</label>
            <select id="pao" name="pao">
                <option value="">Selecione seu Pão</option>
                <option v-for="pao in paes" :key="pao.id" name="pao" :value="pao.tipo">{{pao.tipo}}</option>
            </select>
        </div>
        <div class="inputContainer">
            <label for="carne">Escolha o sua carne:</label>
            <select id="carne" name="carne">
                <option value="">Selecione a Carne</option>
                <option v-for="carne in carnes" :key="carne.id" name="carne" :value="carne.tipo">{{carne.tipo}}</option>
            </select>
        </div>
        <div id="opcionaisContainer" class="inputContainer">
            <label id="opcionaisTitle" for="opcionais">Escolha os opcionais:</label>
            <div class="checkboxContainer" v-for="opcional in opcionaisData" :key="opcional.id" >
                <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                <span>{{opcional.tipo}}</span>
            </div>
        </div>
        <div class="inputContainer">
            <input type="submit" class="submitBtn" value="Criar o Lanche!"> 
        </div>
    </form>
  </div>
</template>

<script>
import Message from './Message.vue'
export default {
    name:"BurgerForm",
    data:function() {
        return{
        paes: null,
        carnes: null,
        opcionaisData: null,
        nome: null,
        pao: null,
        carne: null,
        opcionais: [],
        msg: null
        }
    },
    methods: {
        async getIngredientes () {
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()

            this.paes = data.paes;
            this.carnes = data.carnes;
            this.opcionaisData = data.opcionais;
        },
        async createBurger (e) {
            e.preventDefault()
            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from (this.opcionais),
                status: "Solicitado"
            }
            const dataJson = JSON.stringify(data);

            const req = await fetch ("http://localhost:3000/burgers",{
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: dataJson,
            });

            const res = await req.json();

            this.msg = `O pedido nº ${res.id} foi realizado com sucesso`

            setTimeout(() => this.msg = "",3000 )

            this.carne="",
            this.nome="",
            this.pao="",
            this.opcionais=""
    }},
        components: { Message },
        mounted(){
            this.getIngredientes()
    }
}
</script>

<style scoped>
#burgerForm {
    min-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.inputContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
label {
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
    padding: 5px 10px;
    border-left: 4px solid yellow;
}
input, select {
    padding: 5px 10px;
    width: 300px;
}
#opcionaisContainer {
    flex-direction: row;
    flex-wrap: wrap;
}
#opcionaisTitle {
    width: 100%;
}
.checkboxContainer {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}
.checkboxContainer span,
.checkboxContainer input {
    width: auto;
}
.checkboxContainer span {
    margin-left: 10px;
    font-weight: bold;
}
.submitBtn {
    background-color: #222;
    color: yellow;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0px auto;
    cursor: pointer;
    transition: .5s;
}
.submitBtn:hover {
    background-color: transparent;
    color: green;
}
</style>
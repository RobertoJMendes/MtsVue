<template>
  <div class="massageContainer">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
    name: "Message",
    props: {
      msg: String
    }
}
</script>

<style scoped>
.massageContainer {
  color: blue;
  background-color: lightblue;
  border: 2px solid lightskyblue;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 30px auto;
}
p {
  color: red;
}
</style>
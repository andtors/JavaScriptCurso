<template>
  <div id="app">
    <h1>Problema de Montyhall</h1>
    <div class="form">
      <div v-if="!startefd">
        <label for="portsAmount">Quantas portas?</label>
        <input type="text" id="portsAmount" size="3"
            v-model.number="portsAmount">
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta é premiada?</label>
        <input type="text" id="selectedPort" size="3"
            v-model.number="selectedPort">
    </div>
    <button v-if="!started" @click="started =true">Iniciar</button>
    <button v-if="started" @click="started =false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
        <div v-for="i in portsAmount" :key="i">
            <ItemDoor :hasGift="i === selectedPort" :number="i" />
        </div>
    </div>
  </div>
</template>

<script>
import ItemDoor from "./components/ItemDoor.vue";

export default {
  name: "App",
  components: { ItemDoor },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form{
    display: flex;
    flex-direction:  column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors{
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
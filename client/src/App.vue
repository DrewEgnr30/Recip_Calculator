<template>
  <div id="app">
    <div id="btndiv">
      <button @click="goBack" id="backbtn">Back</button>
    </div>
    <img src="./assets/Quincy_logo.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    goBack: function () {
      if (this.$route.path === '/') {
        this.$router.push('/')
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%;
  font-size: 18px;
}
#btndiv{
  display: grid;
  grid-template-columns: 75px;
}
img{
  width: 20%;
  height: auto;
  margin-bottom: 15px;
}
Button{
  color: blue;
  background-color: white;
  border-radius: 12px;
  border: 1px solid blue;
  font-size: 18px;
}
Button:hover{
  color: white;
  background-color: blue;
}
</style>

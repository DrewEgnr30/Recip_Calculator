<template>
  <div id="app">
    <img v-if="showImg" src="./assets/Quincy_logo.jpg">
    <div id="btndiv">
      <button @click="goBack" id="backbtn">Back</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showImg: false
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
  font-size: 10px;
}
#btndiv{
  display: grid;
  grid-template-columns: 50px;
}
img{
  width: 40%;
  height: auto;
}
Button{
  color: blue;
  background-color: white;
  border-radius: 12px;
  border: 1px solid blue;
}
Button:hover{
  color: white;
  background-color: blue;
}
</style>

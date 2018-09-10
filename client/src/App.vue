<template>
  <div id="app">
    <img v-if="showImg" src="./assets/Quincy_logo.jpg">
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
img{
  width: 40%;
  height: auto;
}
</style>

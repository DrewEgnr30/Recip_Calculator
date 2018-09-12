<template>
  <div class="container">
      <h3>{{msg}}</h3>
      <div class="btn-div">
        <button @click="enterParams">Enter System Requirements</button>
        <button @click="toolTable">Tool Table</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChoosePage',
  data () {
    return {
      msg: 'Enter Your System Requirements or Use a List of Commonly Used Tools to Build Your System'
    }
  },
  methods: {
    toolTable: function () {
      this.$router.push({name: 'ToolTable'})
    },
    enterParams: function () {
      this.$router.push({name: 'EnterParams'})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  width: 40%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 10px;
}
.btn-div{
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  grid-gap: 10px;
}
button{
  width: 150px;
  height: auto;
}
</style>

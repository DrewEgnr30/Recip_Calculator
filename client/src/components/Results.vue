<template>
  <div class="container">
      <h1>{{msg}}</h1>
      <ul style="list-style-type:none">
        <li v-for="model in models" :key="model">{{model}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Results',
  data () {
    return {
      msg: 'Results',
      models: this.$route.params.models.split(',')
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

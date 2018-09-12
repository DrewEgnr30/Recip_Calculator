<template>
  <div class="container">
      <h1>{{msg}}</h1>
      <div v-for="model in models" :key="model">
        <h1>Recommended Compressor</h1><br>
        <img :src="getImgUrl(model)"/><br>
        <a :href="getBrochureUrl(model)">
          <font-awesome-icon class="icon" icon="book" /><br>
        </a>
        <h3>{{model}}</h3>
      </div>
  </div>
</template>

<script>
import CompressorAssets from '../json/compressor_assets.json'
export default {
  name: 'Results',
  data () {
    return {
      msg: 'Results',
      models: this.$route.params.models.split(','),
      Json_assets: CompressorAssets,
      Image: Image
    }
  },
  methods: {
    getImgUrl (model) {
      var pic = ''
      Object.entries(this.Json_assets).forEach(([key, value]) => {
        if (value.Model === model) {
          pic = value.Photo
        }
      })
      var image = require.context('../assets/', false, /\.png$/)
      return image('./' + pic)
    },
    getBrochureUrl (model) {
      var brochure = ''
      Object.entries(this.Json_assets).forEach(([key, value]) => {
        if (value.Model === model) {
          brochure = value.Brochure
        }
      })
      return brochure
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon{
  width: 40px;
  height: auto;
}
</style>

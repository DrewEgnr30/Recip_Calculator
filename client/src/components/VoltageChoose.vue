<template>
  <div class="container">
      <h3>{{msg}}</h3>
      <select name="voltages" v-model="selected">
        <option v-for="voltage in voltages" :value="voltage.value" :key="voltage.value">{{voltage.text}}</option>
      </select><br>
      <button @click="calculate">Submit</button>
  </div>
</template>

<script>
import Compressors from '../json/compressors.json'
export default {
  name: 'VoltageChoose',
  data () {
    return {
      msg: 'Voltage/Gas Selection',
      flow: this.$route.params.cfm,
      pressure: this.$route.params.psi,
      voltages: [
        {value: null, text: 'Choose your voltage or choose gas'},
        {value: '120/1/60', text: '120/1/60'},
        {value: '230/1/60', text: '230/1/60'},
        {value: '200/3/60', text: '200/3/60'},
        {value: '230/3/60', text: '230/3/60'},
        {value: '380/3/60', text: '380/3/60'},
        {value: '460/3/60', text: '460/3/60'},
        {value: '575/3/60', text: '575/3/60'},
        {value: 'Gas', text: 'Gas'}
      ],
      selected: null,
      Json_compressors: Compressors,
      models: []
    }
  },
  methods: {
    calculate: function () {
      var model = ''
      var selectModel = ''
      var flow = 0
      var pressure = 0
      var fam = ''
      var prevFam = ''
      if (this.selected !== null) {
        Object.entries(this.Json_compressors).forEach(([key, value]) => {
          if (value.Voltages.includes(this.selected)) {
            model = value.Model
            flow = value.Flow
            pressure = value.Pressure
            fam = value.Product_Family
            if (flow >= this.flow) {
              if (pressure >= this.pressure) {
                selectModel = model
              } else {
                selectModel = false
              }
            } else {
              selectModel = false
            }
            if (prevFam !== fam && selectModel) {
              this.models.push(model)
            }
            if (selectModel) {
              prevFam = value.Product_Family
            }
          }
        })
        if (this.models.length > 0) {
          this.$router.push({name: 'Results', params: {models: this.models.join()}})
        } else {
          alert('The parameters you entered do not match any compressor. Please contact the factory.')
        }
      } else {
        alert('Please select a voltage to continue.')
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
  font-size: 18px;
}
Button{
  margin-top: 10px;
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

<template>
  <div class="container">
    <div class="header">
      <h5 class="title">{{msg}}</h5>
      <label class="flow-lbl">Flow Needed: </label>
      <span class="flow">{{flowSum}}</span>
      <label class="pressure-lbl">Pressure Needed: </label>
      <span class="pressure">{{pressVal}}</span><br>
      <button @click="reset" style="margin-top:15px">Reset</button>
    </div>
    <button class="sticky-btn" @click="scrollTop">Scroll to Top</button>
    <table style="width:70%">
      <tr>
        <th>Quantity</th>
        <th>Tool Name</th>
        <th>Average Consumption (cfm)</th>
        <th>Pressure Required (psig)</th>
      </tr>
      <tr v-for="json in Json_indus" :key="json.Name + 'industry'">
        <td>
          <input type="number" :name="json.Name" min="0" value="0" v-on:change="sumFlow" :data-flow="json.Consumption_Avg" :data-press="json.Pressure">
        </td>
        <td>{{json.Name}}</td>
        <td>{{json.Consumption_Avg}}</td>
        <td>{{json.Pressure}}</td>
      </tr>
      <tr v-for="json in Json_auto" :key="json.Name + 'auto'">
        <td>
          <input type="number" :name="json.Name" min="0" value="0" v-on:change="sumFlow" :data-flow="json.Consumption_Avg" :data-press="json.Pressure">
        </td>
        <td>{{json.Name}}</td>
        <td>{{json.Consumption_Avg}}</td>
        <td>{{json.Pressure}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import industrial from '../json/industrial.json'
import automotive from '../json/automotive.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Reciprocating Compressor Selection Tool',
      Json_indus: industrial,
      Json_auto: automotive,
      flows: [],
      flowSum: 0,
      pressVal: 0,
      inputs: []
    }
  },
  methods: {
    sumFlow: function (event) {
      var flowIndex = 0
      var flowVal = 0
      this.flows = Array.from(document.querySelectorAll('input'))
      this.flows.forEach(flow => {
        flowVal = parseInt(flow.value)
        if (!isNaN(flowVal) && flowVal >= 0) {
          flowIndex += flowVal * flow.dataset.flow
          if (flowVal > 0) {
            if (parseInt(flow.dataset.press) > this.pressVal) {
              this.pressVal = parseInt(flow.dataset.press)
            }
          }
        } else {
          flow.value = 0
        }
      })
      this.flowSum = flowIndex
    },
    scrollTop: function () {
      window.scrollTo(0, 0)
    },
    reset: function () {
      this.inputs = Array.from(document.querySelectorAll('input'))
      this.inputs.forEach(input => {
        input.value = 0
      })
      this.flowSum = 0
      this.pressVal = 0
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td{
  border: 1px solid black;
  border-collapse: collapse;
}
th{
  background-color: blue;
  color: white;
}
table{
  margin: auto;
}
th, td{
  padding: 10px;
}
Button{
  color: blue;
  background-color: white;
  border-radius: 12px;
  border: 1px solid blue;
}
.sticky-btn{
  position: sticky;
  top: 50%;
  left: 85%;
}
Button:hover{
  background-color: blue;
  color: white;
}
</style>

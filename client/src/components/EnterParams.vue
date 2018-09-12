<template>
  <div class="container">
      <h3>{{msg}}</h3>
      <div class="input-wrapper">
        <div class="flow-lbl">
          <label>System Flow:</label>
        </div>
        <div class="flow-input">
          <input type="number" name="Flow" min="0" value="0" v-model="flow">
        </div>
        <div class="cfm-lbl">
          <label>cfm</label>
        </div>
        <div class="press-lbl">
          <label>Pressure:</label>
        </div>
        <div class="press-input">
          <input type="number" name="Pressure" min="0" value="0" v-model='pressure'>
        </div>
        <div class="psi-lbl">
          <label>psig</label>
        </div>
        <div class="reset-btn">
          <button >Reset</button>
        </div>
        <div class="submit-btn">
          <button @click="submit">Submit</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EnterParams',
  data () {
    return {
      msg: 'Enter Your System\'s Parameters',
      flow: 0,
      pressure: 0
    }
  },
  methods: {
    submit: function () {
      (isNaN(parseInt(this.flow)) || this.flow < 0) || (isNaN(parseInt(this.pressure)) || this.pressure < 0) ? alert('Please enter a valid flow or pressure') : this.$router.push({name: 'VoltageChoose', params: {cfm: this.flow, psi: this.pressure}})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  width: 75px;
  height: auto;
}
input{
  width: 75px;
}
.input-wrapper > div {
  width: 50px;
}
.flow-lbl{
  grid-area: 'flowlbl';
}
.flow-input{
  grid-area: 'flowinput';
}
.cfm-lbl{
  grid-area: 'cfmlbl';
}
.press-lbl{
  grid-area: 'presslbl';
}
.press-input{
  grid-area: 'pressinput';
}
.psi-lbl{
  grid-area: 'psilbl';
}
.reset-btn{
  margin-top: 10px;
  grid-area: 'resetbtn';
  justify-self: end;
}
.submit-btn{
  margin-top: 10px;
  grid-area: 'submitbtn';
  justify-self: end;
}
.input-wrapper{
  width: 250px;
  display: grid;
  grid-template-areas:
    'flowlbl flowinput cfmlbl'
    'presslbl pressinput psilbl'
    'resetbtn . submitbtn';
  justify-items: center;
  margin: 0 auto;
}
@media only screen and (max-width: 850px) {
  .input-wrapper{
    grid-template-areas:
      'flowlbl'
      'flowinput'
      'cfmlbl'
      'presslbl'
      'pressinput'
      'psilbl'
      'resetbtn'
      'submitbtn';
  }
  .reset-btn{
    justify-self: center;
  }
  .submit-btn{
    justify-self: center;
  }
}
</style>

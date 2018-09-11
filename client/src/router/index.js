import Vue from 'vue'
import Router from 'vue-router'
import ToolTable from '@/components/ToolTable'
import VoltageChoose from '@/components/VoltageChoose'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ToolTable',
      component: ToolTable
    },
    {
      path: '/voltage/:cfm/:psi',
      name: 'VoltageChoose',
      component: VoltageChoose
    },
    {
      path: '/results/:cfm/:psi/:volt',
      name: 'Results',
      component: Results
    }
  ]
})

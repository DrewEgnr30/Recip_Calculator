import Vue from 'vue'
import Router from 'vue-router'
import ToolTable from '@/components/ToolTable'
import VoltageChoose from '@/components/VoltageChoose'
import Results from '@/components/Results'
import ChoosePage from '@/components/ChoosePage'
import EnterParams from '@/components/EnterParams'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ChoosePage',
      component: ChoosePage
    },
    {
      path: '/params',
      name: 'EnterParams',
      component: EnterParams
    },
    {
      path: '/tools',
      name: 'ToolTable',
      component: ToolTable
    },
    {
      path: '/voltage/:cfm/:psi',
      name: 'VoltageChoose',
      component: VoltageChoose
    },
    {
      path: '/results/:models',
      name: 'Results',
      component: Results
    }
  ]
})

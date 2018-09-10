import Vue from 'vue'
import Router from 'vue-router'
import ToolTable from '@/components/ToolTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToolTable',
      component: ToolTable
    }
  ]
})

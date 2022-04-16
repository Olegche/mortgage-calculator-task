import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  SetBankListForm from '../components/SetBankListForm'
import Calculator from '../components/Calculator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bank-form/new',
    name: 'AddNewBank',
    component: SetBankListForm
  },
  {
    path: '/bank-form/:bank_id',
    name: 'UpdateBank',
    component: SetBankListForm
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

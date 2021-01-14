import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Frank from './components/Frank.vue'

const history=createWebHashHistory()
const routes=[
  {path:'/',component:Frank}
]
const router=createRouter({history,routes})
createApp(App).use(router).mount('#app')

import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue'
import Button from './components/Button.vue'
import DocDemo from './components/DocDemo.vue'
import Switch from './components/Switch.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'

const history = createWebHashHistory();
const routes = [
  {path: '/', component: Home},
  {path:'/doc',component: Doc,
  children:[
    {path:'',component:DocDemo},
    {path:'switch',component:Switch},
    {path:'button',component:Button},
    {path:'dialog',component:Dialog},
    {path:'tabs',component:Tabs}
  ]
  }
];
const router = createRouter({history, routes});
createApp(App).use(router).mount('#app');

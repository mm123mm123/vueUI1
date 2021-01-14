import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue'
const history = createWebHashHistory();
const routes = [
  {path: '/', component: Home},
  {path:'/doc',component: Doc}
];
const router = createRouter({history, routes});
createApp(App).use(router).mount('#app');

<template>
  <TopNav/>
  <div class="content">
    <aside class="componentsList" v-if='listVisible'>
      <h1>组件列表</h1>
      <ul>
        <li><router-link to="/doc/switch">Switch组件</router-link></li>
        <li><router-link to="/doc/button">Button组件</router-link></li>
        <li><router-link to="/doc/dialog">Dialog组件</router-link></li>
        <li><router-link to="/doc/tabs">Tabs组件</router-link></li>
      </ul>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
import TopNav from '../components/TopNav.vue'
import {inject} from 'vue'
export default {
  components: {TopNav},
  setup(){
    let listVisible=inject('listVisible')
    return {listVisible}
  }
}
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>


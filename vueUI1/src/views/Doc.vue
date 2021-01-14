<template>
  <TopNav/>
  <div class="content">
    <aside>边栏</aside>
    <main>主内容</main>
  </div>
</template>
<script>
import TopNav from '../components/TopNav.vue'
export default {
  components: {TopNav}
}
</script>
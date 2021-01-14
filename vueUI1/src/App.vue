<template>
  <router-view/>
</template>

<script>
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
export default {
  name: 'App',
  components: {
    Home,Doc
  }
}
</script>

<template>
  <router-view/>
</template>

<script lang="ts">
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import {ref, Ref, provide} from 'vue';

export default {
  name: 'App',
  components: {
    Home, Doc
  },
  setup() {
    let screenWidth = document.documentElement.clientWidth;
    const listVisible: Ref<boolean> = ref(screenWidth > 500);
    provide('listVisible', listVisible);
    return {listVisible};
  }
};
</script>

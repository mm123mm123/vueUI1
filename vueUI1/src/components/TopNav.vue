<template>
  <div class="topNav">
    <span class="toggleAside" @click="toggleList"></span>
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject} from 'vue';

export default {
  setup() {
    let listVisible = inject('listVisible');
    return {
      toggleList() {
        listVisible.value = !listVisible.value;
      }
    };
  }
};
</script>
<style scoped lang="scss">
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;

  button{
    display:none
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  @media(max-width: 500px) {
    .menu {
      display: none;
    }
    .logo{
      margin:0 auto;
    }
    > .toggleAside{
      display: inline-block;
      background:red;
      width:20px;
      height:20px;
      position: absolute;
      left:12px;
      top:50%;
      transform: translate(0,-50%);
    }
  }
}
</style>
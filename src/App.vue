<template>
  <div id="app">
    <TheWrapper/>
    <TheWrapperTopbarMenu/>
    <router-view />
  </div>
</template>
<script>
import TheWrapper from "@/components/TheWrapper"
import TheWrapperTopbarMenu from "@/components/TheWrapperTopbarMenu"
export default {
  components:{
    TheWrapper,
    TheWrapperTopbarMenu
  }
}
</script>
<style>
@import './assets/styles/styles.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<template>
  <div id="app">
    <TheWrapper/>
<<<<<<< Updated upstream
=======
    <TheWrapperTopbarMenu/>
    <GununFirsatlari/>
>>>>>>> Stashed changes
    <router-view />
  </div>
</template>
<script>
import TheWrapper from "@/components/TheWrapper"
<<<<<<< Updated upstream
export default {
  components:{
    TheWrapper
=======
import TheWrapperTopbarMenu from "@/components/TheWrapperTopbarMenu"
import FastShippingAd from "@/components/FastShippingAd"
import GununFirsatlari from "@/components/GununFirsatlari"
export default {
  components:{
    TheWrapper,
    TheWrapperTopbarMenu,
    FastShippingAd,
    GununFirsatlari
>>>>>>> Stashed changes
  }
}
</script>
<style>

@import './Style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

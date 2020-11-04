<template>
  <div id="app">
    <FastShippingAd/>
    <TheWrapper/>
    <CategoryDropbar/>
    <GununFirsatlari/>
    <router-view />
  </div>
</template>
<script>
import TheWrapper from "@/components/TheWrapper"
import CategoryDropbar from "@/components/CategoryDropbar"
import FastShippingAd from "@/components/FastShippingAd"
import GununFirsatlari from "@/components/GununFirsatlari"
export default {
  components:{
    TheWrapper,
    CategoryDropbar,
    FastShippingAd,
    GununFirsatlari
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

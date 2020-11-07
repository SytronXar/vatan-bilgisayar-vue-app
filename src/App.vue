<template>
  <div id="app">
    <FastShippingAd />
    <TheWrapper />
    <CategoryDropbar />
    <router-view :key="$route.path"/>
    <BottomOfPage/>
    <TheFancyBoxContainer v-show="false"/>

  </div>
</template>
<script>
import TheFancyBoxContainer from "@/components/TheFancyBoxContainer"
import TheWrapper from "@/components/TheWrapper";
import CategoryDropbar from "@/components/CategoryDropbar";
import FastShippingAd from "@/components/FastShippingAd";
import BottomOfPage from "@/components/BottomOfPage";
export default {
  components: {
    TheWrapper,
    CategoryDropbar,
    FastShippingAd,
    BottomOfPage,
    TheFancyBoxContainer
  },
  methods:{
    openFancyBoxPanel(){
      return false
    }
  }
};
</script>
<style>
@import "./assets/styles/styles.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

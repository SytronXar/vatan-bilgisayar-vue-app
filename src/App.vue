<template>
  <div id="app">
    <FastShippingAd />
    <TheWrapper />
    <CategoryDropbar />
    <router-view :key="$route.path"/>
    <BottomOfPage/>

  </div>
</template>
<script>
import TheWrapper from "@/components/TheWrapper";
import CategoryDropbar from "@/components/CategoryDropbar";
import FastShippingAd from "@/components/FastShippingAd";
import BottomOfPage from "@/components/BottomOfPage";
export default {
  components: {
    TheWrapper,
    CategoryDropbar,
    FastShippingAd,
    BottomOfPage
  },
<<<<<<< HEAD
  methods: {},
  mounted() {
    /* document.addEventListener("dragstart", e => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    }); */
=======
  methods:{
    openFancyBoxPanel(){
      return false
    }
>>>>>>> parent of aa902a40... resimlerin drag edilememesi sağlandı böylelikle carouselin takılma sorunu düzelmiş oldu.
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

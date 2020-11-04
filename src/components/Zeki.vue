<template>
  <div class="global-container">
    <a href="https://zeki.vatanbilgisayar.com/">
      <img
        src="https://cdn.vatanbilgisayar.com/Upload/BANNER//zeki/zeki2.jpg"
        alt="small banner"
        class="img-responsive small-banner__image lazy-init"
      />
    </a>
    <div id="smallBannerHide" class="small-banner__button">
      <span class="small-banner__text">Gizle</span>
      <span class="icon-times"></span>
    </div>
  </div>
</template>
<style scoped>
.icon-times
{
    font-family: Vatan-Bilgisayar!important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.small-banner {
  position: relative;
  text-align: center;
  color: #fff;
  background-color: #02377d;
  margin: 0 0 40px;
}
.small-banner__text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin-right: 5px;
}
.small-banner__image {
  margin: 0 auto;
}
.small-banner__button {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: 15px;
  cursor: pointer;
}
.hide {
  display: none;
}
</style>
<template>

    <div >
        <TheTopBar/>
        <div id="navbar-header__content">
            <div class="navbar-header__area">
                <router-link class="navbar_brand" to="/">
                    <img src="https://www.vatanbilgisayar.com/assets/dist/images/vatanlogo.svg"/>
                </router-link>
            </div>
            <div id="search-form">
                <input autocomplete="off" data-searchurl="/Partial/Search" id="navbar-search-input" class="search__input" type="text" name="search" placeholder="Aramak istediğiniz ürünü yazın">
            </div>
        </div>
    </div>
</template>
<style scoped>
    #navbar-header__area{
        display: table-cell;
        vertical-align: middle;
        width: 33.333333%;
    }
    #navbar_brand{
        background-color: #fff;
        margin: 12px 0;
        margin-top: 12px;
        margin-right: 0px;
        margin-bottom: 12px;
        margin-left: 0px;
        padding: 0;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
    }
    #navbar_brand img{
        height: 50px;
    }
    #navbar-header__content {
    display: inline;
    position: relative;
}
    
</style>
<script>
import TheTopBar from "@/components/TheTopBar"
export default {
  components:{
    TheTopBar
  }
}
</script>
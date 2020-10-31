
<template>

    <div >
        <TheTopBar/>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="navbar-header__content">
                <div class="navbar-header__area">
                    <router-link id="navbar_brand" to="/">
                        <img src="https://www.vatanbilgisayar.com/assets/dist/images/vatanlogo.svg"/>
                    </router-link>
                </div>
                <div class="navbar-header__area">
                    <div class="search-form">
                        <input autocomplete="off" id="navbar-search-input" class="search__input" type="search"  placeholder="Aramak istediğiniz ürünü yazın">
                        <button class="search-button">
                            <span class="icon-search">
                                <i class="fa fa-search"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="navbar-header__area">
                    <button type="button" id="btnMyAccount" class="btn btn-primary btn-login dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i>
                        <span id="type">GİRİŞ YAP</span>
                    </button>
                </div>
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
        position: relative;
        display: table;
        height: 100%;
        width: 100%;
    }
    #search-form{
        position: relative;
        max-width: 623px;
        width: 100%;
        margin: 0 auto;
    }
    #search__input{
        width: 100%;
        border: none;
        background-color: #efefef;
        border-radius: 30px;
        outline: 0;
        padding: 10px 50px 11px 15px;
        font-size: 14px;
        color: #1c1c1c;
        opacity: .5;
        border: 1px solid transparent;
    }
    #search_button{
        position: absolute;
        top: 0;
        right: 20px;
        border: none;
        background: 0 0;
        outline: 0;
        line-height: 41px;
        margin: 0;
        padding: 0;
    }
    
    #search_button img{
        height: 10;
        width: 10;
    }
    #icon-search:before {
    content: "\e940";
    }  
    #btn{
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    } 
    #btn-primary{
        background-color: #337ab7;
        border-color: #2e6da4;
        color: #fff;
        font-weight: 700;
    }
    .btn-login {
        position: relative;
    }
    .btn.btn-primary.dropdown-toggle {
        padding: 10px 22px 10px 27px;
    }
    .btn-group, .btn-group-vertical {
        position: relative;
        display: inline-block;
        vertical-align: middle;
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
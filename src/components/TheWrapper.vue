<template>
  <div>
    <TheTopBar />
    <div class="wrapper-topbar-menu menu-toptools">
      <div class="global-container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="navbar-header__content no-padding">
              <div class="navbar-header__area">
                <a class="navbar-brand" href="/">
                  <img
                    src="https://www.vatanbilgisayar.com/assets/dist/images/vatanlogo.svg"
                    alt="Vatan Bilgisayar"
                  />
                </a>
              </div>
              <div class="navbar-header__area">
                <div class="search search-light hide">
                  <div class="search__form">
                    <input
                      autocomplete="off"
                      data-searchUrl="/Partial/Search"
                      id="navbar-search-input"
                      class="search__input"
                      type="text"
                      name="search"
                      placeholder="Aramak istediğiniz ürünü yazın"
                    />
                    <a href="javascript:void(0);" class="remove__button">
                      <span class="icon-times"></span>
                    </a>
                    <button class="search__button">
                      <span class="icon-search">
                        <i class="fa fa-search"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="navbar-header__area">
                <div class="wrap-button">
                  <div class="btn-group my-account">
                    <button
                      type="button"
                      id="btnMyAccount"
                      class="btn btn-primary btn-login dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      @focus="OpenDropdown"
                      @blur="CloseDropdown"
                    >
                      <span class="icon-user"></span>
                      <span id="type">GİRİŞ</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-home account" v-show="loginTime"> 
                      <li><a href="/uyeBilgi/uyeBilgi">Üyeliğim</a></li>
                      <li><a href="/uyeBilgi/siparistakip">Siparişlerim</a></li>
                      <li>
                        <a href="/uyeBilgi/favorilistem">Favori Ürünlerim</a>
                      </li>
                      <li><a href="/uyeBilgi/uyeAdres">Adres Bilgilerim</a></li>
                      <li><a href="/uyeBilgi/mesaj">Mesajlarım</a></li>
                      <li>
                        <a
                          href="/MemberTransaction/Logout?returnUrl=%2F&amp;logtab=signup"
                          >ÇIKIŞ <span class="icon-door-open"></span
                        ></a>
                      </li>
                    </ul>
                    <ul class="dropdown-menu dropdown-menu-home hide login">
                      <li>
                        <a href="/login?returnUrl=%2F&amp;logtab=signin"
                          >Giriş Yap</a
                        >
                      </li>
                      <li>
                        <a href="/login?returnUrl=%2F&amp;logtab=signup"
                          >Üye Ol</a
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="btn-group referrer-search-area">
                    <i class="icon-search"></i>
                  </div>

                  <div class="btn-group basketGroup">
                    <button
                      type="button"
                      id="btnMyBasket"
                      class="btn btn-primary btn-basket dropdown-toggle"
                      aria-haspopup="true"
                      aria-expanded="false"
                      @mouseenter="OpenDropdown"                      
                      @mouseleave="CloseDropdown"
                    >
                      <span class="icon-shopping-card"
                        ></span>
                      <span class="btn-basket--text">SEPETİM</span>
                      <span class="btn-basket--count">0</span>
                    </button>
                    <ul
                      class="dropdown-menu dropdown-menu-basket openBasket"
                    ></ul>
                  </div>
                </div>
              </div>
              <div id="navbar-search-results"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#navbar_brand img {
  height: 50px;
}
.button drop_down_arrow {
  float: right;
}
</style>
<script>
import TheTopBar from "@/components/TheTopBar";
export default {
  components: {
    TheTopBar
  },
  computed:{

  },
  methods: {
    OpenDropdown(event) { 
        var Target=event.target;
        Target.setAttribute("aria-expanded", true);
        Target.parentElement.classList.add("open");  
    },
    CloseDropdown(event) { 
        var Target=event.target;
        Target.setAttribute("aria-expanded", false);      
        Target.parentElement.classList.remove("open");  
    },
    loginTime(event){  
        var Target=event.target;
        return Target.parentElement.classList.contains('open');
    }
  }
};
</script>
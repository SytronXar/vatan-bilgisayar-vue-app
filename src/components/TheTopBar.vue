<template>
    <nav id="nav">       
      <router-link  to="/webe-ozel-urunler">
        <span>Web'e Özel</span>
      </router-link>
      <router-link  to="/firsat-urunler">
        <span>Fırsat</span>
      </router-link>
      <router-link  to="/yeni-urunler">
        <span>Yeni</span>
      </router-link>
      <router-link  to="/pc-toplama">
        <span>PC Toplama</span>
      </router-link>
      <router-link  to="/outlet">
        <span>Outlet</span>
      </router-link>
      <router-link  to="/magazalar">
        <span>Magazalar</span>
      </router-link>
      <router-link  to="/siparis-takibi">
        <span>Siparis Takibi</span>
      </router-link>
      <router-link  to="/iletisim">
        <span>İletişim</span>
      </router-link>
    </nav>
</template>
<style scoped>
    #nav{   
        align-items: center;
        padding: 30px;
    }

    #nav a {
    color: #2c3e50;
    padding: 0 10px;
    text-decoration: none;
    }

    #nav a:first-child {
    color: #337ab7;
    padding: 0 10px;
    text-decoration: none;
    }

    /*#nav a.router-link-exact-active {
    font-weight: bold;
    color: #337ab7;
    text-decoration: none;
    }*/

    #nav a.topbar-exact-active:first-child {
    font-weight: bold;
    color: #337ab7;

    }#nav a.topbar-exact-active {
    font-weight: bold;
    color: #2c3e50;;
    text-decoration: none;
    }
</style>

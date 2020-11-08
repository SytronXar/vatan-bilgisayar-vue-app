import Vue from "vue";
import VueRouter from "vue-router";
import Anasayfa from "../views/Anasayfa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:producthref",
    name: "ProductPage",
    props:true,
    meta: {
      reload: true,
    },
    component: () =>
      import(/*webpackChunkName:"UrunSayfasi"*/ "../views/UrunSayfasi.vue")
  },
  {
    path: "/login/?returnUrl=%2F&logtab=:loginhref",
    name: "LoginPage",
    props:true,
    component: () =>
      import(/*webpackChunkName:"LoginPage"*/ "../views/LoginPage.vue")
  },
  {
    path: "/",
    name: "Anasayfa",
    props:true,
    component: Anasayfa
  },
  {
    path: "/webe-ozel-urunler/",
    name: "WebeOzelUrunler",
    props:true,
    component: () =>
      import(
        /*webpackChunkName:"WebeOzelUrunler"*/ "../views/WebeOzelUrunler.vue"
      )
  },
  {
    path: "/firsat-urunler/",
    name: "FirsatUrunler",
    props:true,
    component: () =>
      import(/*webpackChunkName:"FirsatUrunler"*/ "../views/FirsatUrunler.vue")
  },
  {
    path: "/iletisim/",
    name: "Iletisim",
    props:true,
    component: () =>
      import(/*webpackChunkName:"Iletisim"*/ "../views/Iletisim.vue")
  },
  {
    path: "/magazalar/",
    name: "Magazalar",
    props:true,
    component: () =>
      import(/*webpackChunkName:"Magazalar"*/ "../views/Magazalar.vue")
  },
  {
    path: "/outlet/",
    name: "Outlet",
    props:true,
    component: () => import(/*webpackChunkName:"Outlet"*/ "../views/Outlet.vue")
  },
  {
    path: "/pc-toplama/",
    name: "PCToplama",
    props:true,
    component: () =>
      import(/*webpackChunkName:"PCToplama"*/ "../views/PCToplama.vue")
  },
  {
    path: "/siparis-takibi/",
    name: "SiparisTakibi",
    props:true,
    component: () =>
      import(/*webpackChunkName:"SiparisTakibi"*/ "../views/SiparisTakibi.vue")
  },
  {
    path: "/yeni-urunler/",
    name: "YeniUrunler",
    props:true,
    component: () =>
      import(/*webpackChunkName:"YeniUrunler"*/ "../views/YeniUrunler.vue")
  },
  {
    path: "/hizli-teslimat/",
    name: "HizliTeslimat",
    props:true,
    component: () =>
      import(/*webpackChunkName:"HizliTeslimat"*/ "../views/HizliTeslimat.vue")
  },
  {
    path: "/sepet/sepetim",
    name: "CartPage",
    props:true,
    component: () =>
      import(/*webpackChunkName:"CartPage"*/ "../views/CartPage.vue")
  },
  {
    path:"*",
    name:"notFound",
    component: () =>
      import(/*webpackChunkName:"NotFound"*/ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  redirect: "/",
  linkExactActiveClass: "topbar-exact-active",
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Anasayfa from "../views/Anasayfa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Anasayfa",
    component: Anasayfa
  },
  {
    path: "/webe-ozel-urunler",
    name: "WebeOzelUrunler",
    component: () => import(/*webpackChunkName:"WebeOzelUrunler"*/ "../views/WebeOzelUrunler.vue")
  },
  {
    path: "/firsat-urunler",
    name: "FirsatUrunler",
    component: () => import(/*webpackChunkName:"FirsatUrunler"*/ "../views/FirsatUrunler.vue")
  },
  {
    path: "/iletisim",
    name: "Iletisim",
    component: () => import(/*webpackChunkName:"Iletisim"*/ "../views/Iletisim.vue")
  },
  {
    path: "/magazalar",
    name: "Magazalar",
    component: () => import(/*webpackChunkName:"Magazalar"*/ "../views/Magazalar.vue")
  },
  {
    path: "/outlet",
    name: "Outlet",
    component: () => import(/*webpackChunkName:"Outlet"*/ "../views/Outlet.vue")
  },
  {
    path: "/pc-toplama",
    name: "PCToplama",
    component: () => import(/*webpackChunkName:"PCToplama"*/ "../views/PCToplama.vue")
  },
  {
    path: "/siparis-takibi",
    name: "SiparisTakibi",
    component: () => import(/*webpackChunkName:"SiparisTakibi"*/ "../views/SiparisTakibi.vue")
  },
  {
    path: "/yeni-urunler",
    name: "YeniUrunler",
    component: () => import(/*webpackChunkName:"YeniUrunler"*/ "../views/YeniUrunler.vue")
  },
  {
    path: "/hizli-teslimat",
    name: "HizliTeslimat",
    component: () => import(/*webpackChunkName:"HizliTeslimat"*/ "../views/HizliTeslimat.vue")
  },
  {
    path: '/:producthref',
    name: 'ProductPage',
    component: () => import(/*webpackChunkName:"UrunSayfasi"*/ "../views/UrunSayfasi.vue")
  }
];

const router = new VueRouter({
  linkExactActiveClass: "topbar-exact-active",
  routes
});

export default router;

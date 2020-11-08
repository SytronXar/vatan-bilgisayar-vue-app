<script>
// @ is an alias to /src
import Products from "@/Products";
export default {
  name: "UrunSayfasi",
  computed: {},
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentimg: 0,
      showFancy: false,
      productData: Products.data.find(data => data.id === this.productId)
    };
  },
  methods: {
    updateimg(index) {
      this.currentimg = index;
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    AddToBasket() {
      this.showFancy = true;
    },
    getComment(index) {
      var comments = this.productData.comments;
      if (comments.length > index) return comments[0];
      return {
        date: "",
        time: "",
        rate: "",
        name: "",
        highlight_comment: "",
        comment: ""
      };
    },

    ProductHref(name) {
      return name.toLowerCase().replace(/\s/g, "-") + ".html";
    },
    getProductData(sProduct) {
      return Products.data.find(data => data.id === sProduct);
    }
  }
};
</script>
<template>
  <div class="discount-prod-detail">
    <div class="discount-text clearfix">
      <span class="icon-arrow-down-percent"></span>
      <span>Bu ürünle birlikte alabileceğiniz ürünler</span>
    </div>
    <div class="discount-item-wrapper">
      <!-- V-for çevirdiğimiz yer -->
      <div
        class="discount-item"
        v-for="sProduct in productData.advicedProducts"
        :key="sProduct"
      >
        <div class="d-table clearfix">
          <div class="d-cell">
            <router-link
              :id="sProduct"
              :to="{
                name: 'ProductPage',
                params: { productId: sProduct, producthref: ProductHref(getProductData(sProduct).name) }
              }"
            >
              <picture>
                <img
                  :src="getProductData(sProduct).images[0]"
                  alt="urunismi"
                />
              </picture>
              <span class="prod-name"
                >{{ getProductData(sProduct).name }}
              </span>
            </router-link>
          </div>
            <div class="d-cell">
            <span class="old-price">{{getProductData(sProduct).cost}} TL</span>
            <span class="price">{{formatPrice(getProductData(sProduct).cost * 0.95)}} <span>TL</span></span>
          </div>
          <div class="d-cell">
            <input
              type="checkbox"
              class="hidden-check bundle-check bundleProcess"
              name="chkBndURN_88816"
              id="chkBndURN_88816"
            />
            <label class="btn btn-add btn-sm pull-right" for="chkBndURN_88816"
              >SEÇ</label
            >
          </div>
          <input
            type="hidden"
            name="hdnUBN_KOD"
            id="hdnUBN_KOD_88816"
            class="inputCheck"
            value="88816"
          />
        </div>
      </div>
    </div>
    <div class="text-center">
      <a
        href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#"
        id="discount"
        class="discount-link hide"
      >
        <div class="discount-up">
          <span>Daha Fazla Göster</span>
          <span class="icon-angle-down"></span>
        </div>
        <div class="discount-down hide">
          <span>Daha Az Göster</span>
          <span class="icon-angle-up"></span>
        </div>
      </a>
    </div>
  </div>
</template>
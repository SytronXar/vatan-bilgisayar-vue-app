<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
    <div class="product-list">
      <div class="product-list__image-safe">
        <router-link
          :to="{
            name: 'ProductPage',
            params: { id: productData.id, producthref: ProductHref }
          }"
          title=""
          class="product-list__image-safe-link sld product-pic-slider owl-carousel owl-loaded owl-drag"
        >
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              :style="
                `transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width:` +
                  owlStageWidth +
                  `px;`
              "
            >
              <div
                class="owl-item active"
                :style="`width: ` + imageWidth + `px;`"
                v-for="image in productData.images"
                v-bind:key="image"
              >
                <div class="slider-img">
                  <img
                    class="lazyimg"
                    v-bind:src="image"
                    v-bind:data-src="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="owl-nav disabled">
            <button type="button" role="presentation" class="owl-prev">
              <span aria-label="Previous">‹</span></button
            ><button type="button" role="presentation" class="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div class="owl-dots disabled"></div
        ></router-link>
        <ul class="img-slide-thumbs">
          <li
            :style="`width:` + percentSlideThumbs + `%`"
            v-for="n in productData.images.length"
            :key="n"
            v-bind:class="{ active: n === currentShowImageIndex }"
          ></li>
        </ul>
      </div>
      <!-- Son * ürün labeli -->
      <div class="product-list__campaign-bar only-web flash-animated" v-show="isLowInStock()">
        <span> Web'e Özel</span
        ><span
          ><span> Bu Fiyata<span> Son {{productData.inStock}} Ürün</span></span></span
        >
      </div>
      <!-- Yeni ürün labeli -->
      <div class="product-list__badge-bar" v-show="isNewProduct()&&!isLowInStock()">
        <div class="in-wrapper-condition">
          <span class="icong-yeniurun"></span
          ><span class="wrapper-condition__text">YENİ ÜRÜN</span>
        </div>
      </div>
      <div class="product-list__content">
        <router-link
          :to="{
            name: 'ProductPage',
            params: { id: productData.id, producthref: ProductHref }
          }"
          class="product-list__link"
        >
          <div class="product-list__product-code">
            {{ productData.code }}
          </div>
          <div class="product-list__product-name">
            {{ productData.name }}
          </div>
        </router-link>
        <div class="product-list__cost">
          <span class="product-list__price">{{
            formatPrice(productData.cost)
          }}</span>
          <span class="product-list__currency"> TL</span>
          <span class="product-list__current-price"> </span>
        </div>
        <div class="wrapper-condition wrapper-condition--product-list">
          <div
            class="in-wrapper-condition"
            v-show="
              productData.freeShipping === true ||
                productData.fastShipping === true
            "
          >
            <span class="icon-truck-alt wrapper-condition__icon"> </span>
            <span
              class="wrapper-condition__text"
              v-if="productData.fastShipping === true"
              >BUGÜN KARGODA</span
            >
            <span
              class="wrapper-condition__text"
              v-else-if="
                productData.fastShipping === false &&
                  productData.freeShipping === true
              "
              >KARGO BEDAVA</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Products from "@/Products";
import moment from "moment";
export default {
  data() {
    return {
      imageWidth: 179.625,
      currentShowImageIndex: 1
    };
  },
  components: {},
  computed: {
    productData() {
      return Products.data.find(data => data.id === this.productId);
    },
    owlStageWidth() {
      return this.productData.images.length * this.imageWidth;
    },
    percentSlideThumbs() {
      return 100 / this.productData.images.length;
    },
    ProductHref() {
      return this.productData.name.toLowerCase().replace(/\s/g, "-") + ".html";
    }
  },
  props: {
    productId: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    isNewProduct() {
      var diff = moment().diff(
        this.productData.productLaunchTime,
        "years",
        true
      );
      return diff < 0.2;
    },
    isLowInStock(){
      return this.productData.inStock <= 30;
    }
  }
};
</script>

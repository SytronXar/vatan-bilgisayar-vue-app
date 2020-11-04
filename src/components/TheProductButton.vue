<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
    <div class="product-list">
      <div class="product-list__image-safe">
        <a
          :href="ProductHref"
          title=""
          class="product-list__image-safe-link sld product-pic-slider owl-carousel owl-loaded owl-drag"
        >
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              :style="`transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width:`+ owlStageWidth+`px;`"
            >
              <div
                class="owl-item active"
                :style="`width: `+imageWidth+`px;`"
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
        ></a>
        <ul class="img-slide-thumbs">
          <li v-class="{active: isActive(n)}" :style="`width:` + percentSlideThumbs +`%`" v-for="n in productData.images.length" :key="n"></li>
        </ul>
      </div>

      <div class="product-list__content">
        <a :href="ProductHref" class="product-list__link">
          <div class="product-list__product-code">
            {{ productData.id }}
          </div>
          <div class="product-list__product-name">
            {{ productData.name }}
          </div>
        </a>
        <div class="product-list__cost">
          <span class="product-list__price">{{formatPrice(productData.cost)}}</span>
          <span class="product-list__currency"> TL</span>
          <span class="product-list__current-price"> </span>
        </div>
        <div class="wrapper-condition wrapper-condition--product-list">
          <div class="in-wrapper-condition">
            <span class="icon-truck-alt wrapper-condition__icon"></span
            ><span class="wrapper-condition__text">BUGÜN KARGODA</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productData: {
        id: "MWLT2TU/A",
        name: "iPhone 11 64 GB AKILLI TELEFON SİYAH",
        cost: 7599,
        images: [
          "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/TeoriV2-103888-27_small.jpg",
          "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/TeoriV2-103888-28_small.jpg"
        ]
      },
      imageWidth: 179.625,
      currentShowImageIndex: 0
    };
  },
  components: {},
  computed: {
      owlStageWidth(){
          return this.productData.images.length*this.imageWidth
      },
      percentSlideThumbs(){
          return 100/this.productData.images.length;
      },     
      ProductHref(){
          return "/"+ this.productData.name.toLowerCase().replace(/\s/g, '-')+".html"
      }
  },
  props: {},
  methods: {
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    isActive(n){
        console.debug(n)
       return n==this.currentShowImageIndex
    }
  }
};
</script>
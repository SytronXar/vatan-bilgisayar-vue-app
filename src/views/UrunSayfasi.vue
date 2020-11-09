<script>
// @ is an alias to /src

import Products from "@/Products";
import Comments from "@/components/Comments";
import productImagenInfo from "@/components/productImagenInfo";
import FiveCarousel from "@/components/Carousel/FiveCarousel";
export default {
  name: "ProductPage",
  computed: {
    productData() {
      return Products.data.find(data => data.id === this.productId);
    }
  },
  props:{
    productId:{
      type:String,
      required:true
    }
  },
  components: {
    Comments,
    productImagenInfo,
    FiveCarousel
  },
  data() {
    return {
      currentimg:0
    };
  },
  methods:{
    updateimg(index)
    {
      this.currentimg=index
    },
    AddToBasket(){
      this.showFancy=true;
    }
  }
};
</script>
<template>
  <body class="has-top-banner" tabindex="0">
    <main>
      <input type="hidden" id="visilabs-categoryId" value="notebook" />
      <div class="wrapper-breadcrumb">
        <div class="global-container">
          <div class="row">
            <div class="col-xs-12">
              <ul class="breadcrumb">
                <li>
                  <a
                    href="https://www.vatanbilgisayar.com/bilgisayar"
                    class="bradcrumb-item"
                    >Bilgisayar</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.vatanbilgisayar.com/notebook"
                    class="bradcrumb-item"
                    >Notebook</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.vatanbilgisayar.com/oyun-bilgisayari"
                    class="bradcrumb-item"
                    >Oyun Bilgisayarı</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.vatanbilgisayar.com/dell/oyun-bilgisayari"
                    class="bradcrumb-item"
                    >{{currentimg}}</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0)" class="bradcrumb-item"
                    >G315-4B30W85C</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="short-add-basket">
        <div class="row d-table">
          <div class="d-cell col-sm-1 col-xs-3 short-image">
            <a
              href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#"
            >
              <img
                src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                alt="banner 1"
                class="img-responsive"
              />
            </a>
          </div>
          <div class="d-cell col-sm-5 col-xs-6 short-name">
            <a
              href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#"
            >
              <span>{{ productData.name }}</span>
            </a>
          </div>
          <div class="d-cell col-sm-3 col-xs-3 short-price">
            <span class="product-list__price">{{ productData.cost }}</span>
            <span class="product-list__currency">TL</span>
          </div>
          <div class="d-cell col-xs-12 short-basket-button">
            <a
              @click="AddToBasket()"
              class="btn btn-success sepete
               ekle"
              ><span
                class="icon-shopping-card hidden-sm hidden-md hidden-lg"
              ></span
              >SEPETE EKLE</a
            >
          </div>
        </div>
      </div>
        <!--UrunBilgileri-->
        <productImagenInfo :productId="productId"/>
      <!-- Carousel -->
      <FiveCarousel :message="'Bu Ürüne Bakanlar Bunlara da Baktı'"/>
      <Comments :productId="productId"/>
<!--Comments buraya gelecek-->
    </main>
  </body>
</template>

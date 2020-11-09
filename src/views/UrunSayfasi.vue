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
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  components: {
    Comments,
    productImagenInfo,
    FiveCarousel
  },
  data() {
    return {
      currentimg: 0
    };
  },
  methods: {
    updateimg(index) {
      this.currentimg = index;
    },
    AddToBasket() {
      this.showFancy = true;
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
              <ul class="breadcrumb" style="text-align: left">
                <li>
                  <a
                    href="https://www.vatanbilgisayar.com/bilgisayar"
                    class="bradcrumb-item"
                    >Bilgisayar</a
                  >
                </li>
                <li>
                  <a class="bradcrumb-item">{{ productData.productType }}</a>
                </li>
                <li>
                  <a class="bradcrumb-item">{{ productData.name }}</a>
                </li>
                <li>
                  <a class="bradcrumb-item">{{ productData.code }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--UrunBilgileri-->
      <productImagenInfo :productId="productId" />
      <!-- Carousel -->
      <FiveCarousel :message="'Bu Ürüne Bakanlar Bunlara da Baktı'" />
      <Comments :productId="productId" />
      <!--Comments buraya gelecek-->
    </main>
  </body>
</template>

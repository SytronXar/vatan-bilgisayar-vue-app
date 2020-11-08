<script>
// @ is an alias to /src

import Products from "@/Products";
import Comments from "@/components/Comments";
import productImagenInfo from "@/components/productImagenInfo";
import FancyBoxContainer from "@/components/TheFancyBoxContainer"
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
    FancyBoxContainer,
    productImagenInfo,
  },
  data() {
    return {
      currentimg:0,
      showFancy:false
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
      <div
        class="wrapper-product wrapper-product--light wrapper-product-detail- no-pad-bot visilabs-alternate-products"
      >
        <div class="global-container">
          <div
            class="global-component-header global-component-header--small-gutter clearfix"
          >
            <h3
              class="global-component-header__title global-component-header--small-gutter__title"
            >
              Bu Ürüne Bakanlar Bunlara da Baktı
            </h3>
          </div>
          <div
            class="owl-carousel owl-carousel-arrows owl-theme owl-loaded owl-drag"
          >
            <div class="owl-stage-outer">
              <div
                class="owl-stage"
                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 5368px;"
              >
                <div
                  class="owl-item active"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/lenovo-ideapad-l340-core-i5-9300hf-2-4ghz-8gb-512gb-ssd-15-6-gtx1650-4gb-w10-108083.html?OM.zn=alternative_products-w2&amp;OM.zpc=81LK01GTTX"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/TeoriV2-108083-6_small.jpg"
                              media="(min-width: 1000px)"
                              alt="LENOVO IDEAPAD L340
                            CORE İ5 9300HF 2.4GHZ-8GB-512GB SSD-15.6'
                            gtx1650=4gb w10"
                              title="LENOVO IDEAPAD L340
                            CORE İ5 9300HF 2.4GHZ-8GB-512GB SSD-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/TeoriV2-108083-6_small.jpg"
                              media="(min-width: 600px)"
                              alt="LENOVO IDEAPAD L340
                            CORE İ5 9300HF 2.4GHZ-8GB-512GB SSD-15.6'
                            -gtx165 4gb-w10"
                              title="LENOVO IDEAPAD L340 CORE
                            İ5 9300HF 2.4GHZ-8GB-512GB SSD-15.6' 4gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/TeoriV2-108083-6_small.jpg"
                              media="(min-width: 300px)"
                              alt="LENOVO IDEAPAD L340
                            CORE İ5 9300HF 2.4GHZ-8GB-512GB SSD-15.6'
                            -gtx1650 4gb-w10"
                              title="LENOVO IDEAPAD L340
                            CORE İ5 9300HF 2.4GHZ-8GB-512GB SSD-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="LENOVO IDEAPAD L340 CORE İ5 9300HF
                            2.4GHZ-8GB-512GB SSD-15.6' -gtx1650= 4gb-w10"
                              title="LENOVO IDEAPAD L340 CORE İ5 9300HF
                            2.4GHZ-8GB-512GB SSD-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          LENOVO IDEAPAD L340 CORE İ5 9300HF 2.4GHZ-8GB-512GB
                          SSD-15.6"-GTX1650 4GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">9.499</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-g512lw-core-i7-10750h-2-6ghz-16gb-1tb-ssd-17-3-rtx2070-super-8gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=G512LW-HN097T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108496_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-16GB-1TB SSD-15.6'
                            -rtx2070 8gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-16GB-1TB SSD-15.6"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108496_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-16GB-1TB SSD-15.6'
                            -rtx2070 8gb-w10"
                              title="ASUS ROG STRIX G15 G512
                            CORE İ7 10750H 2.6GHZ-16GB-1TB SSD-15.6'
                            8gb-w10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108496_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-16GB-1TB SSD-15.6'
                            -rtx2070 8gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-16GB-1TB SSD-15.6"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS
                            ROG STRIX G15 G512 CORE İ7 10750H 2.6GHZ-16GB-1TB
                            SSD-15.6' -rtx2070 8gb-w10"
                              title="ASUS ROG
                            STRIX G15 G512 CORE İ7 10750H 2.6GHZ-16GB-1TB
                            SSD-15.6"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ROG STRIX G15 G512 CORE İ7 10750H 2.6GHZ-16GB-1TB
                          SSD-15.6"-RTX2070 8GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">18.592</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-g512lv-core-i7-10750h-2-6ghz-16gb-512gb-ssd-15-6-rtx2060-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=G512LV-HN111T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108497_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ROG STRIX G15
                            G512 COREİ7 10750H 2.6GHZ-16GB-512GBSSD-15.6'
                            -rtx2060= 6gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 COREİ7 10750H 2.6GHZ-16GB-512GBSSD-15.6"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108497_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ROG STRIX G15
                            G512 COREİ7 10750H 2.6GHZ-16GB-512GBSSD-15.6'
                            -rtx2060= 6gb-w10"
                              title="ASUS ROG STRIX G15 G512
                            COREİ7 10750H 2.6GHZ-16GB-512GBSSD-15.6'
                            6gb-w10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108497_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ROG STRIX G15
                            G512 COREİ7 10750H 2.6GHZ-16GB-512GBSSD-15.6'
                            -rtx2060 6gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 COREİ7 10750H 2.6GHZ-16GB-512GBSSD-15.6"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS
                            ROG STRIX G15 G512 COREİ7 10750H
                            2.6GHZ-16GB-512GBSSD-15.6' -rtx2060 6gb-w10"
                              title="ASUS ROG STRIX G15 G512 COREİ7 10750H
                            2.6GHZ-16GB-512GBSSD-15.6"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ROG STRIX G15 G512 COREİ7 10750H
                          2.6GHZ-16GB-512GBSSD-15.6"-RTX2060 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">17.559</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-ux581gv-core-i7-9750h-2-6ghz-16gb-512gb-ssd-15-6-rtx2060-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=UX581GV-H2004T"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-103675_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ZENBOOK PRO
                            DUO UX581 CORE İ7 9750H 2.6GHZ-16GB-512GB-15.6
                            -rtx2060 6gb-w10"
                              title="ASUS ZENBOOK PRO DUO
                            UX581 CORE İ7 9750H 2.6GHZ-16GB-512GB-15.6"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-103675_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ZENBOOK PRO DUO
                            UX581 CORE İ7 9750H 2.6GHZ-16GB-512GB-15.6
                            -rtx2060 6gb-w10"
                              title="ASUS ZENBOOK PRO DUO
                            UX581 CORE İ7 9750H 2.6GHZ-16GB-512GB-15.6
                            6gb-w10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-103675_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ZENBOOK PRO DUO
                            UX581 CORE İ7 9750H 2.6GHZ-16GB-512GB-15.6
                            -rtx2060 6gb-w10"
                              title="ASUS ZENBOOK PRO DUO
                            UX581 CORE İ7 9750H 2.6GHZ-16GB-512GB-15.6"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS
                            ZENBOOK PRO DUO UX581 CORE İ7 9750H
                            2.6GHZ-16GB-512GB-15.6 -rtx2060 6gb-w10"
                              title="ASUS ZENBOOK PRO DUO UX581 CORE İ7 9750H
                            2.6GHZ-16GB-512GB-15.6"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ZENBOOK PRO DUO UX581 CORE İ7 9750H
                          2.6GHZ-16GB-512GB-15.6"-RTX2060 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">25.822</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item active"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-rog-strix-core-i7-10875h-2-3ghz-16gb-512gb-ssd-15-6-rtx2070-super-8gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=G532LWS-AZ141T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-rog-strix-core-i7-gorseli-108901_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                              title="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-rog-strix-core-i7-gorseli-108901_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                              title="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-rog-strix-core-i7-gorseli-108901_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                              title="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                              title="ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB SSD-15.6&#39;&#39;-RTX2070 SUPER 8GB-W10"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ROG STRIX CORE İ7 10875H 2.3GHZ-16GB-512GB
                          SSD-15.6''-RTX2070 SUPER 8GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">20.141</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-ga401iv-amd-ryzen-9-4900hs-2-3ghz-16gb-ram-512gb-ssd-14-rtx2060-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=GA401IV-HA127T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108498_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                              title="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108498_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                              title="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108498_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                              title="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                              title="ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB SSD-14&#39;&#39;-RTX2060 6GB-W10"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ZEPHYRUS G14 AMD RYZEN 9 4900HS 2.3GHZ-16GB-512GB
                          SSD-14''-RTX2060 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">21.174</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/acer-predator-core-i7-10750h-2-6ghz-32gb-1tb-256ssd-17-3-rtx-2070-8gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=PH317-54-72FS"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110353_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ACER PREDATOR CORE
                            İ7 10750H 2.6GHZ-32GB-1TB+256SSD-17.3 -rtx
                            2070 8gb-w10"
                              title="ACER PREDATOR CORE İ7
                            10750H 2.6GHZ-32GB-1TB+256SSD-17.3"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110353_small.jpg"
                              media="(min-width: 600px)"
                              alt="ACER PREDATOR CORE
                            İ7 10750H 2.6GHZ-32GB-1TB+256SSD-17.3 -rtx
                            2070 8gb-w10"
                              title="ACER PREDATOR CORE İ7 10750H
                            2.6GHZ-32GB-1TB+256SSD-17.3 8gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110353_small.jpg"
                              media="(min-width: 300px)"
                              alt="ACER PREDATOR CORE
                            İ7 10750H 2.6GHZ-32GB-1TB+256SSD-17.3 -rtx
                            2070 8gb-w10"
                              title="ACER PREDATOR CORE İ7
                            10750H 2.6GHZ-32GB-1TB+256SSD-17.3"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ACER
                            PREDATOR CORE İ7 10750H 2.6GHZ-32GB-1TB+256SSD-17.3
                            -rtx 2070 8gb-w10"
                              title="ACER PREDATOR
                            CORE İ7 10750H
                            2.6GHZ-32GB-1TB+256SSD-17.3"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ACER PREDATOR CORE İ7 10750H
                          2.6GHZ-32GB-1TB+256SSD-17.3"-RTX 2070 8GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">18.727</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-g732lxs-core-i7-10875h-2-3ghz-16gb-512gb-ssd-17-3-rtx2080-8gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=G732LXS-HG098T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108484_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                              title="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108484_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                              title="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-108484_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                              title="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                              title="ASUS ROG STRIX SCAR 17 CORE İ7 10875H 2.3GHZ-16GB-512GB-17.3&#39;&#39;-RTX2080 SUPER 8GB"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ROG STRIX SCAR 17 CORE İ7 10875H
                          2.3GHZ-16GB-512GB-17.3''-RTX2080 SUPER 8GB
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">26.855</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/acer-predator-intel-core-i5-8300h-2-3ghz-16gb-1tb-256ssd-17-3-gtx1660-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=PH317-52-50VK"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/TeoriV2-104062-3_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ACER PREDATOR CORE
                            İ5 8300H 2.3GHZ-16GB-1TB+128SSD-17.3 -gtx1060
                            6gb-w10"
                              title="ACER PREDATOR CORE İ5 8300H
                            2.3GHZ-16GB-1TB+128SSD-17.3"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/TeoriV2-104062-3_small.jpg"
                              media="(min-width: 600px)"
                              alt="ACER PREDATOR CORE
                            İ5 8300H 2.3GHZ-16GB-1TB+128SSD-17.3 -gtx1060
                            6gb-w10"
                              title="ACER PREDATOR CORE İ5 8300H
                            2.3GHZ-16GB-1TB+128SSD-17.3 6gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/TeoriV2-104062-3_small.jpg"
                              media="(min-width: 300px)"
                              alt="ACER PREDATOR CORE
                            İ5 8300H 2.3GHZ-16GB-1TB+128SSD-17.3 -gtx1060
                            6gb-w10"
                              title="ACER PREDATOR CORE İ5 8300H
                            2.3GHZ-16GB-1TB+128SSD-17.3"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ACER
                            PREDATOR CORE İ5 8300H 2.3GHZ-16GB-1TB+128SSD-17.3
                            -gtx1060 6gb-w10"
                              title="ACER PREDATOR CORE İ5
                            8300H 2.3GHZ-16GB-1TB+128SSD-17.3"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ACER PREDATOR CORE İ5 8300H
                          2.3GHZ-16GB-1TB+128SSD-17.3"-GTX1060 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">12.908</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-ux534ftc-core-i7-10510u-1-8ghz-16gb-512gb-ssd-15-6-gtx1650-4gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=UX534FTC-A9076T"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-105438_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ZENBOOK 15
                            UX534 CORE İ7 10510U 1.8GHZ-16GB-512GB SSD-15.6
                            -gtx1650 4gb-w10"
                              title="ASUS ZENBOOK 15 UX534
                            CORE İ7 10510U 1.8GHZ-16GB-512GB SSD-15.6"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-105438_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ZENBOOK 15
                            UX534 CORE İ7 10510U 1.8GHZ-16GB-512GB SSD-15.6
                            -gtx1650 4gb-w10"
                              title="ASUS ZENBOOK 15 UX534
                            CORE İ7 10510U 1.8GHZ-16GB-512GB SSD-15.6
                            4gb-w10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/TeoriV2-105438_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ZENBOOK 15
                            UX534 CORE İ7 10510U 1.8GHZ-16GB-512GB SSD-15.6
                            -gtx1650 4gb-w10"
                              title="ASUS ZENBOOK 15 UX534
                            CORE İ7 10510U 1.8GHZ-16GB-512GB SSD-15.6"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS
                            ZENBOOK 15 UX534 CORE İ7 10510U 1.8GHZ-16GB-512GB
                            SSD-15.6 -gtx1650 4gb-w10"
                              title="ASUS
                            ZENBOOK 15 UX534 CORE İ7 10510U 1.8GHZ-16GB-512GB
                            SSD-15.6"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ZENBOOK 15 UX534 CORE İ7 10510U 1.8GHZ-16GB-512GB
                          SSD-15.6"-GTX1650 4GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">16.544</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/acer-predator-core-i7-10750h-2-6ghz-16gb-512gb-ssd-17-3-rtx-2070-8gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=PH317-54-7595"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110354_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ACER PREDATOR CORE
                            İ7 10750H 2.6GHZ-16GB-512GB SSD-17.3 -rtx
                            2060 6gb-w10"
                              title="ACER PREDATOR CORE İ7
                            10750H 2.6GHZ-16GB-512GB SSD-17.3"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110354_small.jpg"
                              media="(min-width: 600px)"
                              alt="ACER PREDATOR CORE
                            İ7 10750H 2.6GHZ-16GB-512GB SSD-17.3 -rtx
                            2060 6gb-w10"
                              title="ACER PREDATOR CORE İ7 10750H
                            2.6GHZ-16GB-512GB SSD-17.3 6gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110354_small.jpg"
                              media="(min-width: 300px)"
                              alt="ACER PREDATOR CORE
                            İ7 10750H 2.6GHZ-16GB-512GB SSD-17.3 -rtx
                            2060 6gb-w10"
                              title="ACER PREDATOR CORE İ7
                            10750H 2.6GHZ-16GB-512GB SSD-17.3"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ACER
                            PREDATOR CORE İ7 10750H 2.6GHZ-16GB-512GB SSD-17.3
                            -rtx 2060 6gb-w10"
                              title="ACER PREDATOR
                            CORE İ7 10750H 2.6GHZ-16GB-512GB SSD-17.3"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ACER PREDATOR CORE İ7 10750H 2.6GHZ-16GB-512GB
                          SSD-17.3"-RTX 2060 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">16.229</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-rog-strix-g15-g512-core-i7-10875h-2-3ghz-16gb-1tb-ssd-15-6-rtx2070-8gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=G512LW-HN168T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/109602_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10875H 2.3GHZ-16GB-1TB SSD-15.6
                            -rtx2070 8gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 CORE İ7 10875H 2.3GHZ-16GB-1TB SSD-15.6"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/109602_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10875H 2.3GHZ-16GB-1TB SSD-15.6
                            -rtx2070 8gb-w10"
                              title="ASUS ROG STRIX G15 G512
                            CORE İ7 10875H 2.3GHZ-16GB-1TB SSD-15.6
                            8gb-w10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/109602_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10875H 2.3GHZ-16GB-1TB SSD-15.6
                            -rtx2070 8gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 CORE İ7 10875H 2.3GHZ-16GB-1TB SSD-15.6"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS
                            ROG STRIX G15 G512 CORE İ7 10875H 2.3GHZ-16GB-1TB
                            SSD-15.6 -rtx2070 8gb-w10"
                              title="ASUS ROG
                            STRIX G15 G512 CORE İ7 10875H 2.3GHZ-16GB-1TB
                            SSD-15.6"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ROG STRIX G15 G512 CORE İ7 10875H 2.3GHZ-16GB-1TB
                          SSD-15.6"-RTX2070 8GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">19.108</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/lenovo-legion-3-core-i7-10750h-2-6ghz-16gb-1tb-256ssd-15-6-gtx1660ti-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=81Y600FJTX"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/lenovo-legion-5-core-i7-gorseli-109143_small.jpg"
                              media="(min-width: 1000px)"
                              alt="LENOVO LEGION 5
                            CORE İ7 10750H 2.6GHZ-16GB-1TB+256SSD-15.6
                            -gtx1660ti 6gb-w10"
                              title="LENOVO LEGION 5
                            CORE İ7 10750H 2.6GHZ-16GB-1TB+256SSD-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/lenovo-legion-5-core-i7-gorseli-109143_small.jpg"
                              media="(min-width: 600px)"
                              alt="LENOVO LEGION 5 CORE
                            İ7 10750H 2.6GHZ-16GB-1TB+256SSD-15.6 -gtx1660ti
                            6gb-w10"
                              title="LENOVO LEGION 5 CORE İ7 10750H
                            2.6GHZ-16GB-1TB+256SSD-15.6 6gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/lenovo-legion-5-core-i7-gorseli-109143_small.jpg"
                              media="(min-width: 300px)"
                              alt="LENOVO LEGION 5 CORE
                            İ7 10750H 2.6GHZ-16GB-1TB+256SSD-15.6 -gtx1660ti
                            6gb-w10"
                              title="LENOVO LEGION 5 CORE İ7 10750H
                            2.6GHZ-16GB-1TB+256SSD-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="LENOVO LEGION 5 CORE İ7 10750H
                            2.6GHZ-16GB-1TB+256SSD-15.6 -gtx1660ti
                            6gb-w10"
                              title="LENOVO LEGION 5 CORE İ7 10750H
                            2.6GHZ-16GB-1TB+256SSD-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          LENOVO LEGION 5 CORE İ7 10750H
                          2.6GHZ-16GB-1TB+256SSD-15.6"-GTX1660TI 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">16.499</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/dell-alienware-17-core-i7-9750h-2-6ghz-16gb-1tb-ssd-17-3-rtx2060-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=AWM17-R2-6L75W161N"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/dell/thumb/TeoriV2-106788_small.jpg"
                              media="(min-width: 1000px)"
                              alt="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                              title="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/dell/thumb/TeoriV2-106788_small.jpg"
                              media="(min-width: 600px)"
                              alt="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                              title="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/dell/thumb/TeoriV2-106788_small.jpg"
                              media="(min-width: 300px)"
                              alt="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                              title="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                              title="DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB SSD-17.3&#39;&#39;-RTX2060 6GB-W10"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          DELL ALIENWARE 17 CORE İ7 9750H 2.6GHZ-16GB-1TB
                          SSD-17.3''-RTX2060 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">27.271</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/dell-xps-15-core-i7-9750h-2-6ghz-16gb-ram-1tb-ssd-gtx1650-4gb-15-6-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=7590-FS75W161N"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/dell/thumb/TeoriV2-106785_small.jpg"
                              media="(min-width: 1000px)"
                              alt="DELL XPS 15 CORE İ7
                            9750H 2.6GHZ-16GB RAM-1TB SSD-GTX1650 4GB-15.6
                            w10"
                              title="DELL XPS 15 CORE İ7 9750H 2.6GHZ-16GB
                            RAM-1TB SSD-GTX1650 4GB-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/dell/thumb/TeoriV2-106785_small.jpg"
                              media="(min-width: 600px)"
                              alt="DELL XPS 15 CORE İ7
                            9750H 2.6GHZ-16GB RAM-1TB SSD-GTX1650 4GB-15.6
                            w10"
                              title="DELL XPS 15 CORE İ7 9750H 2.6GHZ-16GB
                            RAM-1TB SSD-GTX1650 4GB-15.6 w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/dell/thumb/TeoriV2-106785_small.jpg"
                              media="(min-width: 300px)"
                              alt="DELL XPS 15 CORE İ7
                            9750H 2.6GHZ-16GB RAM-1TB SSD-GTX1650 4GB-15.6
                            w10"
                              title="DELL XPS 15 CORE İ7 9750H 2.6GHZ-16GB
                            RAM-1TB SSD-GTX1650 4GB-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="DELL
                            XPS 15 CORE İ7 9750H 2.6GHZ-16GB RAM-1TB SSD-GTX1650
                            4GB-15.6 w10"
                              title="DELL XPS 15 CORE İ7 9750H
                            2.6GHZ-16GB RAM-1TB SSD-GTX1650 4GB-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          DELL XPS 15 CORE İ7 9750H 2.6GHZ-16GB RAM-1TB
                          SSD-GTX1650 4GB-15.6"W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">19.864</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/acer-nitro-5-core-i7-9750h-2-6ghz-16gb-1tb-128gb-ssd-15-6-gtx1660ti-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=AN515-54-74XH"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/TeoriV2-105818-5_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ACER NITRO 5 CORE
                            İ7 9750H 2.6GHZ-16GB-1TB+128GB SSD-15.6
                            -gtx1660ti 6gb-w10"
                              title="ACER NITRO 5 CORE
                            İ7 9750H 2.6GHZ-16GB-1TB+128GB SSD-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/TeoriV2-105818-5_small.jpg"
                              media="(min-width: 600px)"
                              alt="ACER NITRO 5 CORE İ7
                            9750H 2.6GHZ-16GB-1TB+128GB SSD-15.6 -gtx1660ti
                            6gb-w10"
                              title="ACER NITRO 5 CORE İ7 9750H
                            2.6GHZ-16GB-1TB+128GB SSD-15.6 6gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/TeoriV2-105818-5_small.jpg"
                              media="(min-width: 300px)"
                              alt="ACER NITRO 5 CORE İ7
                            9750H 2.6GHZ-16GB-1TB+128GB SSD-15.6 -gtx1660ti
                            6gb-w10"
                              title="ACER NITRO 5 CORE İ7 9750H
                            2.6GHZ-16GB-1TB+128GB SSD-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ACER
                            NITRO 5 CORE İ7 9750H 2.6GHZ-16GB-1TB+128GB
                            SSD-15.6 -gtx1660ti 6gb-w10"
                              title="ACER
                            NITRO 5 CORE İ7 9750H 2.6GHZ-16GB-1TB+128GB
                            SSD-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ACER NITRO 5 CORE İ7 9750H 2.6GHZ-16GB-1TB+128GB
                          SSD-15.6"-GTX1660TI 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">13.395</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-a15-tuf-fa506iu-amd-r9-4900h-3-0ghz-16gb-1tb-ssd-15-6-gtx1660ti-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=FA506IU-BQ289T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-tuf-a15-fa506-amd-r9-gorseli-108879_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                              title="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-tuf-a15-fa506-amd-r9-gorseli-108879_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                              title="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                            />
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-tuf-a15-fa506-amd-r9-gorseli-108879_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                              title="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                            />
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                              title="ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB SSD-15.6&#39;&#39;-GTX1660TI 6GB-W10"
                            />
                          </picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS TUF A15 FA506 AMD R9 4900H 3.0GHZ-16GB-1TB
                          SSD-15.6''-GTX1660TI 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">14.962</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/lenovo-creator-5-core-i7-10750h-2-6ghz-16gb-512ssd-15-6-gtx1650ti-4gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=82D4002MTX"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/109448_small.jpg"
                              media="(min-width: 1000px)"
                              alt="LENOVO IP CREATOR 5
                            CORE İ7 10750H 2.6GHZ-16GB-512SSD-15.6
                            -gtx1650ti 4gb-w10"
                              title="LENOVO IP CREATOR 5
                            CORE İ7 10750H 2.6GHZ-16GB-512SSD-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/109448_small.jpg"
                              media="(min-width: 600px)"
                              alt="LENOVO IP CREATOR 5
                            CORE İ7 10750H 2.6GHZ-16GB-512SSD-15.6
                            -gtx1650ti 4gb-w10"
                              title="LENOVO IP CREATOR 5
                            CORE İ7 10750H 2.6GHZ-16GB-512SSD-15.6 4gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/lenovo/thumb/109448_small.jpg"
                              media="(min-width: 300px)"
                              alt="LENOVO IP CREATOR 5
                            CORE İ7 10750H 2.6GHZ-16GB-512SSD-15.6
                            -gtx1650ti 4gb-w10"
                              title="LENOVO IP CREATOR 5
                            CORE İ7 10750H 2.6GHZ-16GB-512SSD-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="LENOVO IP CREATOR 5 CORE İ7 10750H
                            2.6GHZ-16GB-512SSD-15.6 -gtx1650ti 4gb-w10"
                              title="LENOVO IP CREATOR 5 CORE İ7 10750H
                            2.6GHZ-16GB-512SSD-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          LENOVO IP CREATOR 5 CORE İ7 10750H
                          2.6GHZ-16GB-512SSD-15.6"-GTX1650TI 4GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">14.999</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/asus-rog-strix-g15-g512-core-i7-10750h-2-6ghz-8gb-512gb-15-6-gtx1660ti-6gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=G512LU-HN185T-Gaming"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-rog-strix-g15-g512-gorseli-109294-1_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-8GB-512GB-15.6
                            -gtx1660ti 6gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-8GB-512GB-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-rog-strix-g15-g512-gorseli-109294-1_small.jpg"
                              media="(min-width: 600px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-8GB-512GB-15.6
                            -gtx1660ti 6gb-w10"
                              title="ASUS ROG STRIX G15 G512
                            CORE İ7 10750H 2.6GHZ-8GB-512GB-15.6 6gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/asus/thumb/asus-rog-strix-g15-g512-gorseli-109294-1_small.jpg"
                              media="(min-width: 300px)"
                              alt="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-8GB-512GB-15.6
                            -gtx1660ti 6gb-w10"
                              title="ASUS ROG STRIX G15
                            G512 CORE İ7 10750H 2.6GHZ-8GB-512GB-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ASUS
                            ROG STRIX G15 G512 CORE İ7 10750H
                            2.6GHZ-8GB-512GB-15.6 -gtx1660ti 6gb-w10"
                              title="ASUS ROG STRIX G15 G512 CORE İ7 10750H
                            2.6GHZ-8GB-512GB-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ASUS ROG STRIX G15 G512 CORE İ7 10750H
                          2.6GHZ-8GB-512GB-15.6"-GTX1660TI 6GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">13.943</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item"
                  style="width: 262.4px; margin-right: 6px;"
                >
                  <div class="item ss">
                    <div class="product-list product-list--fourth">
                      <div class="product-list__image-safe">
                        <a
                          href="https://www.vatanbilgisayar.com/acer-nitro-5-core-i5-9300h-2-4ghz-8gb-1tb-128gb-ssd-15-6-gtx1650-4gb-w10.html?OM.zn=alternative_products-w2&amp;OM.zpc=AN515-54-53XY"
                          class="product-list__image-safe-link vl-product-alter"
                        >
                          <picture>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110352_small.jpg"
                              media="(min-width: 1000px)"
                              alt="ACER NITRO 5 CORE
                            İ5 9300H 2.4GHZ-8GB-1TB+128GB SSD-15.6 -gtx1650
                            4gb-w10"
                              title="ACER NITRO 5 CORE İ5 9300H
                            2.4GHZ-8GB-1TB+128GB SSD-15.6"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110352_small.jpg"
                              media="(min-width: 600px)"
                              alt="ACER NITRO 5 CORE İ5
                            9300H 2.4GHZ-8GB-1TB+128GB SSD-15.6 -gtx1650
                            4gb-w10"
                              title="ACER NITRO 5 CORE İ5 9300H
                            2.4GHZ-8GB-1TB+128GB SSD-15.6 4gb-w10"/>
                            <source
                              srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/acer/thumb/110352_small.jpg"
                              media="(min-width: 300px)"
                              alt="ACER NITRO 5 CORE İ5
                            9300H 2.4GHZ-8GB-1TB+128GB SSD-15.6 -gtx1650
                            4gb-w10"
                              title="ACER NITRO 5 CORE İ5 9300H
                            2.4GHZ-8GB-1TB+128GB SSD-15.6"/>
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                              class="img-responsive product-list__image"
                              alt="ACER
                            NITRO 5 CORE İ5 9300H 2.4GHZ-8GB-1TB+128GB SSD-15.6
                            -gtx1650 4gb-w10"
                              title="ACER NITRO 5 CORE İ5
                            9300H 2.4GHZ-8GB-1TB+128GB SSD-15.6"
                          /></picture>
                        </a>
                      </div>
                      <div class="product-list__content">
                        <div class="product-list__product-name">
                          ACER NITRO 5 CORE İ5 9300H 2.4GHZ-8GB-1TB+128GB
                          SSD-15.6"-GTX1650 4GB-W10
                        </div>
                        <div class="product-list__cost">
                          <span class="product-list__price">9.732</span
                          ><span class="product-list__currency"> TL</span>
                        </div>
                      </div>
                      <div class="product-list__comp"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-nav">
              <button
                type="button"
                role="presentation"
                class="owl-prev disabled"
              >
                <span
                  class="btn-carousel-controls icon-angle-left"
                ></span></button
              ><button type="button" role="presentation" class="owl-next">
                <span class="btn-carousel-controls icon-angle-right"></span>
              </button>
            </div>
            <div class="owl-dots">
              <button role="button" class="owl-dot active"><span></span></button
              ><button role="button" class="owl-dot"><span></span></button
              ><button role="button" class="owl-dot"><span></span></button
              ><button role="button" class="owl-dot"><span></span></button>
            </div>
          </div>
        </div>
      </div>
      <Comments :productId="productId"/>
<!--Comments buraya gelecek-->
    </main>
    <FancyBoxContainer :productId="productId" v-show="showFancy" @show-time="showFancy=$show"/>
  </body>
</template>

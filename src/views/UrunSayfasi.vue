<script>
// @ is an alias to /src

import Products from "@/Products";
import Comments from "@/components/Comments";
export default {
  name: "UrunSayfasi",
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
    Comments
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
              onclick="AddToBasket(110768,17793 ,3,[])"
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

      <div class="container-fluid wrapper-linear">
        <div class="row">
          <div class="col-xs-12">
            <div class="global-container top-pd-update linear-gradient">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pd-left">
                  <div class="hidden-sm hidden-md hidden-lg wrapper-pd-buttons">
                    <a
                      id="favorite-button"
                      data-message="Yukarıdaki Ürünün Fiyatı Düşünce Size Haber Verilecek"
                      data-producttitle='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                      data-checkfav="/ProductDetail/CheckFavorite"
                      href="javascript:void(0)"
                      data-productid="110768"
                      data-url="/ProductDetail/AddProductToFavorites"
                      data-type="2"
                      class="wrapper-detail-icon favoriteButton"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Favoriye Ekle"
                    >
                      <span class="icon-heart-alt"></span>
                    </a>
                    <a
                      class="wrapper-detail-icon icon-exchange addProductToCompare"
                      href="javascript:void(0);"
                      data-name='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                      data-code=""
                      data-url="dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
                      data-category="PC_POR"
                      data-id="110768"
                      data-price="10.018"
                      data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                      data-placement="top"
                      title="Karşılaştır"
                    >
                    </a>
                    <a
                      class="wrapper-detail-icon socialShareBtn "
                      href="javascript:void(0);"
                      title="Paylaş"
                    >
                      <span class="icon-share2"></span>
                    </a>
                    <div class="social-share hide">
                      <a
                        href="javascript:socialShare(&#39;fb&#39;, &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                        class="icon-facebook"
                      ></a>
                      <a
                        href="javascript:socialShare(&#39;tt&#39;,  &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                        class="icon-twitter"
                      ></a>
                      <a
                        href="javascript:socialShare(&#39;wp&#39;, &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                        class="icon-whatsapp"
                      ></a>
                    </div>
                  </div>
                  <div class="person-count">
                    <span class="icon-view"></span
                    ><span
                      >Bu Ürünü Şuan <span id="vlVisitorCount">11</span> Kişi
                      İnceliyor</span
                    ><span class="icon-zoom lightbox-item"></span>
                  </div>
                  <div class="clearfix">
                    <div
                      class="owl-wrapper owl-wrapper-product-detail"
                      data-video=""
                    >
                      <div
                        id="product-detail"
                        class="owl-carousel owl-theme owl-product-detail owl-loaded owl-drag"
                        data-slider-id="1"
                      >
                        <div class="owl-stage-outer">
                          <div
                            class="owl-stage"
                            style="transform: translate3d(-1887px, 0px, 0px); transition: all 0s ease 0s; width: 7548px;"
                          >
                            <div
                              class="owl-item cloned"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_small.jpg"&gt;&lt;/div&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              src=""
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item cloned"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_small.jpg"&gt;&lt;/div&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              src=""
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item cloned"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_small.jpg"&gt;&lt;/div&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item active"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"/&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                          <!--Resim-->
                                            <img
                                              class="owl-lazy img-responsive wrapper-main-slider__image lazy-init"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              :src="productData.images[currentimg]"
                                              style="opacity: 1;"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_small.jpg"/&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_small.jpg"/&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_small.jpg"/&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_small.jpg"/&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_small.jpg"/&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item cloned"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"&gt;&lt;/div&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                                              style="opacity: 1;"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item cloned"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_small.jpg"&gt;&lt;/div&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="owl-item cloned"
                              style="width: 623px; margin-right: 6px;"
                            >
                              <div
                                class="item"
                                data-thumb='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_small.jpg"&gt;&lt;/div&gt;'
                              >
                                <div class="container-fluid">
                                  <div class="row row-no-gutters">
                                    <div
                                      class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    >
                                      <div class="wrapper-main-slider">
                                        <div
                                          class="wrapper-main-slider__wrapper-image"
                                        >
                                          <a
                                            class="lightbox-item"
                                            href="javascript:void(0);"
                                          >
                                            <img
                                              data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                              class="owl-lazy img-responsive wrapper-main-slider__image"
                                              alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                              title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="owl-nav">
                          <button
                            type="button"
                            role="presentation"
                            class="owl-prev"
                          >
                            <span
                              class="icon-angle-left"
                              aria-hidden="true"
                            ></span></button
                          ><button
                            type="button"
                            role="presentation"
                            class="owl-next"
                          >
                            <span
                              class="icon-angle-right"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                        <div class="owl-dots">
                          <button role="button" class="owl-dot active">
                            <span></span></button
                          ><button role="button" class="owl-dot">
                            <span></span></button
                          ><button role="button" class="owl-dot">
                            <span></span></button
                          ><button role="button" class="owl-dot">
                            <span></span></button
                          ><button role="button" class="owl-dot">
                            <span></span></button
                          ><button role="button" class="owl-dot">
                            <span></span>
                          </button>
                        </div>
                       <!--Vfor ile çoğaltılacak-->
                        <div class="owl-t-container">
                          <button  v-for="(image,index) in productData.images" v-bind:key="image" @mouseover="updateimg(index)" class="owl-t-container-item active">
                            <img :src="image"
                            /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wrapper-product-brand">
                    <a
                      href="https://www.vatanbilgisayar.com/dell/oyun-bilgisayari"
                    >
                      <img
                        v-bind:src="productData.markalogosu"
                        :alt="productData.code"
                        :title="productData.code"
                      />
                      <span></span>
                    </a>
                    <div class="intel-logo">
                      <img
                        src="https://www.vatanbilgisayar.com/UPLOAD/GENERAL/intel/intel-10300H.jpg"
                      />
                    </div>
                  </div>
                  <div class="container-fluid wrapper-product-detail-info">
                    <div class="row">
                      <ul class="pdetail-property-list">
                        <li data-count="0">
                          <span class="property-head">Pil Hücre Sayısı: </span>
                          <span>3 Hücreli</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head">Pil Kimyası: </span>
                          <span>Lityum İyon</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head">Güvenlik: </span>
                          <span>Kensington kilidi</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head">İşlemci Ön Bellek: </span>
                          <span>8 MB</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head">İşlemci Markası: </span>
                          <span>Intel</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head">İşlemci Hızı: </span>
                          <span>2.5 GHz Turbo Boost 4.5 GHz</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head">İşlemci Numarası: </span>
                          <span>10300H</span>
                        </li>
                        <li data-count="0">
                          <span class="property-head"
                            >İşlemci Teknolojisi:
                          </span>
                          <span>Core i5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul
                    class="wrapper-product-tab-list hidden-xs hidden-sm hidden-md"
                  >
                    <li>
                      <a
                        href="javascript:void(0);"
                        id="allFeatures"
                        onclick="focusTab(&#39;urun-ozellikleri&#39;)"
                      >
                        TÜM ÖZELLİKLER
                      </a>
                    </li>

                    <li>
                      <a
                        href="javascript:void(0);"
                        id="paymentOptions"
                        onclick="focusTab(&#39;odeme-secenekleri&#39;)"
                      >
                        ÖDEME SEÇENEKLERİ
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pd-right">
                  <div class="container-fluid">
                    <div class="row">
                      <div
                        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product-detail"
                      >
                        <div class="product-list__badge-bar">
                          <div class="in-wrapper-condition">
                            <span class="icong-yeniurun"></span
                            ><span class="wrapper-condition__text"
                              >YENİ ÜRÜN</span
                            >
                          </div>
                        </div>
                        <div class="clearfix prod-code-rank">
                          <div class="wrapper-star">
                            <div class="rank-star">
                              <span
                                class="score"
                                id="topAverageRank"
                                style="width: 80%;"
                              ></span>
                            </div>
                            <a
                              href="javascript:void(0);"
                              onclick="focusTab(&#39;yorumlar&#39;)"
                              class="comment-count"
                            >
                              <span>(11)</span>
                            </a>
                          </div>

                          <div
                            class="product-list__product-code pull-left"
                            data-productcode="G315-4B30W85C"
                          >
                            {{ productData.code }} / {{ productData.id }}
                          </div>
                        </div>

                        <div
                          class="product-list__content product-detail-big-price"
                        >
                          <h1 class="product-list__product-name">
                            {{ productData.name }}
                          </h1>

                          <div
                            class="product-list__cost product-list__description"
                          >
                            <h3
                              class="product-list_explanation product-list__description-text"
                            ></h3>
                            <span class="product-list__price">{{
                              productData.cost
                            }}</span>
                            <span class="product-list__currency">TL</span>
                          </div>
                          <a
                            class="installment"
                            onclick="focusTab(&#39;odeme-secenekleri&#39;)"
                            ><u>1.669 TL</u>'den başlayan taksitlerle</a
                          >
                        </div>

                        <div class="choose"></div>
                        <div class="d-table hidden-xs">
                          <div class="d-cell product-button--cell">
                            <button
                              id="add-to-cart-button"
                              onclick="AddToBasket(110768, 17793, 3, [])"
                              class="btn btn-success basketBTN"
                            >
                              <span class="icon-shopping-card"></span>
                              <span>SEPETE EKLE</span>
                            </button>
                          </div>
                          <div class="d-cell product-icon--cell">
                            <a
                              id="fav_Icon"
                              href="javascript:void(0)"
                              data-message="Yukarıdaki Ürünün Fiyatı Düşünce Size Haber Verilecek"
                              data-producttitle='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                              data-type="2"
                              data-productid="110768"
                              data-url="/ProductDetail/AddProductToFavorites"
                              class="wrapper-detail-icon favoriteButton"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Favoriye Ekle"
                            >
                              <span class="icon-heart-alt"></span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-name='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                              data-code=""
                              data-url="dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
                              data-category="PC_POR"
                              data-id="110768"
                              data-price="10.018"
                              data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                              class="wrapper-detail-icon icon-exchange addProductToCompare"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Karşılaştır"
                            >
                            </a>
                            <a
                              class="wrapper-detail-icon icon-share2 socialShareBtn "
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Paylaş"
                            >
                            </a>
                            <div class="social-share hide">
                              <a
                                href="javascript:socialShare(&#39;fb&#39;, &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                                class="icon-facebook"
                              ></a>
                              <a
                                href="javascript:socialShare(&#39;tt&#39;,  &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                                class="icon-twitter"
                              ></a>
                              <a
                                href="javascript:socialShare(&#39;wp&#39;, &#39;DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6W10 - 10.018 TL&#39;); void(0);"
                                class="icon-whatsapp"
                              ></a>
                            </div>
                          </div>
                        </div>
                        <ul class="product-under-list">
                          <li
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Vatanbilgisayar’da sizlere sunulan tüm ürünler Türkiye’deki yetkili ithalatçı ve üretici firmaların garantisi altındadır, Uluslararası markaların sadece Türkiye için üretilen veya özelleştirilen ve yetkili servislerin ülke garantisi sağladığı modelleri sizlere sunulmaktadır."
                          >
                            <span class="icon-warranty"></span>
                            <span>Garanti</span>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              data-name='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                              data-code=""
                              data-url="dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
                              data-category="PC_POR"
                              data-id="110768"
                              data-price="10.018"
                              data-img="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                              class="addProductToCompare"
                            >
                              <span class="icon-exchange"></span>
                              <span>Karşılaştır</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-productid="110768"
                              data-url="/ProductDetail/ShopStockByProductQ"
                              class="stockBTN"
                            >
                              <span class="icon-map-marker-alt"></span>
                              <span>Stoktaki Mağazalar</span>
                            </a>
                          </li>
                          <li
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="Ürünü teslim aldığınız tarihten itibaren 14 gün içerisinde , ön bilgilendirme formunda ve sözleşme metninde yazılı olan usule uyarak ücretsiz iade edebilir veya değiştirebilirsiniz. Cayma bildirimi tarafımıza ulaştığı tarihten itibaren 20 gün içerisinde, ürüne herhangi bir hasar verilmemesi ve eksiksiz teslim edilmesi şartıyla, tercihinize göre ürünü iade alarak bedelini tarafınıza ödemeyi veya ürün bedeli kadar alış veriş kuponu vermeyi taahhüt ederiz. Ancak satın alınan elektronik ürünlerde; sim kart takılması, wifi ile network bağlantı kurulması, kurulum yapılması, sarf malzemesinin kullanılmış olması, koruyucu bantların çıkarılmış olması, aktivasyon yapılması ve kullanıcı yaratılması halinde iade kabul edilmemektedir. Kişisel bakım ürünleri de hijyen kuralları gereği iadeye uygun değildir. Ticari veya mesleki amaçlarla hareket eden tüzel kişi ve / veya kişiler cayma hakkından ve cayma hakkından doğan hiçbir haktan faydalanamaz."
                          >
                            <span class="icon-truck-alt"></span>
                            <span>İade</span>
                          </li>
                        </ul>
                        <div class="discount-prod-detail delivery-options">
                          <div class="discount-head clearfix">
                            <span>Teslimat Seçenekleri</span>
                          </div>
                          <div class="discount-item-wrapper">
                            <div
                              class="delivery-item standart-delivery-item"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="500 tl üzeri siparişleriniz kargo ücretsizdir. Standart teslimat ile verilen siparişler ortalama 2 iş gününde kargoya verilmektedir."
                            >
                              <span class="first-key"
                                >Standart teslimat (<b>ücretsiz</b>):</span
                              >
                              <span>
                                siparişiniz ortalama 2 iş gününde kargoya teslim
                                edilir.</span
                              >
                            </div>
                            <div
                              class="delivery-item"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="Bu ürüne yarın gün içerisinde sahip olmak istiyorsanız, 100 TL ye kadar olan siparişlerinizde 9.90 TL, 100 TL ve 1000 TL arası siparişlerinizde 4.90 TL ye, 1000 TL Üzeri siparişlerinizde ise YARIN TESLİM hizmetinden ücretsiz yararlanabilirsiniz.  Bugün 11:00 - 00:00 arası verdiğiniz siparişler, yarın 22:00&#39;a kadar teslim edilecektir.(3D güvenlik şifresi kullanılmadan verilen siparişlerde bu süre uzayabilmektedir.)"
                            >
                              <span class="first-key">Yarın teslim:</span
                              ><span>
                                11:00'dan itibaren verilen siparişleriniz ertesi
                                gün adresinize teslim edilir.</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="container-fluid product-specs">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="prd-spec-head">Monitör Tipi:</div>
                              <div class="rank-dots">
                                <span class="score" style="width: 60%;"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="prd-spec-head">
                                İşlemci Teknolojisi:
                              </div>
                              <div class="rank-dots">
                                <span class="score" style="width: 80%;"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="prd-spec-head">
                                Ram (Sistem Belleği):
                              </div>
                              <div class="rank-dots">
                                <span class="score" style="width: 80%;"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="prd-spec-head">Disk Kapasitesi:</div>
                              <div class="rank-dots">
                                <span class="score" style="width: 60%;"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="discount-prod-detail">
                          <div class="discount-text clearfix">
                            <span class="icon-arrow-down-percent"></span>
                            <span
                              >Bu ürünle birlikte alabileceğiniz ürünler</span
                            >
                          </div>
                          <div class="discount-item-wrapper">
                            <div class="discount-item">
                              <div class="d-table clearfix">
                                <div class="d-cell">
                                  <a
                                    href="https://www.vatanbilgisayar.com/asus-sdrw-08u9m-u-zendrive-harici-slim-dvd-yazici-siyah.html"
                                  >
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                        alt="ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM DVD-YAZICI - SİYAH"
                                      />
                                    </picture>
                                    <span class="prod-name"
                                      >ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM
                                      DVD-YAZICI - SİYAH</span
                                    >
                                  </a>
                                </div>
                                <div class="d-cell">
                                  <span class="old-price">413,00 TL</span>
                                  <span class="price"
                                    >367,82 <span>TL</span></span
                                  >
                                </div>
                                <div class="d-cell">
                                  <input
                                    type="checkbox"
                                    class="hidden-check bundle-check bundleProcess"
                                    name="chkBndURN_88816"
                                    id="chkBndURN_88816"
                                  />
                                  <label
                                    class="btn btn-add btn-sm pull-right"
                                    for="chkBndURN_88816"
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
                            <div class="discount-item">
                              <div class="d-table clearfix">
                                <div class="d-cell">
                                  <a
                                    href="https://www.vatanbilgisayar.com/online-office-365-personal-1-kullanici-1yil.html"
                                  >
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                        alt="Online Microsoft 365 Bireysel (1 kullanıcı-1yıl) (Dijital İndirilebilir Lisans)"
                                      />
                                    </picture>
                                    <span class="prod-name"
                                      >Online Microsoft 365 Bireysel (1
                                      kullanıcı-1yıl) (Dijital İndirilebilir
                                      Lisans)</span
                                    >
                                  </a>
                                </div>
                                <div class="d-cell">
                                  <span class="old-price">550,00 TL</span>
                                  <span class="price"
                                    >499,02 <span>TL</span></span
                                  >
                                </div>
                                <div class="d-cell">
                                  <input
                                    type="checkbox"
                                    class="hidden-check bundle-check bundleProcess"
                                    name="chkBndURN_84459"
                                    id="chkBndURN_84459"
                                  />
                                  <label
                                    class="btn btn-add btn-sm pull-right"
                                    for="chkBndURN_84459"
                                    >SEÇ</label
                                  >
                                </div>
                                <input
                                  type="hidden"
                                  name="hdnUBN_KOD"
                                  id="hdnUBN_KOD_84459"
                                  class="inputCheck"
                                  value="84459"
                                />
                              </div>
                            </div>
                            <div class="discount-item">
                              <div class="d-table clearfix">
                                <div class="d-cell">
                                  <a
                                    href="https://www.vatanbilgisayar.com/asus-15-6-mb16amt-zenscreen-tasinabilir-ips-full-hd-usb-monitor.html"
                                  >
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                        alt='ASUS 15,6" MB16AMT ZenScreen taşınabilir Dokunmatik IPS FullHD USB monitör'
                                      />
                                    </picture>
                                    <span class="prod-name"
                                      >ASUS 15,6" MB16AMT ZenScreen taşınabilir
                                      Dokunmatik IPS FullHD USB monitör</span
                                    >
                                  </a>
                                </div>
                                <div class="d-cell">
                                  <span class="old-price">4.355,00 TL</span>
                                  <span class="price"
                                    >4.072,10 <span>TL</span></span
                                  >
                                </div>
                                <div class="d-cell">
                                  <input
                                    type="checkbox"
                                    class="hidden-check bundle-check bundleProcess"
                                    name="chkBndURN_104988"
                                    id="chkBndURN_104988"
                                  />
                                  <label
                                    class="btn btn-add btn-sm pull-right"
                                    for="chkBndURN_104988"
                                    >SEÇ</label
                                  >
                                </div>
                                <input
                                  type="hidden"
                                  name="hdnUBN_KOD"
                                  id="hdnUBN_KOD_104988"
                                  class="inputCheck"
                                  value="104988"
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
                        <div class="discount-prod-detail best-comment-view">
                          <div class="discount-text">
                            <div class="wrapper-star best-comment-star">
                              <div class="rank-star">
                                <span class="score" style="width: 80%;"></span>
                              </div>
                            </div>
                            <span class="date best-comment-date"></span>
                          </div>
                          <div class="discount-item-wrapper">
                            <p class="best-comment-text">
                              Ürün yaklaşık bir haftadır elimde ve ısınma
                              problemi var.Klavyenin ortasında bunu
                              hissedebiliyorsunuz.Daha da kötüsü ekranımda ölü
                              pikseller de var.Kesinlikle almayın.
                            </p>
                            <div class="item-all-comment">
                              <span class="d-inline-block"
                                ><strong></strong
                              ></span>
                              <a
                                href="javascript:void(0);"
                                id="allCommentBtn"
                                onclick="focusTab(&#39;yorumlar&#39;)"
                              >
                                <strong class="text-danger"
                                  >Tüm Yorumlar (11)</strong
                                >
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  </body>
</template>

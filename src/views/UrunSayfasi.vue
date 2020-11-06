
<script>
// @ is an alias to /src

import Products from "@/Products"
export default {
  name: "UrunSayfasi",
  computed: {
    productData(){
      return Products.data.find(
        data =>data.id===this.productId
      )
    },
  },
  data() {
    return {
      productId: this.$route.params.id
    };
  }
}
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
                    >DELL</a
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
              <span
                >{{productData.name}}</span
              >
            </a>
          </div>
          <div class="d-cell col-sm-3 col-xs-3 short-price">
            <span class="product-list__price">{{productData.cost}}</span>
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
                                            <img
                                              class="owl-lazy img-responsive wrapper-main-slider__image lazy-init"
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
                        <div class="owl-t-container">
                          <button class="owl-t-container-item active">
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                            /></button
                          ><button class="owl-t-container-item">
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                            /></button
                          ><button class="owl-t-container-item">
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                            /></button
                          ><button class="owl-t-container-item">
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                            /></button
                          ><button class="owl-t-container-item">
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                            /></button
                          ><button class="owl-t-container-item">
                            <img
                              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wrapper-product-brand">
                    <a
                      href="https://www.vatanbilgisayar.com/dell/oyun-bilgisayari"
                    >
                      <img
                        src="https://cdn.vatanbilgisayar.com/Upload//MARKA/dell/dell.jpg"
                        alt="DELL"
                        title="DELL"
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
                            {{productData.code}} / {{productData.id}}
                          </div>
                        </div>

                        <div
                          class="product-list__content product-detail-big-price"
                        >
                          <h1 class="product-list__product-name">
                            {{productData.name}}
                          </h1>

                          <div
                            class="product-list__cost product-list__description"
                          >
                            <h3
                              class="product-list_explanation product-list__description-text"
                            ></h3>
                            <span class="product-list__price">{{productData.cost}}</span>
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

      <div
        class="wrapper-product wrapper-product--light wrapper-product-detail- no-pad-top no-pad-bot visilabs-also-bought-products hide"
      >
        <div class="global-container">
          <div
            class="global-component-header global-component-header--small-gutter clearfix"
          >
            <h3
              class="global-component-header__title global-component-header--small-gutter__title"
            >
              Bu Ürünü Alanlar Bunu da Aldı
            </h3>
          </div>
          <div
            class="owl-carousel owl-carousel-arrows owl-theme owl-loaded owl-drag owl-hidden"
          >
            <div class="owl-stage-outer">
              <div class="owl-stage"></div>
            </div>
            <div class="owl-nav disabled">
              <button type="button" role="presentation" class="owl-prev">
                <span
                  class="btn-carousel-controls icon-angle-left"
                ></span></button
              ><button type="button" role="presentation" class="owl-next">
                <span class="btn-carousel-controls icon-angle-right"></span>
              </button>
            </div>
            <div class="owl-dots disabled"></div>
          </div>
        </div>
      </div>

      <div class="wrap-product-info">
        <div class="product-info-head">
          <div class="global-container">
            <ul class="nav nav-tabs nav-product-detail" role="tablist">
              <li role="presentation" class="active">
                <a
                  href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#genel-bakis"
                  aria-controls="genel-bakis"
                  role="tab"
                  data-toggle="tab"
                  >Ürün Açıklaması</a
                >
              </li>
              <li role="presentation">
                <a
                  href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#urun-ozellikleri"
                  aria-controls="urun-ozellikleri"
                  role="tab"
                  data-toggle="tab"
                  >Teknik Özellikler</a
                >
              </li>
              <li
                id="prdCommentsButton"
                data-url="/ProductDetail/Comments"
                data-productid="110768"
                role="presentation"
              >
                <a
                  href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#yorumlar"
                  aria-controls="messages"
                  role="tab"
                  data-toggle="tab"
                  >Yorumlar (11)</a
                >
              </li>
              <li role="presentation">
                <a
                  href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#odeme-secenekleri"
                  aria-controls="odeme-secenekleri"
                  role="tab"
                  data-toggle="tab"
                  >Ödeme Seçenekleri</a
                >
              </li>
              <li role="presentation">
                <a
                  href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#hata-bildir"
                  aria-controls="settings"
                  role="tab"
                  data-toggle="tab"
                  >Hata Bildir</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="product-info-content">
          <div class="global-container">
            <div class="tab-content tab-pane--tab">
              <div role="tabpanel" class="tab-pane active" id="genel-bakis">
                <div class="spanTabUrunAciklama">
                  <div class="general-features-head row">
                    <div>
                      <img
                        src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                        class="gf-top-img"
                        alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                        title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                      />
                    </div>
                    <div>
                      <h2 class="title title--general">
                        DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB
                        SSD-GTX1650TI 4GB-15.6"W10 ÖZELLİKLERİ
                      </h2>
                    </div>
                  </div>
                  <div class="clearfix row tText">
                    <div class="dText full text">
                      <h2>
                        <span class="c1"
                          ><strong
                            ><span style="font-size:20px;"
                              >DELL G315 NOTEBOOK</span
                            ></strong
                          ></span
                        >
                      </h2>
                      <div>
                        <span style="font-size:16px;"
                          >Kalbinizi çarptıracak aksiyon</span
                        >
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        <span style="font-size:14px;"
                          >Oyunlarda kritik an geldiğinde, sisteminizin turbo
                          beslemesi bir tuşa basmanıza bakar. Dell G3 15'ün
                          klavyesinde Fn+Game Shift tuşuna (İngilizce dışı
                          klavyelerde Fn+F7) bastığınızda devreye giren Game
                          Shift, oyundan ayrılmanıza gerek kalmadan, Alienware
                          Command Center'da dinamik performans modunu açar.
                          Fanlar maksimum hızda çalışarak sisteminizi serin
                          tutarken işlemci de tüm gücünü gösterir. Görevi
                          tamamlayıp ortalığı kontrol altına alınca, Fn+F7'ye
                          bir kez daha basarak sisteminizi normal haline
                          döndürebilirsiniz.</span
                        >
                      </div>
                      <p>
                        <img
                          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                        />
                      </p>
                    </div>
                  </div>
                  <div class="clearfix row tText">
                    <div class="dText full text">
                      <h3>
                        <strong
                          ><span style="font-size:18px;"
                            >Zafer ayrıntıda gizli</span
                          ></strong
                        >
                      </h3>
                      <div>
                        <span style="font-size:14px;"
                          >Çarpıcı grafikler:&nbsp;NVIDIA® GeForce® harici
                          grafik işlemcileri, daha yüksek ayarlarda da cam gibi
                          berrak ve akıcı grafikler üretir. NVIDIA® GeForce® RTX
                          2060'a varan kart seçeneklerinin çoğul akışlı
                          işlemcisi günümüz oyunlarının karmaşık grafiklerini
                          rahatça çalıştırırken, ileri gölgeleme özellikleri ve
                          enerji verimliliği sunar.</span
                        >
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        <span style="font-size:14px;"
                          >Hafızası kuvvetli:&nbsp;Daha hızlı yükleme süreleri,
                          6GB'a kadar GDDR6 özel bellekten güç alan daha sessiz
                          bir sistemle, aksiyonu doruklarında
                          yaşayacaksınız.</span
                        >
                      </div>
                      <div>&nbsp;</div>
                      <p>
                        <img
                          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                        />
                      </p>
                    </div>
                  </div>
                  <div class="clearfix row tCol2">
                    <div class="left image">
                      <img
                        src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                      />
                    </div>

                    <div class="right padding">
                      <div>
                        <span style="font-size:14px;"
                          >Kapılıp gideceksiniz:&nbsp;Opsiyonel, çift taraflı
                          dar çerçeveli 144Hz ekranla oyunlarınızın
                          ayrıntılarından gözlerinizi alamayacaksınız.</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="clearfix row tCol2">
                      <div class="left padding">
                        <h3>
                          <strong
                            ><span style="font-size:18px;"
                              >Hız için yapıldı, güçle donatıldı</span
                            ></strong
                          >
                        </h3>
                        <div class="dText">
                          <div>
                            <span style="font-size:14px;"
                              >Garantili güç:&nbsp;10th Gen Intel® Core™ i7'ye
                              varan işlemci seçenekleriyle oyunlarınızda,
                              videolarınızda, canlı akışlarınızda kesintisiz
                              performans sizi bekliyor.</span
                            >
                          </div>
                          <div>&nbsp;</div>
                          <div>
                            <span style="font-size: 14px;"
                              >Serinliğini bozmaz:&nbsp;Bilgisayarınızın çift
                              fanlı soğutma sistemi, ısıyı etkin bir şekilde
                              dağıtır ve sistem çevikliğini korur.</span
                            >
                          </div>
                          <div>&nbsp;</div>
                          <div>
                            <span style="font-size: 14px;"
                              >Sağlam bir yapı:&nbsp;SSD seçenekli çift sabit
                              disk ve M.2 NVMe PCIe gibi çeşitli depolama
                              seçenekleriyle açılış süreleri daha kısa.</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="right image">
                        <img
                          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                        />
                      </div>
                    </div>
                    <div class="clearfix row tCol2">
                      <div class="left image">
                        <img
                          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                        />
                      </div>

                      <div class="right padding">
                        <h3>
                          <strong
                            ><span style="font-size:18px;"
                              >Göz korkutan stil</span
                            ></strong
                          >
                        </h3>
                        <div class="dText">
                          <div>
                            <span style="font-size:14px;"
                              >Dell G3 15 oyun bilgisayarının yepyeni, iddialı
                              21,6mm tasarımı, göz alıcı renk seçenekleriyle
                              sunuluyor. Eclipse siyah ve Alpine beyaz
                              modellerde mavi oyun dekorlarıyla tarzınızı
                              yansıtın.</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix">
                      <div class="clearfix row tCol2">
                        <div class="left padding">
                          <h3>
                            <strong
                              ><span style="font-size:18px;"
                                >Maceraya hazır</span
                              ></strong
                            >
                          </h3>
                          <div class="dText">
                            <div>
                              <span style="font-size:14px;"
                                >Capcanlı sesler:&nbsp;Oyun tutkunlarına özel
                                nahimic 3D Audio çift hoparlör ile tüm sesler
                                berrak ve canlı.</span
                              >
                            </div>
                            <div>&nbsp;</div>
                            <div>
                              <span style="font-size:14px;"
                                >Işıklar üzerinizde:&nbsp;Opsiyonel ve arkadan
                                RGB aydınlatmalı klavyenin WASD tuşları ve 4
                                bölgeli kasa aydınlatmasını, Alienware Command
                                Center üzerinden kontrol edebilirsiniz.</span
                              >
                            </div>
                            <div>&nbsp;</div>
                            <div>
                              <span style="font-size:14px;"
                                >Oyun videolarında sınır yok:&nbsp;Opsiyonel
                                Killer Wireless 1650 oyun içeriğini
                                hızlandırarak oyunların kesintisiz akmasını
                                sağlar.</span
                              >
                            </div>
                            <div>&nbsp;</div>
                            <div>
                              <span style="font-size:14px;"
                                >Gücü kesilmez:&nbsp;Oyun için bir prize mecbur
                                kalmayın. 51Whr pile sahip sisteminizi her yerde
                                hızla şarj edebilirsiniz.</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="right image">
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="clearfix row tText">
                      <div class="dText full text">
                        <h3>
                          <strong
                            ><span style="font-size:18px;"
                              >Dell G Serisi Alienware Command Center</span
                            ></strong
                          >
                        </h3>
                        <div>
                          <span style="font-size:14px;"
                            >Oyunda üstün:&nbsp;Oyun deneyiminizi iyileştirecek,
                            oyunun ve sistemin en ince ayarlarını
                            değiştirebileceğiniz, sorunları çözen ve zaman
                            kazandıran yenilikçi bir yazılım tasarladık.</span
                          >
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          <span style="font-size:14px;"
                            >Hassas kontroller:&nbsp;Donanım ve yazılım
                            ortamlarınızın tüm kontrolü elinizde. Donanımınızı
                            her bir oyun için farklı ayarlayabilir, alan ve
                            kurulum ayarlarınızı değiştirerek yazılımlarınızın
                            oyun ve diğer işleri kesintiye uğratmadan tam
                            istediğiniz gibi görünmesini ve davranmasını
                            sağlayabilirsiniz.</span
                          >
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          <span style="font-size:14px;"
                            >Ace library science:&nbsp;Kullanımı kolay bir
                            arayüz, sistem ayarlarınızı oyun kitaplığınızla
                            eşleştirerek oyun bilgilerine ulaşmanızı
                            kolaylaştırır. Kumanda panelinden kaynağı nerede
                            olursa olsun tüm oyunlarınıza ulaşabilir, her biri
                            için ince ayarlar yapabilirsiniz. Oluşturacağınız
                            oyun profiliyle oyunu açtığınız her yerde tam
                            istediğiniz ayarları karşınızda bulursunuz.</span
                          >
                        </div>
                        <p>
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                          />
                        </p>
                      </div>
                    </div>
                    <div class="clearfix row tText">
                      <div class="dText full text">
                        <h3>
                          <strong
                            ><span style="font-size:18px;"
                              >Port ve Yuvalar</span
                            ></strong
                          >
                        </h3>
                        <div>
                          <span style="font-size:14px;"
                            >1. Standart SD card | 2. Kulaklık Girişi | 3. 2
                            SuperSpeed USB 2.0 | 4. Üçgen şekilli kilit yuvası |
                            5. Adaptör Girişi | 6. 1660Ti ve üstü: miniDP | 7.
                            HDMI 2.0 | 8. SuperSpeed USB 3.2 Gen 1 | 9.
                            1650/1650Ti: RJ45 Ethernet (1660Ti ve üstü: RJ-45
                            Killer Networks E2500V2 Gigabit Ethernet Port) | 10.
                            1650/1650Ti: USB-C DisplayPort Alt-Mode (1660Ti ve
                            üstü: Thunderbolt™ 3 Port (USB 3.1 Gen 2 Type-C™, 40
                            Gbps Thunderbolt ve DisplayPort destekli)</span
                          >
                        </div>
                        <p>
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix row tText">
                    <div class="dText full text">
                      <h3>
                        <strong
                          ><span style="font-size:18px;"
                            >Boyutlar ve Ağırlık</span
                          ></strong
                        >
                      </h3>
                      <div>
                        <span style="font-size:14px;"
                          >1. Yükseklik: 21,6mm | 2. Genişlik: 365,5mm | 3.
                          Derinlik: 254mm | Başlangıç ağırlığı: 2,34kg*</span
                        >
                      </div>
                      <div>&nbsp;</div>
                      <div>
                        <span style="font-size:12px;"
                          >*** Özellikler, modele ve ürünün bulunduğu ülkeye
                          göre değişebilir.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                class="tab-pane property-tab"
                id="urun-ozellikleri"
              >
                <div class="row masonry-row">
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Teknik Özellikler</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Pil Hücre Sayısı</td>
                            <td>
                              <p>3 Hücreli</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Pil Kimyası</td>
                            <td>
                              <p>Lityum İyon</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Güvenlik</td>
                            <td>
                              <p>Kensington kilidi</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">İşlemci Özellikleri</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>İşlemci Ön Bellek</td>
                            <td>
                              <p>8 MB</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>İşlemci Markası</td>
                            <td>
                              <p>Intel</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/7T1yvCY7PBw/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>İşlemci Hızı</td>
                            <td>
                              <p>2.5 GHz Turbo Boost 4.5 GHz</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>İşlemci Numarası</td>
                            <td>
                              <p>10300H</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>İşlemci Teknolojisi</td>
                            <td>
                              <p>Core i5</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>İşlemci Çekirdek Sayısı</td>
                            <td>
                              <p>4 Çekirdek</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Ram Özellikleri</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Ram (Sistem Belleği)</td>
                            <td>
                              <p>8 GB</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ram Tipi</td>
                            <td>
                              <p>DDR4</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Ekran Özellikleri</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Full HD</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Dokunmatik</td>
                            <td>
                              <p>Yok</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>IPS</td>
                            <td>
                              <p>Yok</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>TN</td>
                            <td>
                              <p>Yok</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>LCD</td>
                            <td>
                              <p>Yok</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>HD</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ekran Özellikleri</td>
                            <td>
                              <p>Full HD</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ekran Boyutu</td>
                            <td>
                              <p>15.6 inch</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Çözünürlük (Piksel)</td>
                            <td>
                              <p>1920 x 1080</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ekran Yenileme Hızı</td>
                            <td>
                              <p>120 Hz</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Monitör Tipi</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>LED</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Ekran kartı</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Ekran Kartı Tipi</td>
                            <td>
                              <p>Paylaşımsız</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ekran Kartı Hafızası</td>
                            <td>
                              <p>4 GB</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">HDD Özellikleri</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Disk Kapasitesi</td>
                            <td>
                              <p>512 GB</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/QlI6Omchadg/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Disk Türü</td>
                            <td>
                              <p>SSD</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Grafik Kart</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Ekran Kartı Chipseti</td>
                            <td>
                              <p>GTX 1650Ti</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ekran Kartı Chipset Marka</td>
                            <td>
                              <p>NVIDIA®</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/dWNPN7Pe87M/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Özellikleri</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Ram Hafıza Bus Hızı</td>
                            <td>
                              <p>2933 MHz</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">
                      Bağlantı Özellikleri + Portlar
                    </h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>HDMI</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Mini Displayport</td>
                            <td>
                              <p>Yok</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Type-C USB</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Ethernet</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Displayport</td>
                            <td>
                              <p>Yok</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>USB</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Wi-Fi</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>SD Kart Yuvası</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bluetooth</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bağlantı Özellikleri</td>
                            <td>
                              <p>USB 3.2 Type-C Gen 2</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bağlantı Özellikleri</td>
                            <td>
                              <p>SD Kart Yuvası</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bağlantı Özellikleri</td>
                            <td>
                              <p>USB 2.0</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/LmVgLbDUoio/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bağlantı Özellikleri</td>
                            <td>
                              <p>USB 3.2 (Gen 1)</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bağlantı Özellikleri</td>
                            <td>
                              <p>Bluetooth</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/KoDQyJlljZU/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Bağlantı Özellikleri</td>
                            <td>
                              <p>HDMI</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/vqbFJ2kDsqk/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Güç</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Pil Ömrü</td>
                            <td>
                              <p>8 Saate Kadar.</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Multimedya</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Parmak İzi Okuyucu</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Kamera</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Multimedya Özellikler</td>
                            <td>
                              <p>Kamera</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Kulaklık Çıkışı</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Multimedya Özellikler</td>
                            <td>
                              <p>Kart Okuyucu</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Kasa</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Ağırlık</td>
                            <td>
                              <p>2,34 kg</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Monitör</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Monitör Tipi</td>
                            <td>
                              <p>Full HD</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Diğer</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Kullanım Amacı</td>
                            <td>
                              <p>Oyun</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Kullanım Amacı</td>
                            <td>
                              <p>Tasarım ve Programlama</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Aydınlatmalı Klavye</td>
                            <td>
                              <p>Var</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Optik Sürücü</td>
                            <td>
                              <p>Yok</p>
                              <p>
                                <a
                                  data-fancybox=""
                                  href="http://www.youtube.com/embed/pKzziEnVSHQ/?autoplay=1"
                                  ><span class="icon-play-circle-alt"></span
                                  ><span>&nbsp; İzle</span></a
                                >
                              </p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Üretici Part Numarası</td>
                            <td>
                              <p>G315-4B30W85C</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">Genel Özellikler</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>Renk</td>
                            <td>
                              <p>SIYAH</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Menşei</td>
                            <td>
                              <p>Çin</p>
                              <p></p>
                            </td>
                          </tr>
                          <tr data-count="0">
                            <td>Garanti</td>
                            <td>
                              <p>24</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 property-tab-item"
                  >
                    <h3 class="title title--feature">İşletim Sistemi</h3>
                    <div class="product-feature">
                      <table class="product-table">
                        <tbody>
                          <tr data-count="0">
                            <td>İşletim Sistemi</td>
                            <td>
                              <p>Windows 10</p>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="yorumlar">
                <div class="tab-panel">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h4 class="tab-pane--title">
                          Bu ürünle toplam
                          <a
                            href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#"
                            >11 yorum</a
                          >
                          yapıldı.
                        </h4>
                        <form
                          action="https://www.vatanbilgisayar.com/ProductDetail/PostComment?Length=13"
                          data-ajax="true"
                          data-ajax-success="showMessage(data);if(data==&#39;Yorumunuz Gönderildi.&#39;){$(&#39;input[type = text], textarea&#39;).val(&#39;&#39;);$(&#39;.rank-item&#39;).removeClass(&#39;selected&#39;)}"
                          id="comment-with-login"
                          method="post"
                          style="display: none;"
                        >
                          <input
                            name="__RequestVerificationToken"
                            type="hidden"
                            value="GrAOlKpVZxHV6HTYuuIO954Qt5yAtyWF3VykqjlOdlHtcuPzBzW3vxq6t3CkBfuhjZE-RF31M6KB7hAzVZmINuf1dp01"
                          />
                          <div class="tab-pane--scoring">
                            <span class="tab-pane--sub-title"
                              >Bu Ürünü Puanlayın</span
                            >

                            <div class="wrapper-star wrapper-star--inline">
                              <div class="rank-star-apply">
                                <a
                                  href="javascript:void(0);"
                                  class="rank-item icon-star star rank-1"
                                  rel="5"
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="rank-item icon-star star rank-2"
                                  rel="4"
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="rank-item icon-star star rank-3"
                                  rel="3"
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="rank-item icon-star star rank-4"
                                  rel="2"
                                ></a>
                                <a
                                  href="javascript:void(0);"
                                  class="rank-item icon-star star rank-5"
                                  rel="1"
                                ></a>
                                <input type="hidden" name="YRM_PUAN" />
                              </div>
                            </div>
                          </div>
                          <input type="hidden" name="PC_I_ID" value="110768" />
                          <div class="container-fluid">
                            <div class="row">
                              <div class="form-group">
                                <div class="checkbox">
                                  <input
                                    type="text"
                                    name="YRM_BASLIK"
                                    required="required"
                                    class="form-control"
                                    placeholder="Konu Başlığı"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="checkbox">
                                  <textarea
                                    name="YRM_MESAJ"
                                    required="required"
                                    class="form-control"
                                    rows="2"
                                    placeholder="Bu Ürüne Yorum Yazın"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="wrapper-checkbox pull-left">
                                  <input
                                    checked="checked"
                                    id="PC_VisibleName"
                                    name="PC_VisibleName"
                                    type="checkbox"
                                    value="true"
                                  /><input
                                    name="PC_VisibleName"
                                    type="hidden"
                                    value="false"
                                  />
                                  <span class="checkmark"></span>
                                  İsmimi Göster
                                </label>
                                <button
                                  type="submit"
                                  class="btn btn-default btn-transparent pull-right m-b-20"
                                >
                                  GÖNDER
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div id="comment-without-login" class="container-fluid">
                          <div class="row">
                            <div class="form-group text-center">
                              <h3>YORUM YAP</h3>
                              <p>
                                Yorum yapabilmek için giriş yapmanız
                                gerekmektedir.
                              </p>
                              <a
                                href="https://www.vatanbilgisayar.com/login?returnUrl=%2Fdell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html&amp;logtab=signin"
                                class="btn btn-default btn-transparent m-b-20"
                                >GİRİŞ YAP / ÜYE OL</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="wrapper-score clearfix">
                          <div
                            class="col-lg-4 col-md-4 col-sm-4 col-xs-4 hidden-xs"
                          >
                            <picture>
                              <!--[if IE 9]> <video style="display: none;"><![endif]-->
                              <source
                                srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                                media="(min-width: 1000px)"
                              />
                              <source
                                srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                                media="(min-width: 600px)"
                              />
                              <source
                                srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                                media="(min-width: 300px)"
                              />
                              <!--[if IE 9]></video><![endif]-->
                              <img
                                alt="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                                class="img-responsive product-list__image product-list--third__image"
                              />
                            </picture>
                          </div>
                          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div class="wrapper-star">
                              <div class="rank-star">
                                <span
                                  class="score"
                                  id="averageRank"
                                  style="width:80%;"
                                ></span>
                              </div>
                              <span>(11)</span>
                              <span
                                >Bu Ürün
                                <strong id="averageRankNum">4</strong> Puan
                                Almıştır</span
                              >
                            </div>

                            <div class="tab-pane--star-score">
                              <div>5 Yıldız</div>
                              <div class="wrapper-progress">
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-warning"
                                    id="5star"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style="width: 0%;"
                                  >
                                    <span class="sr-only"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="starTxt5">%0</div>
                            </div>
                            <div class="tab-pane--star-score">
                              <div>4 Yıldız</div>
                              <div class="wrapper-progress">
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-warning"
                                    id="4star"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style="width: 0%;"
                                  >
                                    <span class="sr-only"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="starTxt4">%0</div>
                            </div>
                            <div class="tab-pane--star-score">
                              <div>3 Yıldız</div>
                              <div class="wrapper-progress">
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-warning"
                                    id="3star"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style="width: 0%;"
                                  >
                                    <span class="sr-only"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="starTxt3">%0</div>
                            </div>
                            <div class="tab-pane--star-score">
                              <div>2 Yıldız</div>
                              <div class="wrapper-progress">
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-warning"
                                    id="2star"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style="width: 0%;"
                                  >
                                    <span class="sr-only"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="starTxt2">%0</div>
                            </div>
                            <div class="tab-pane--star-score">
                              <div>1 Yıldız</div>
                              <div class="wrapper-progress">
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-warning"
                                    id="1star"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style="width: 0;"
                                  >
                                    <span class="sr-only"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="starTxt1">%0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="comment-section">
                      <div id="itemContainer" class="row load-more"></div>
                      <div class="load-more-area">
                        <button class="btn btn-primary loadMoreCommet">
                          Daha Fazla
                        </button>
                      </div>
                    </div>
                    <p class="text-right no-margin">
                      Tüm yorumları görüntülediniz.
                    </p>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                class="tab-pane installment-tab"
                id="odeme-secenekleri"
              >
                <div class="wrap-payment d-table">
                  <div class="d-cell">
                    <div class="payment-text">
                      <p>
                        <strong
                          >CardFinans 2+4 taksit kampanyasına Enpara kredi
                          kartları, Fix Card’lar ve ticari kartlar</strong
                        >
                        dahil değildir.
                      </p>
                      <p>
                        <strong>Paraf ve Cardfinans</strong> kartlarında
                        <strong>150 TL altı işlemlerde</strong> artı taksitler
                        yansımayacaktır.
                      </p>
                    </div>
                  </div>
                  <div class="d-cell">
                    <div class="visa-transfer"></div>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">3</td>
                          <td data-label="Aylık Tutar (TL)">3.339,33 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">5</td>
                          <td data-label="Aylık Tutar (TL)">2.003,60 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">6</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">2</td>
                          <td data-label="Aylık Tutar (TL)">5.009,00 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">3 + 3</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">3</td>
                          <td data-label="Aylık Tutar (TL)">3.339,33 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">6</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">2</td>
                          <td data-label="Aylık Tutar (TL)">5.009,00 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">3</td>
                          <td data-label="Aylık Tutar (TL)">3.339,33 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">4</td>
                          <td data-label="Aylık Tutar (TL)">2.504,50 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">5</td>
                          <td data-label="Aylık Tutar (TL)">2.003,60 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">6</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">3</td>
                          <td data-label="Aylık Tutar (TL)">3.339,33 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">2 + 4</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">2 + 3</td>
                          <td data-label="Aylık Tutar (TL)">2.003,60 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">3 + 3</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">4 + 3</td>
                          <td data-label="Aylık Tutar (TL)">1.431,14 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">6 + 3</td>
                          <td data-label="Aylık Tutar (TL)">1.113,11 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">Peşin</td>
                          <td data-label="Aylık Tutar (TL)">10.018 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">Peşin</td>
                          <td data-label="Aylık Tutar (TL)">10.018 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 installment-tab-item"
                  >
                    <img
                      class="price-card-logo"
                      src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    />
                    <table class="table table--payment">
                      <thead>
                        <tr>
                          <th>Taksit Sayısı</th>
                          <th>Aylık Tutar (TL)</th>
                          <th>Toplam Tutar (TL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Taksit Sayısı">3</td>
                          <td data-label="Aylık Tutar (TL)">3.339,33 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                        <tr>
                          <td data-label="Taksit Sayısı">4 + 2</td>
                          <td data-label="Aylık Tutar (TL)">1.669,67 TL</td>
                          <td data-label="Toplam Tutar (TL)">10.018 TL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="hata-bildir">
                <div class="tab-panel">
                  <div
                    class="col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12"
                  >
                    <h4 class="tab-pane--title">
                      Hatalı olduğunu düşündüğünüz ürün için bizimle iletişime
                      geçebilirsiniz.
                    </h4>
                  </div>
                  <form
                    action="https://www.vatanbilgisayar.com/ProductDetail/ReportError?Length=13"
                    class="form-horizontal form--default"
                    data-ajax="true"
                    data-ajax-method="POST"
                    data-ajax-success="javascript:showMessage(data);$(&#39;textarea&#39;).val(&#39;&#39;);"
                    id="form1"
                    method="post"
                  >
                    <input
                      name="__RequestVerificationToken"
                      type="hidden"
                      value="gKNKa_qHO0tZjshL66a8GK-kG8OJHPGYFNSUArm1vs9lO1ty-wo4OAEHQimXXtYvvCzomD2oz7AU05afXL_4fEzv1I41"
                    />
                    <div class="form-group">
                      <div
                        class="col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12"
                      >
                        <div class="checkbox">
                          <textarea
                            required="required"
                            name="content"
                            class="form-control"
                            rows="4"
                            placeholder="Hatalı olduğunu düşündüğünüz ürün için bizimle iletişime geçebilirsiniz."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="url"
                      value="http://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
                    />
                    <div class="form-group">
                      <div
                        class="col-md-offset-2 col-lg-8 col-md-8 col-sm-12 col-xs-12"
                      >
                        <button
                          type="submit"
                          class="btn btn-default btn-transparent pull-right"
                        >
                          GÖNDER
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="wrapper-product wrapper-product--dark wrapper-product--visit visilabs-themost-seen-atcategory hide"
      >
        <div class="global-container">
          <div
            class="global-component-header global-component-header--small-gutter clearfix"
          >
            <h3
              class="global-component-header__title global-component-header--small-gutter__title"
            >
              Bu Kategoride En Çok Bakılanlar
            </h3>
          </div>
          <div
            class="owl-carousel owl-carousel-arrows owl-theme owl-loaded owl-drag owl-hidden"
          >
            <div class="owl-stage-outer">
              <div class="owl-stage"></div>
            </div>
            <div class="owl-nav disabled">
              <button type="button" role="presentation" class="owl-prev">
                <span
                  class="btn-carousel-controls icon-angle-left"
                ></span></button
              ><button type="button" role="presentation" class="owl-next">
                <span class="btn-carousel-controls icon-angle-right"></span>
              </button>
            </div>
            <div class="owl-dots disabled"></div>
          </div>
        </div>
      </div>

      <div id="store-content" style="display: none;">
        <h4>STOKTA BULUNAN MAĞAZALAR</h4>
        <p>
          <i class="icon-phone-alt"></i> Telefonla Sipariş Hattı:
          <a href="tel:08502225660"> <strong>0850 222 5660</strong></a>
        </p>
        <div class="staticpage-stores">
          <div class="staticpage-stores__inner">
            <div class="staticpage-stores__top">
              <a
                href="https://www.vatanbilgisayar.com/dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html#"
                id="findStoreClosest"
                class="btn btn-primary btn-block staticpage-stores__button"
              >
                <i class="icon-map-marker-alt"></i> YAKIN MAĞAZALARI BUL
              </a>
              <div class="form-group staticpage-stores__form">
                <input
                  type="text"
                  class="form-control store-search"
                  id="storeSearch"
                />
              </div>
              <div class="staticpage-stores__count hide">
                "<span>İstanbul</span>" için
                <strong>37 Mağaza</strong> Listeleniyor
              </div>
            </div>
            <ul
              class="staticpage-stores__list slimscroll-el"
              id="storeList"
            ></ul>
          </div>
        </div>
      </div>

      <div class="light-main" style="">
        <div class="big-image-content">
          <div class="dt-lightbox-content">
            <div
              class="dt-img lightbox-big--img owl-carousel owl-loaded owl-drag"
            >
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;"
                >
                  <div class="owl-item">
                    <div
                      data-dot='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"/&gt;'
                      class="item"
                      style="height: 629.594px;"
                    >
                      <img
                        class="zooms"
                        data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_large.jpg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg=="
                        style='height: 629.594px; background-repeat: no-repeat; background-image: url("");'
                      />
                    </div>
                  </div>
                  <div class="owl-item">
                    <div
                      data-dot='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_small.jpg"/&gt;'
                      class="item"
                      style="height: 629.594px;"
                    >
                      <img
                        class="zooms"
                        data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-10_large.jpg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg=="
                        style='height: 629.594px; background-repeat: no-repeat; background-image: url("");'
                      />
                    </div>
                  </div>
                  <div class="owl-item">
                    <div
                      data-dot='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_small.jpg"/&gt;'
                      class="item"
                      style="height: 629.594px;"
                    >
                      <img
                        class="zooms"
                        data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg=="
                        style='height: 629.594px; background-repeat: no-repeat; background-image: url("");'
                      />
                    </div>
                  </div>
                  <div class="owl-item">
                    <div
                      data-dot='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_small.jpg"/&gt;'
                      class="item"
                      style="height: 629.594px;"
                    >
                      <img
                        class="zooms"
                        data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-13_large.jpg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg=="
                        style='height: 629.594px; background-repeat: no-repeat; background-image: url("");'
                      />
                    </div>
                  </div>
                  <div class="owl-item">
                    <div
                      data-dot='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_small.jpg"/&gt;'
                      class="item"
                      style="height: 629.594px;"
                    >
                      <img
                        class="zooms"
                        data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-1_large.jpg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg=="
                        style='height: 629.594px; background-repeat: no-repeat; background-image: url("");'
                      />
                    </div>
                  </div>
                  <div class="owl-item">
                    <div
                      data-dot='&lt;img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_small.jpg"/&gt;'
                      class="item"
                      style="height: 629.594px;"
                    >
                      <img
                        class="zooms"
                        data-src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-2_large.jpg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg=="
                        style='height: 629.594px; background-repeat: no-repeat; background-image: url("");'
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
              <div class="owl-dots">
                <div class="owl-dot active">
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    style="height: 629.594px;"
                  />
                </div>

                <div class="owl-dot">
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    style="height: 629.594px;"
                  />
                </div>

                <div class="owl-dot">
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    style="height: 629.594px;"
                  />
                </div>

                <div class="owl-dot">
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    style="height: 629.594px;"
                  />
                </div>

                <div class="owl-dot">
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    style="height: 629.594px;"
                  />
                </div>

                <div class="owl-dot">
                  <img
                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                    style="height: 629.594px;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn close-btn lightboxCclose">Kapat</button>
      </div>
      <div class="lightbox-overlay"></div>
      <div class="fancy-modal fancy-modal-add" id="modal-basket">
        <div class="fancy-modal-header">
          <div class="col-xs-12 m-b-0 message-modal">
            <span class="icon-times round error"></span
            ><span style="color:red;"> </span>
          </div>
          <div class="d-cell col-sm-1 col-xs-3 short-image">
            <a href="javascript:void(0)">
              <picture>
                <!--[if IE 9] >< video style="display: none;"><![endif]-->
                <source
                  srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                  media="(min-width: 1000px)"
                  alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                  title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                />
                <source
                  srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                  media="(min-width: 600px)"
                  alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                  title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                />
                <source
                  srcset="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768_small.jpg"
                  media="(min-width: 300px)"
                  alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                  title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                />
                <!--[if IE 9]></video><![endif]-->
                <img
                  src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                  class="img-responsive"
                  alt='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                  title='DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI 4GB-15.6"W10'
                />
              </picture>
            </a>
          </div>
          <div class="d-cell col-sm-5 col-xs-5 short-name">
            <a
              href="https://www.vatanbilgisayar.com/%20dell-g315-core-i5-10300h-2-5ghz-8gb-ram-512gb-ssd-gtx1650ti-4gb-15-6-w10.html"
            >
              <span>
                DELL G315 CORE İ5 10300H 2.5GHZ-8GB RAM-512GB SSD-GTX1650TI
                4GB-15.6"W10
              </span>
            </a>
          </div>
          <div class="d-cell col-xs-3 short-price">
            <span class="product-list__price">10.018</span>
            <span class="product-list__currency">TL</span>
          </div>
        </div>
        <div class="fancy-modal-body fancy-modal-list">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12">
                <h4>BUNDLE ÜRÜNLER</h4>
              </div>
              <div class="col-xs-12">
                <div
                  id="popupBundleList"
                  class="owl-modal-slider-bundle owl-carousel owl-theme owl-loaded owl-drag"
                  data-productlineid="0"
                >
                  <div class="owl-stage-outer">
                    <div
                      class="owl-stage"
                      style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;"
                    >
                      <div class="owl-item">
                        <div class="item" id="84459">
                          <div class="most-popular-fancy">
                            <a
                              href="https://www.vatanbilgisayar.com/online-office-365-personal-1-kullanici-1yil.html"
                              class="most-popular-table d-table"
                            >
                              <div class="d-cell">
                                <picture>
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                    class="img-responsive"
                                    alt="online-office-365-personal-1-kullanici-1yil.html"
                                    title="online-office-365-personal-1-kullanici-1yil.html"
                                  />
                                </picture>
                              </div>
                              <p class="d-cell">
                                <span class="i-title"
                                  >Online Microsoft 365 Bireysel (1
                                  kullanıcı-1yıl) (Dijital İndirilebilir
                                  Lisans)</span
                                >
                              </p>
                              <p class="d-cell">
                                <span></span>
                                <span class="old-price">550 TL</span>
                                <span class="price">499 <span>TL</span></span>
                              </p> </a
                            ><a
                              href="javascript:void(0)"
                              onclick="AddBundleFromPopUp(84459, 0, 0,110768,499,&#39;QQ2-00006&#39;)"
                              class="btn btn-success"
                              >HEMEN EKLE</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="owl-item">
                        <div class="item" id="88816">
                          <div class="most-popular-fancy">
                            <a
                              href="https://www.vatanbilgisayar.com/asus-sdrw-08u9m-u-zendrive-harici-slim-dvd-yazici-siyah.html"
                              class="most-popular-table d-table"
                            >
                              <div class="d-cell">
                                <picture>
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                    class="img-responsive"
                                    alt="asus-sdrw-08u9m-u-zendrive-harici-slim-dvd-yazici-siyah.html"
                                    title="asus-sdrw-08u9m-u-zendrive-harici-slim-dvd-yazici-siyah.html"
                                  />
                                </picture>
                              </div>
                              <p class="d-cell">
                                <span class="i-title"
                                  >ASUS SDRW-08U9M-U ZENDRIVE HARİCİ SLİM
                                  DVD-YAZICI - SİYAH</span
                                >
                              </p>
                              <p class="d-cell">
                                <span></span>
                                <span class="old-price">413 TL</span>
                                <span class="price">367 <span>TL</span></span>
                              </p> </a
                            ><a
                              href="javascript:void(0)"
                              onclick="AddBundleFromPopUp(88816, 2, 0,110768,367,&#39;SDRW-08U9M-U-BLACK&#39;)"
                              class="btn btn-success"
                              >HEMEN EKLE</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="owl-item">
                        <div class="item" id="104988">
                          <div class="most-popular-fancy">
                            <a
                              href="https://www.vatanbilgisayar.com/asus-15-6-mb16amt-zenscreen-tasinabilir-ips-full-hd-usb-monitor.html"
                              class="most-popular-table d-table"
                            >
                              <div class="d-cell">
                                <picture>
                                  <img
                                    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/110768-12_large.jpg"
                                    class="img-responsive"
                                    alt="asus-15-6-mb16amt-zenscreen-tasinabilir-ips-full-hd-usb-monitor.html"
                                    title="asus-15-6-mb16amt-zenscreen-tasinabilir-ips-full-hd-usb-monitor.html"
                                  />
                                </picture>
                              </div>
                              <p class="d-cell">
                                <span class="i-title"
                                  >ASUS 15,6" MB16AMT ZenScreen taşınabilir
                                  Dokunmatik IPS FullHD USB monitör</span
                                >
                              </p>
                              <p class="d-cell">
                                <span></span>
                                <span class="old-price">4.355 TL</span>
                                <span class="price">4.072 <span>TL</span></span>
                              </p> </a
                            ><a
                              href="javascript:void(0)"
                              onclick="AddBundleFromPopUp(104988, 0, 0,110768,4.072,&#39;MB16AMT&#39;)"
                              class="btn btn-success"
                              >HEMEN EKLE</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      class="owl-prev disabled"
                    >
                      <span
                        class="btn-carousel-controls icon-angle-left"
                      ></span></button
                    ><button
                      type="button"
                      role="presentation"
                      class="owl-next disabled"
                    >
                      <span
                        class="btn-carousel-controls icon-angle-right"
                      ></span>
                    </button>
                  </div>
                  <div class="owl-dots disabled">
                    <button role="button" class="owl-dot active">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fancy-modal-footer fancy-modal-list">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 text-right"></div>
              <div class="col-xs-12 text-right">
                <a href="https://www.vatanbilgisayar.com/" class="go-back"
                  >Alışverişe Geri Dön</a
                >
                <form
                  action="https://www.vatanbilgisayar.com/Basket/ToFirstStep"
                  method="post"
                  role="form"
                >
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="mGyDOi3KnD-LNtCTkPOmO9LAi78Xew1dOM-ywfrE8Gm27A0-vaAKzyOwycQqExNf5eyOjf_KdbxFe0bVWUGVCHjkAK01"
                  />
                  <input type="hidden" id="current" name="current" value="0" />
                  <input
                    class="btn btn-dark-blue goToBasket hide"
                    type="submit"
                    value="SEPETE GİT"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fancy-modal fancy-modal-price" id="sysmarkdoc">
        <div class="fancy-modal-price-body">
          <h4>TESTLER SIRASINDA KULLANILAN ‘SYSMARK 2018’ TEST ADIMLARI</h4>
          <ul class="sysmark-steps">
            <li>
              Bilgisayarın BIOS ayarları fabrika ayarlarına geri döndürülür.
            </li>
            <li>
              Notebook formatlanır, yeni işletim sistemi kurulur. Yapılan
              testler Microsoft Windows 10 Home Single Language (ENG)
              kullanılmıştır.
            </li>
            <li>
              Sysmark 2018 gereksinimlerinden dolayı, klavye ingilizce olarak
              ayarlanır.
            </li>
            <li>
              Driver Pack Solution programı ile Bilgisayar üzerine driver’ların
              son versiyonları yüklenir.
            </li>
            <li>
              Sysmark 2018 test gereksinim olarak aşağıdaki göstergeler
              tanımlanan değerlere ayarlanır.
              <ul>
                <li>
                  Network adaptörleri = Açık
                </li>
                <li>
                  Görev çubuğu = Görünür
                </li>
                <li>Arama bölümü = Görünür</li>
              </ul>
            </li>
            <li>
              Hata günlükleri temizlenir. ‘Error Failed report’
            </li>
            <li>
              Grafik ayarı 1280*800 olarak ayarlanır. Eger bilgisayar bu
              çözünürlüğü desteklemiyor ise 1366*768 ayarlanacaktır.
            </li>
            <li>
              Sysmark 2018 uygulması kurulur.
            </li>
            <li>
              Bapco web siteside yayınlanmış son güncelleme olan Sysmark 2018
              v1.0.2.58 Patch 2 paketi yüklenir. Sysmark 2018 sürümü bu
              güncelleme ile ‘v 1.0.0.48’ versiyonun yükselmektedir.
            </li>
            <li>
              Sysmark 2018’i çalıştırdıktan sonra System Configuration Tool
              ayarlarında Required ayarları tüm testlerde ‘Enable’ durumuna
              getirilir.
            </li>
            <li>
              Sysmark 2018’i çalıştırdıktan sonra System Configuration Tool
              ayarlarında Recommended ayarları tüm testlerde ‘Enable’ durumuna
              getirilir.
            </li>
            <li>
              Sysmark 2018’i çalıştırdıktan sonra System Configuration Tool
              ayarlarında Optional ayarları tüm testlerde ‘Disable’ durum
              getirilir.
            </li>
            <li>
              Tum yapılan testler 3 Iteration şeklinde çalıştırılmıştır.
            </li>
          </ul>
        </div>
      </div>
    </main>
  </body>
</template>


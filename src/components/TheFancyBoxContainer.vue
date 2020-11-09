<script>
import Products from "@/Products";
export default {
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: Products.data.find(data => data.id === this.productId),
      show:false
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  computed: {
    ProductHref() {
      return this.product.name.toLowerCase().replace(/\s/g, "-");
    }
  }
};
</script>
<template>
  <div
    class="fancybox-container fancybox-is-open fancybox-can-swipe"
    role="dialog"
    tabindex="-1"
    id="fancybox-container-2"
    style="transition-duration: 366ms;"
  >
    <div class="fancybox-bg"></div>
    <div class="fancybox-inner">
      <div class="fancybox-infobar">
        <span data-fancybox-index="">1</span>&nbsp;/&nbsp;<span
          data-fancybox-count=""
          >1</span
        >
      </div>
      <div class="fancybox-toolbar">
        <button
          data-fancybox-zoom=""
          class="fancybox-button fancybox-button--zoom"
          title="Zoom"
          disabled=""
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"
            ></path>
          </svg></button
        ><button
          data-fancybox-play=""
          class="fancybox-button fancybox-button--play"
          title="Start slideshow"
          style="display: none;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6.5 5.4v13.2l11-6.6z"></path></svg
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"
            ></path>
          </svg></button
        ><button
          data-fancybox-thumbs=""
          class="fancybox-button fancybox-button--thumbs"
          title="Thumbnails"
          style="display: none;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"
            ></path>
          </svg></button
        ><button
          data-fancybox-close=""
          class="fancybox-button fancybox-button--close"
          title="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="fancybox-navigation">
        <button
          data-fancybox-prev=""
          class="fancybox-button fancybox-button--arrow_left"
          title="Previous"
          disabled=""
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"
              ></path>
            </svg>
          </div></button
        ><button
          data-fancybox-next=""
          class="fancybox-button fancybox-button--arrow_right"
          title="Next"
          disabled=""
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div class="fancybox-stage">
        <div
          class="fancybox-slide fancybox-slide--html fancybox-slide--current fancybox-slide--complete"
          style=""
        >
          <div
            class="fancy-modal fancy-modal-add fancybox-content"
            id="modal-basket"
            style="display: inline-block;"
          >
            <div class="fancy-modal-header">
              <div class="col-xs-12 m-b-0 message-modal">
                <span class="icon-check round"></span
                ><span style="color:green;">Ürün Eklendi.</span>
              </div>
              <div class="d-cell col-sm-1 col-xs-3 short-image">
                <a href="javascript:void(0)">
                  <picture>
                    <img
                      :src="product.images[0]"
                      class="img-responsive"
                      :alt="product.name"
                      :title="product.name"
                    />
                  </picture>
                </a>
              </div>
              <div class="d-cell col-sm-5 col-xs-5 short-name">
                <router-link
                  :to="{
                    name: 'ProductPage',
                    params: {
                      productId: product.id,
                      producthref: ProductHref
                    }
                  }"
                >
                  <span> {{ product.name }} </span>
                </router-link>
              </div>
              <div class="d-cell col-xs-3 short-price">
                <span class="product-list__price">{{
                  formatPrice(product.cost)
                }}</span>
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
                          style="transform: translate3d(-295px, 0px, 0px); transition: all 0.25s ease 0s; width: 1182px;"
                        >
                          <div
                            class="owl-item"
                            style="width: 289.333px; margin-right: 6px;"
                          >
                            <div class="item" id="89308">
                              <div class="most-popular-fancy">
                                <a
                                  href="mcafee-internet-security-3-cihaz-tum-platformlar.html"
                                  class="most-popular-table d-table"
                                >
                                  <div class="d-cell">
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/mcafee/thumb/TeoriV2-89308-2_small.jpg"
                                        class="img-responsive"
                                        alt="mcafee-internet-security-3-cihaz-tum-platformlar.html"
                                        title="mcafee-internet-security-3-cihaz-tum-platformlar.html"
                                      />
                                    </picture>
                                  </div>
                                  <p class="d-cell">
                                    <span class="i-title"
                                      >McAfee Internet Security 3 Cihaz/Tüm
                                      platformlar</span
                                    >
                                  </p>
                                  <p class="d-cell">
                                    <span></span>
                                    <span class="old-price">200 TL</span>
                                    <span class="price"
                                      >159 <span>TL</span></span
                                    >
                                  </p> </a
                                ><a
                                  href="javascript:void(0)"
                                  onclick="AddBundleFromPopUp(89308, 0, 0,103888,159,'MIS004NR3RAA')"
                                  class="btn btn-success"
                                  >HEMEN EKLE</a
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item active"
                            style="width: 289.333px; margin-right: 6px;"
                          >
                            <div class="item" id="104376">
                              <div class="most-popular-fancy">
                                <a
                                  href="apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html"
                                  class="most-popular-table d-table"
                                >
                                  <div class="d-cell">
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/apple/thumb/TeoriV2-104376_small.jpg"
                                        class="img-responsive"
                                        alt="apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html"
                                        title="apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html"
                                      />
                                    </picture>
                                  </div>
                                  <p class="d-cell">
                                    <span class="i-title"
                                      >APPLE MWVU2ZM/A İPHONE 11 SİLİKON KILIF -
                                      SİYAH</span
                                    >
                                  </p>
                                  <p class="d-cell">
                                    <span></span>
                                    <span class="old-price">399 TL</span>
                                    <span class="price"
                                      >359 <span>TL</span></span
                                    >
                                  </p> </a
                                ><a
                                  href="javascript:void(0)"
                                  onclick="AddBundleFromPopUp(104376, 0, 0,103888,359,'MWVU2ZM/A')"
                                  class="btn btn-success"
                                  >HEMEN EKLE</a
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item active"
                            style="width: 289.333px; margin-right: 6px;"
                          >
                            <div class="item" id="105344">
                              <div class="most-popular-fancy">
                                <a
                                  href="addison-ip-11s-iphone-11-ultra-slim-telefon-kilifi-siyah.html"
                                  class="most-popular-table d-table"
                                >
                                  <div class="d-cell">
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/addison/thumb/TeoriV2-105344_small.jpg"
                                        class="img-responsive"
                                        alt="addison-ip-11s-iphone-11-ultra-slim-telefon-kilifi-siyah.html"
                                        title="addison-ip-11s-iphone-11-ultra-slim-telefon-kilifi-siyah.html"
                                      />
                                    </picture>
                                  </div>
                                  <p class="d-cell">
                                    <span class="i-title"
                                      >ADDİSON IP-11S İPHONE 11 ULTRA SLİM
                                      TELEFON KILIFI- SİYAH</span
                                    >
                                  </p>
                                  <p class="d-cell">
                                    <span></span>
                                    <span class="old-price">82 TL</span>
                                    <span class="price"
                                      >73 <span>TL</span></span
                                    >
                                  </p> </a
                                ><a
                                  href="javascript:void(0)"
                                  onclick="AddBundleFromPopUp(105344, 0, 0,103888,73,'IP-11S Siyah')"
                                  class="btn btn-success"
                                  >HEMEN EKLE</a
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item active"
                            style="width: 289.333px; margin-right: 6px;"
                          >
                            <div class="item" id="108049">
                              <div class="most-popular-fancy">
                                <a
                                  href="ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html"
                                  class="most-popular-table d-table"
                                >
                                  <div class="d-cell">
                                    <picture>
                                      <img
                                        src="https://cdn.vatanbilgisayar.com/Upload/Product/ttec/thumb/TeoriV2-108049_small.jpg"
                                        class="img-responsive"
                                        alt="ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html"
                                        title="ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html"
                                      />
                                    </picture>
                                  </div>
                                  <p class="d-cell">
                                    <span class="i-title"
                                      >TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM
                                      EKRAN KORUYUCU</span
                                    >
                                  </p>
                                  <p class="d-cell">
                                    <span></span>
                                    <span class="old-price">149 TL</span>
                                    <span class="price"
                                      >134 <span>TL</span></span
                                    >
                                  </p> </a
                                ><a
                                  href="javascript:void(0)"
                                  onclick="AddBundleFromPopUp(108049, 0, 0,103888,134,'2ECR45')"
                                  class="btn btn-success"
                                  >HEMEN EKLE</a
                                >
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
                      <div class="owl-dots">
                        <button role="button" class="owl-dot">
                          <span></span></button
                        ><button role="button" class="owl-dot active">
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
                    <a href="/" class="go-back">Alışverişe Geri Dön</a>
                    <form
                      action="/Basket/ToFirstStep"
                      method="post"
                      role="form"
                    >
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        value="ZyoYfZVZiNTvMu01UWJGQbg48okpq_cLyKHE9Bn2zvEeYliRpCbeS3UyZdBV8OV3hMUsBs7b5ttXD4TobmgLiDKZrR81"
                      />
                      <input
                        type="hidden"
                        id="current"
                        name="current"
                        value="0"
                      />
                      <input
                        class="btn btn-dark-blue goToBasket"
                        type="submit"
                        value="SEPETE GİT"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              data-fancybox-close=""
              class="fancybox-button fancybox-close-small"
              title="Close"
              @click="$emit('close',show)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="fancybox-caption fancybox-caption--separate">
        <div class="fancybox-caption__body"></div>
      </div>
    </div>
  </div>
</template>
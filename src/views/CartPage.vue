
<script>
import Products from "@/Products";
export default {
  name: "CartPage",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      productsData: Products.data,
      Cart: Products.inCart,
      dropdownOpen: false,
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    OpenDropdown() {
      this.dropdownOpen = true;
    },
    CloseDropdown() {
      setTimeout(() => (this.dropdownOpen = false), 250);
    },
    GetTotal() {
      var total = 0;
      this.Cart.forEach(cartItem => {
        total =
          total +
          Products.data.find(data => data.id === cartItem.pid).cost *
            cartItem.count;
      });
      return total;
    }
  }
};
</script>
<template>
  <main class="basket-main-area" style="margin-top:8.5px">
    <div class="basket basket-addresses" v-if="Cart.length<1">
      <div class="global-container">
        <div class="row">
          <div class="col-xs-12">
            <div class="empty-basket">
              <div class="empty-basket-content">
                <span class="icon-shopping-card">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span class="basket-count">0</span>
              </div>
              <h3>SEPETİNİZDE ÜRÜN YOK!</h3>
              <a
                class="btn btn-primary signup-form__button change-password-form__button"
                href="/"
                >ALIŞVERİŞE BAŞLA</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dolu Sepet -->
    <div class="basket" v-else>
      <div class="basket-process">
        <div class="global-container">
          <div class="row">
            <div class="col-xs-12">
              <ul class="basket-process__inner">
                <li class="active">
                  <a href="/sepet/sepetim">
                    <span class="basket-process__icon">
                      <i class="icon-shopping-card"></i>
                    </span>
                    <span class="basket-process__text">
                      Sepetim
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <span class="basket-process__icon">
                      <i class="icon-map-marker-alt"></i>
                    </span>
                    <span class="basket-process__text">
                      Teslimat
                    </span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <span class="basket-process__icon">
                      <i class="icon-credit-card-alt"></i>
                    </span>
                    <span class="basket-process__text">
                      Ödeme
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="global-container">
        <div class="row">
          <div class="col-xs-12 col-lg-8">
            <div class="basket-cart">
              <div class="clearfix basket-cart__header">
                <a href="/" class="pull-right basket-cart__header-link"
                  ><i class="icon-arrow-left"></i> Alışverişe Geri Dön</a
                >
              </div>
              <div></div>
              <div class="basket-cart__table" id="basketList">
                <div class="basket-cart__table-row basket-cart__table-header">
                  <div class="basket-cart__table-column info">Ürünlerim</div>
                  <div
                    class="basket-cart__table-column count hidden-xs hidden-sm"
                  >
                    Adet
                  </div>
                  <div
                    class="basket-cart__table-column price  hidden-xs hidden-sm"
                  >
                    Avantajlı Fiyat
                  </div>
                  <div
                    class="basket-cart__table-column warranty  hidden-xs hidden-sm"
                  >
                    Garantiyi Uzat
                  </div>
                  <div
                    class="basket-cart__table-column remove  hidden-xs hidden-sm"
                  >
                    Sil
                  </div>
                </div>
                <div class="basket-cart__table-row">
                  <div class="basket-cart__table-column info">
                    <div class="basket-cart__product-info">
                      <a href="/iphone-11-akilli-telefon-siyah.html">
                        <div class="basket-cart__product-image">
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/TeoriV2-103888-27_small.jpg"
                            class=""
                            alt=""
                          />
                        </div>
                        <div class="basket-cart__product-name">
                          iPhone 11 64 GB AKILLI TELEFON SİYAH
                        </div>
                      </a>
                      <ul
                        class="basket-cart__product-badges hidden-xs hidden-sm"
                      >
                        <li class="discount"></li>
                      </ul>
                    </div>
                  </div>
                  <div class="basket-cart__table-column count">
                    <div class="number-input">
                      <a
                        href="javascript:changeProductCount(103888,22320,-1,16457908);"
                        >-</a
                      >
                      <div class="input-wrapper">
                        <form novalidate="novalidate">
                          <input
                            data-limitedstok="False"
                            data-lineid="16457908"
                            data-target="22320"
                            data-toggle="103888"
                            data-val="true"
                            data-val-number="The field TQuantityA must be a number."
                            data-val-required="The TQuantityA field is required."
                            id="productCount_16457908"
                            min="1"
                            name="item.BasketItem.TQuantityA"
                            onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                            type="number"
                            value="1"
                            style="text-align: right;"
                          />
                        </form>
                        <span>Adet</span>
                      </div>
                      <a
                        href="javascript:changeProductCount(103888,22320,1,16457908);"
                        >+</a
                      >
                    </div>
                  </div>
                  <div class="basket-cart__table-column price">
                    <div class="basket-cart__product-price">
                      <span> 7.599,00 TL </span>
                    </div>
                  </div>
                  <div
                    class="basket-cart__table-column info badges visible-xs visible-sm"
                  >
                    <ul class="basket-cart__product-badges">
                      <li></li>
                    </ul>
                  </div>
                  <div class="basket-cart__table-column warranty">
                    <span>Garantiyi Uzat</span>
                    <input
                      class="apple-switch basket-cart__product-switch warranty-toggler "
                      checked=""
                      type="checkbox"
                      onchange="warrantyToggler(event)"
                    />
                  </div>
                  <div class="basket-cart__table-column text-center remove ">
                    <a
                      href="javascript:void(0)"
                      class="basket-cart__product-remove"
                      onclick="DeleteFromBasket(16457908,10207181)"
                      ><i class="icon-times-circle"></i
                    ></a>
                  </div>
                  <div class="basket-cart__extrawarranty">
                    <p class="kg-text">
                      <i class="icon-warranty-lock-alt"></i>
                      <span>
                        Keyifli Garanti, standart garanti bittikten sonra
                        geçerli olan geniş kapsamlı bir hizmettir. Buna ek
                        olarak ilk yıla özel hırsızlık ve kaza sigortası
                        hediyedir.
                      </span>
                    </p>
                    <div class="basket-installment-carousel swiper-container">
                      <ul class="swiper-wrapper">
                        <li class="swiper-slide active ">
                          <label class="wrapper-radio wrapper-radio-product">
                            <input
                              type="radio"
                              name="warranty_95ca8bd8-049b-4cc6-a859-dfec01a5b9a4"
                              onclick="AddOrRemoveKeyifliGaranti(110011,16457908,'False',0,103888)"
                            />
                            <span class="checkmark"></span>
                            +1 Yıl Keyifli Garanti
                          </label>
                          <div class="basket-cart__extrawarranty-price">
                            1.150,00 TL
                          </div>
                        </li>
                        <li class="swiper-slide active ">
                          <label class="wrapper-radio wrapper-radio-product">
                            <input
                              type="radio"
                              name="warranty_95ca8bd8-049b-4cc6-a859-dfec01a5b9a4"
                              onclick="AddOrRemoveKeyifliGaranti(110012,16457908,'False',0,103888)"
                            />
                            <span class="checkmark"></span>
                            +2 Yıl Keyifli Garanti
                          </label>
                          <div class="basket-cart__extrawarranty-price">
                            1.450,00 TL
                          </div>
                        </li>
                        <li class="swiper-slide active ">
                          <label class="wrapper-radio wrapper-radio-product">
                            <input
                              type="radio"
                              name="warranty_95ca8bd8-049b-4cc6-a859-dfec01a5b9a4"
                              onclick="AddOrRemoveKeyifliGaranti(110013,16457908,'False',0,103888)"
                            />
                            <span class="checkmark"></span>
                            +3 Yıl Keyifli Garanti
                          </label>
                          <div class="basket-cart__extrawarranty-price">
                            1.900,00 TL
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix basket-cart__footer text-center">
                <a
                  href="javascript:void(0)"
                  class="basket-cart__footer-link"
                  onclick="DeleteBasket()"
                  ><i class="icon-trash-alt"></i> <span>SEPETİ BOŞALT</span></a
                >
              </div>
            </div>
            <div class="basket-tab-area classic-tab">
              <ul
                class="nav nav-tabs nav-justified basket-widget-tabs basketWidgetTabs"
              >
                <li class="active">
                  <a data-toggle="tab" data-type="tab1" href="#tab1"
                    >Size Özel İndirimler</a
                  >
                </li>
                <li>
                  <a data-toggle="tab" data-type="tab2" href="#tab2"
                    >Önerdiğimiz Ürünler</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active in" id="tab1">
                  <div class="basket-promotion">
                    <h4 class="basket-promotion__title">
                      Sepetinize özel indirimler
                    </h4>
                    <div class="clearfix basket_promo_item">
                      <div class="basket-promotion__left-wrapper">
                        <div class="basket-promotion__left">
                          <a
                            href="../s-link-ip-g11m-10-000mah-2-usb-port-tasinabilir-sarj-cihazi-beyaz.html"
                          >
                            <div class="basket-promotion__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/s-link/thumb/v2-93505_small.jpg"
                              />
                            </div>
                            <div class="basket-promotion__name">
                              S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR
                              ŞARJ CİHAZI- BEYAZ
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="basket-promotion__right-wrapper">
                        <div class="basket-promotion__subtitle">Size Özel</div>
                        <div class="basket-promotion__right">
                          <div class="basket-promotion__price">
                            <span class="discount">133,00 TL</span>
                            <strong>68,99</strong> TL
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-default basket-promotion__button"
                            onclick="AddOfferToBasket(93505,1,true,20250)"
                            id="btnBasket"
                            >HEMEN EKLE</a
                          >
                        </div>
                      </div>
                    </div>
                    <hr
                      style="background: transparent; border-color: transparent;"
                    />
                    <div class="clearfix basket_promo_item">
                      <div class="basket-promotion__left-wrapper">
                        <div class="basket-promotion__left">
                          <a
                            href="../snopy-sn-tws03-mobil-telefon-uyumlu-bluetooth-tws-mikrofonlu-kulaklik-beyaz.html"
                          >
                            <div class="basket-promotion__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/snopy/thumb/109478_small.jpg"
                              />
                            </div>
                            <div class="basket-promotion__name">
                              SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS
                              MİKROFONLU KULAKLIK- BEYAZ
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="basket-promotion__right-wrapper">
                        <div class="basket-promotion__subtitle">Size Özel</div>
                        <div class="basket-promotion__right">
                          <div class="basket-promotion__price">
                            <span class="discount">321,00 TL</span>
                            <strong>199,00</strong> TL
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-default basket-promotion__button"
                            onclick="AddOfferToBasket(109478,1,true,21713)"
                            id="btnBasket"
                            >HEMEN EKLE</a
                          >
                        </div>
                      </div>
                    </div>
                    <hr
                      style="background: transparent; border-color: transparent;"
                    />
                    <div class="clearfix basket_promo_item">
                      <div class="basket-promotion__left-wrapper">
                        <div class="basket-promotion__left">
                          <a href="../fakir-taffy-blender-set-kirmizi.html">
                            <div class="basket-promotion__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/fakir/thumb/TeoriV2-109020_small.jpg"
                              />
                            </div>
                            <div class="basket-promotion__name">
                              FAKIR TAFFY BLENDER SET (KIRMIZI)
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="basket-promotion__right-wrapper">
                        <div class="basket-promotion__subtitle">Size Özel</div>
                        <div class="basket-promotion__right">
                          <div class="basket-promotion__price">
                            <span class="discount">299,00 TL</span>
                            <strong>268,99</strong> TL
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-default basket-promotion__button"
                            onclick="AddOfferToBasket(109020,1,true,22356)"
                            id="btnBasket"
                            >HEMEN EKLE</a
                          >
                        </div>
                      </div>
                    </div>
                    <hr
                      style="background: transparent; border-color: transparent;"
                    />
                    <div class="clearfix basket_promo_item">
                      <div class="basket-promotion__left-wrapper">
                        <div class="basket-promotion__left">
                          <a
                            href="../sony-whch510b-ce7-kablosuz-kulakustu-kulaklik-siyah.html"
                          >
                            <div class="basket-promotion__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/sony/thumb/TeoriV2-104760_small.jpg"
                              />
                            </div>
                            <div class="basket-promotion__name">
                              SONY WHCH510B.CE7 KABLOSUZ KULAKÜSTÜ
                              KULAKLIK-SİYAH
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="basket-promotion__right-wrapper">
                        <div class="basket-promotion__subtitle">Size Özel</div>
                        <div class="basket-promotion__right">
                          <div class="basket-promotion__price">
                            <span class="discount">369,00 TL</span>
                            <strong>298,99</strong> TL
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-default basket-promotion__button"
                            onclick="AddOfferToBasket(104760,1,true,22383)"
                            id="btnBasket"
                            >HEMEN EKLE</a
                          >
                        </div>
                      </div>
                    </div>
                    <hr
                      style="background: transparent; border-color: transparent;"
                    />
                    <div class="clearfix basket_promo_item">
                      <div class="basket-promotion__left-wrapper">
                        <div class="basket-promotion__left">
                          <a
                            href="../remington-s6700-sleek-curl-expert-sac-duzlestirici.html"
                          >
                            <div class="basket-promotion__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/remington/thumb/TeoriV2-105550_small.jpg"
                              />
                            </div>
                            <div class="basket-promotion__name">
                              REMINGTON S6700 SLEEK&amp;CURL EXPERT SAÇ
                              DÜZLEŞTİRİCİ
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="basket-promotion__right-wrapper">
                        <div class="basket-promotion__subtitle">Size Özel</div>
                        <div class="basket-promotion__right">
                          <div class="basket-promotion__price">
                            <strong>228,99</strong> TL
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-default basket-promotion__button"
                            onclick="AddOfferToBasket(105550,1,true,22664)"
                            id="btnBasket"
                            >HEMEN EKLE</a
                          >
                        </div>
                      </div>
                    </div>
                    <hr
                      style="background: transparent; border-color: transparent;"
                    />
                    <div class="clearfix basket_promo_item">
                      <div class="basket-promotion__left-wrapper">
                        <div class="basket-promotion__left">
                          <a
                            href="../mikado-md-2bt-x-brio-siyah-bluetooth-speaker.html"
                          >
                            <div class="basket-promotion__image">
                              <img
                                src="https://cdn.vatanbilgisayar.com/Upload//Product/mikado/thumb/v2-93760_small.jpg"
                              />
                            </div>
                            <div class="basket-promotion__name">
                              Mikado MD-2BT X-BRIO Siyah Bluetooth Speaker
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="basket-promotion__right-wrapper">
                        <div class="basket-promotion__subtitle">Size Özel</div>
                        <div class="basket-promotion__right">
                          <div class="basket-promotion__price">
                            <span class="discount">134,00 TL</span>
                            <strong>98,99</strong> TL
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="btn btn-default basket-promotion__button"
                            onclick="AddOfferToBasket(93760,1,true,22725)"
                            id="btnBasket"
                            >HEMEN EKLE</a
                          >
                        </div>
                      </div>
                    </div>
                    <hr
                      style="background: transparent; border-color: transparent;"
                    />
                  </div>
                </div>
                <div class="tab-pane fade" id="tab2">
                  <div class="basket-promotion-others">
                    <h4 class="basket-promotion-others__title">
                      <i class="icon-arrow-down-percent"></i>
                      Bu ürünlere de ihtiyacınız olabilir
                    </h4>
                    <div class="basket-promotion-others__row">
                      <a
                        href="../mcafee-internet-security-3-cihaz-tum-platformlar.html"
                      >
                        <div class="basket-promotion-others__image">
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload//Product/mcafee/thumb/TeoriV2-89308-2_small.jpg"
                            alt="mcafee-internet-security-3-cihaz-tum-platformlar.html"
                            title="mcafee-internet-security-3-cihaz-tum-platformlar.html"
                          />
                        </div>
                        <div class="basket-promotion-others__name">
                          <span
                            >McAfee Internet Security 3 Cihaz/Tüm
                            platformlar</span
                          >
                        </div>
                      </a>
                      <div class="basket-promotion-others__price">
                        <div class="basket-promotion-others__price-wrapper">
                          <span class="discount">200,00 TL </span>
                          <strong>159,01</strong> TL
                        </div>
                      </div>
                      <form
                        action="/Basket/AddBundle?ProductId=89308&amp;BundleType=0&amp;MainItemLineId=16457908"
                        class="form-horizontal"
                        data-ajax="true"
                        data-ajax-begin="javascript:locked();"
                        data-ajax-method="POST"
                        data-ajax-success="OnSuccessAddBundle"
                        id="form0"
                        method="post"
                        role="form"
                      >
                        <input
                          name="__RequestVerificationToken"
                          type="hidden"
                          value="JsqUuXKTqaU_uouXODfmaas7EqmhxT0M18JWE3rSz9dGWs2m_HkzhSVdmK1Sy7RJr9v7UK6WBmgWAp7IrMwjfCBnJYQ1"
                        />
                        <input
                          type="submit"
                          class="btn btn-primary basket-promotion-others__button"
                          value="EKLE"
                        />
                      </form>
                    </div>
                    <div class="basket-promotion-others__row">
                      <a
                        href="../addison-ip-11s-iphone-11-ultra-slim-telefon-kilifi-siyah.html"
                      >
                        <div class="basket-promotion-others__image">
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload//Product/addison/thumb/TeoriV2-105344_small.jpg"
                            alt="addison-ip-11s-iphone-11-ultra-slim-telefon-kilifi-siyah.html"
                            title="addison-ip-11s-iphone-11-ultra-slim-telefon-kilifi-siyah.html"
                          />
                        </div>
                        <div class="basket-promotion-others__name">
                          <span
                            >ADDİSON IP-11S İPHONE 11 ULTRA SLİM TELEFON KILIFI-
                            SİYAH</span
                          >
                        </div>
                      </a>
                      <div class="basket-promotion-others__price">
                        <div class="basket-promotion-others__price-wrapper">
                          <span class="discount">82,00 TL </span>
                          <strong>73,41</strong> TL
                        </div>
                      </div>
                      <form
                        action="/Basket/AddBundle?ProductId=105344&amp;BundleType=0&amp;MainItemLineId=16457908"
                        class="form-horizontal"
                        data-ajax="true"
                        data-ajax-begin="javascript:locked();"
                        data-ajax-method="POST"
                        data-ajax-success="OnSuccessAddBundle"
                        id="form1"
                        method="post"
                        role="form"
                      >
                        <input
                          name="__RequestVerificationToken"
                          type="hidden"
                          value="mncoBRO3jv6N-ZQeOgbDjBrBW4AQMIyoYPrRwxMEnVMotOE33jvWpeFE-0AZRGuEAfTbIbyyDA3wjmyQM0frmljKpBs1"
                        />
                        <input
                          type="submit"
                          class="btn btn-primary basket-promotion-others__button"
                          value="EKLE"
                        />
                      </form>
                    </div>
                    <div class="basket-promotion-others__row">
                      <a
                        href="../ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html"
                      >
                        <div class="basket-promotion-others__image">
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload//Product/ttec/thumb/TeoriV2-108049_small.jpg"
                            alt="ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html"
                            title="ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html"
                          />
                        </div>
                        <div class="basket-promotion-others__name">
                          <span
                            >TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN
                            KORUYUCU</span
                          >
                        </div>
                      </a>
                      <div class="basket-promotion-others__price">
                        <div class="basket-promotion-others__price-wrapper">
                          <span class="discount">149,00 TL </span>
                          <strong>134,10</strong> TL
                        </div>
                      </div>
                      <form
                        action="/Basket/AddBundle?ProductId=108049&amp;BundleType=0&amp;MainItemLineId=16457908"
                        class="form-horizontal"
                        data-ajax="true"
                        data-ajax-begin="javascript:locked();"
                        data-ajax-method="POST"
                        data-ajax-success="OnSuccessAddBundle"
                        id="form2"
                        method="post"
                        role="form"
                      >
                        <input
                          name="__RequestVerificationToken"
                          type="hidden"
                          value="JmDlc7pcaVPDsRyCFhQfTT_CPVIFUHOc9EdtogmZxxnt3oQyPIVcRdsTtMr03dMX8bjkvLTNa8fZ02Uq0AsKkuNG3EM1"
                        />
                        <input
                          type="submit"
                          class="btn btn-primary basket-promotion-others__button"
                          value="EKLE"
                        />
                      </form>
                    </div>
                    <div class="basket-promotion-others__row">
                      <a
                        href="../apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html"
                      >
                        <div class="basket-promotion-others__image">
                          <img
                            src="https://cdn.vatanbilgisayar.com/Upload//Product/apple/thumb/TeoriV2-104376_small.jpg"
                            alt="apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html"
                            title="apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html"
                          />
                        </div>
                        <div class="basket-promotion-others__name">
                          <span
                            >APPLE MWVU2ZM/A İPHONE 11 SİLİKON KILIF -
                            SİYAH</span
                          >
                        </div>
                      </a>
                      <div class="basket-promotion-others__price">
                        <div class="basket-promotion-others__price-wrapper">
                          <span class="discount">399,00 TL </span>
                          <strong>359,10</strong> TL
                        </div>
                      </div>
                      <form
                        action="/Basket/AddBundle?ProductId=104376&amp;BundleType=0&amp;MainItemLineId=16457908"
                        class="form-horizontal"
                        data-ajax="true"
                        data-ajax-begin="javascript:locked();"
                        data-ajax-method="POST"
                        data-ajax-success="OnSuccessAddBundle"
                        id="form3"
                        method="post"
                        role="form"
                      >
                        <input
                          name="__RequestVerificationToken"
                          type="hidden"
                          value="had8UIbltPDTctWjf6jj8OKJuOyRWhX7tC5kHp4oQXKDsiRHt5fpzKL-n2bAYZtAyNlFyQEh3iKMGjEqoFVFTuDpado1"
                        />
                        <input
                          type="submit"
                          class="btn btn-primary basket-promotion-others__button"
                          value="EKLE"
                        />
                      </form>
                    </div>
                    <div class="text-center">
                      <a href="#" id="discount" class="discount-link">
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
                </div>
              </div>
            </div>

            <div
              class="wrapper-product wrapper-product--dark visilabs-basket-promoted basket-promoted-products"
            >
              <div class="global-container">
                <div class="global-component-header clearfix">
                  <h3 class="global-component-header__title">
                    Bunu Alanlar Bunları da Aldı
                  </h3>
                </div>
                <div
                  class="owl-carousel basket-owl owl-theme vis-basket-widget owl-loaded owl-drag"
                >
                  <div class="owl-stage-outer">
                    <div
                      class="owl-stage"
                      style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2462px;"
                    >
                      <div class="owl-item active" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/ttec-2pns402-superslim-iphone-11-koruma-kilifi-seffaf.html?OM.zn=also_bought_product-w9&amp;OM.zpc=2PNS402"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-105393_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"
                                    title="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-105393_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"
                                    title="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-105393_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"
                                    title="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-105393_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"
                                    title="TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                TTEC SUPERSLİM İPHONE 11 KORUMA KILIFI-ŞEFFAF
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">70</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item active" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/mv7n2tu-a-apple-airpods-2-bluetooth-kulaklik.html?OM.zn=also_bought_product-w9&amp;OM.zpc=MV7N2TU/A"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-94156_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"
                                    title="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-94156_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"
                                    title="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-94156_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"
                                    title="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-94156_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"
                                    title="APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                APPLE MV7N2TU/A AİRPODS 2.NESİL VE ŞARJ KUTUSU
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">1.599</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item active" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/ttec-airglass-edgecolor-iphone-11-cam-ekran-koruyucu.html?OM.zn=also_bought_product-w9&amp;OM.zpc=2ECR45"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-108049_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"
                                    title="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-108049_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"
                                    title="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-108049_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"
                                    title="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/TeoriV2-108049_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"
                                    title="TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN KORUYUCU"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                TTEC AIRGLASS EDGECOLOR IPHONE 11 CAM EKRAN
                                KORUYUCU
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">149</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item active" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/addison-ip-xr-full-cover-0-33-mm-2-5d-iphone-xr-cam-ekran-koruyucu.html?OM.zn=also_bought_product-w9&amp;OM.zpc=IP-XR"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/addison/thumb/v2-92708_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"
                                    title="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/addison/thumb/v2-92708_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"
                                    title="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/addison/thumb/v2-92708_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"
                                    title="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/addison/thumb/v2-92708_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"
                                    title="ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D İPHONE XR CAM EKRAN KORUYUCU"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                ADDISON IP-XR- IPHONE 11 FULL COVER 0.33 MM 2.5D
                                İPHONE XR CAM EKRAN KORUYUCU
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">125</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/s-link-ip-g19-10000mah-1-usb-port-2-in-1-cable-siyah-tasinabilir-pil-sarj-cihazi.html?OM.zn=also_bought_product-w9&amp;OM.zpc=IP-G19"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93285_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93285_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93285_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93285_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                S-LİNK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE
                                SİYAH TAŞINABİLİR PİL ŞARJ CİHAZI
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">130</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/s-link-ip-g11m-10-000mah-2-usb-port-tasinabilir-sarj-cihazi-beyaz.html?OM.zn=also_bought_product-w9&amp;OM.zpc=IP-G11M%20BEYAZ"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93505_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"
                                    title="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93505_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"
                                    title="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93505_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"
                                    title="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/v2-93505_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"
                                    title="S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR ŞARJ CİHAZI- BEYAZ"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                S-LİNK IP-G11M 10.000mAh 2 USB PORT TAŞINABİLİR
                                ŞARJ CİHAZI- BEYAZ
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">130</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/s-link-ip-g2710-10-000mah-2-usb-port-lcd-ekran-tasinabilir-sarj-cihazi-beyaz.html?OM.zn=also_bought_product-w9&amp;OM.zpc=IP-G2710"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-105405_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"
                                    title="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-105405_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"
                                    title="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-105405_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"
                                    title="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-105405_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"
                                    title="S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN TAŞINABİLİR ŞARJ CİHAZI-BEYAZ"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                S-LINK IP-G2710 10.000MAH 2 USB PORT LCD EKRAN
                                TAŞINABİLİR ŞARJ CİHAZI-BEYAZ
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">130</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/s-link-ip-g19-10000mah-1-usb-port-2-in-1-cable-yesil-tasinabilir-pil-sarj-cihazi.html?OM.zn=also_bought_product-w9&amp;OM.zpc=IP-G19G"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-104661_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-104661_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-104661_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/s-link/thumb/TeoriV2-104661_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"
                                    title="S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                S-LINK IP-G19 10000mAh 1 USB PORT 2 İN 1 CABLE
                                YEŞİL TAŞINABİLİR PİL ŞARJ CİHAZI
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">140</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/apple-mwvg2zm-a-iphone-11-telefon-kilifi-seffaf.html?OM.zn=also_bought_product-w9&amp;OM.zpc=MWVG2ZM/A"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104375_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"
                                    title="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104375_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"
                                    title="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104375_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"
                                    title="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104375_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"
                                    title="APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -  ŞEFFAF"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                APPLE MWVG2ZM/A İPHONE 11 TELEFON KILIFI -
                                ŞEFFAF
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">399</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/apple-mwvu2zm-a-iphone-11-silikon-kilif-siyah.html?OM.zn=also_bought_product-w9&amp;OM.zpc=MWVU2ZM/A"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104376_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"
                                    title="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104376_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"
                                    title="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104376_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"
                                    title="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/apple/thumb/TeoriV2-104376_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"
                                    title="APPLE MWVU2ZM/A  İPHONE 11 SİLİKON KILIF - SİYAH"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                APPLE MWVU2ZM/A İPHONE 11 SİLİKON KILIF - SİYAH
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">399</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/ttec-mypowerslim-s-10-000-mah-tasinabilir-sarj-aleti-siyah.html?OM.zn=also_bought_product-w9&amp;OM.zpc=2BB165S"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/v2-94072_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"
                                    title="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/v2-94072_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"
                                    title="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/v2-94072_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"
                                    title="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/ttec/thumb/v2-94072_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"
                                    title="TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ ALETİ- SİYAH"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                TTEC MYPOWERSLİM S 10.000 mAh TAŞINABİLİR ŞARJ
                                ALETİ- SİYAH
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">100</span
                                ><span class="product-list__currency"> TL</span>
                              </div>
                            </div>
                            <div class="product-list__comp"></div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" style="width: 205.164px;">
                        <div class="item ss">
                          <div class="product-list product-list--fourth">
                            <div class="product-list__image-safe">
                              <a
                                href="https://www.vatanbilgisayar.com/snopy-sn-tws03-mobil-telefon-uyumlu-bluetooth-tws-mikrofonlu-kulaklik-beyaz.html?OM.zn=also_bought_product-w9&amp;OM.zpc=SN-TWS03"
                                class="product-list__image-safe-link vl-buyed"
                                ><picture>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/snopy/thumb/109478_small.jpg"
                                    media="(min-width: 1000px)"
                                    alt="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"
                                    title="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/snopy/thumb/109478_small.jpg"
                                    media="(min-width: 600px)"
                                    alt="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"
                                    title="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"/>
                                  <source
                                    srcset="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/snopy/thumb/109478_small.jpg"
                                    media="(min-width: 300px)"
                                    alt="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"
                                    title="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"/>
                                  <img
                                    src="https://www.vatanbilgisayar.com/UPLOAD/PRODUCT/snopy/thumb/109478_small.jpg"
                                    class="img-responsive product-list__image"
                                    alt="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"
                                    title="SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH TWS MİKROFONLU KULAKLIK- BEYAZ"/></picture
                              ></a>
                            </div>
                            <div class="product-list__content">
                              <div class="product-list__product-name">
                                SNOPY SN-TWS03 MOBİL TELEFON UYUMLU BLUETOOTH
                                TWS MİKROFONLU KULAKLIK- BEYAZ
                              </div>
                              <div class="product-list__cost">
                                <span class="product-list__price">315</span
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
                      <span
                        class="btn-carousel-controls icon-angle-right"
                      ></span>
                    </button>
                  </div>
                  <div class="owl-dots">
                    <button role="button" class="owl-dot active">
                      <span></span></button
                    ><button role="button" class="owl-dot"><span></span></button
                    ><button role="button" class="owl-dot">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-4">
            <div class="basket-ordersummary">
              <h4 class="basket-ordersummary__title">Sipariş Özeti</h4>
              <div class="basket-ordersummary__secure-shopping">
                <img
                  src="/assets/dist/images/secure-shopping-icon.png"
                  alt="#"
                  class="img-responsive"
                />
                <div class="basket-ordersummary__secure-shopping-text">
                  <strong>GÜVENLİ</strong>
                  <span>ALIŞVERİŞ</span>
                </div>
              </div>
              <img src="" alt="" />
              <table class="table basket-ordersummary__list">
                <tbody>
                  <tr>
                    <td><strong>Ara Toplam</strong></td>
                    <td class="text-right">6.439,83 TL</td>
                  </tr>
                  <tr>
                    <td><strong>KDV</strong></td>
                    <td class="text-right">1.159,17 TL</td>
                  </tr>
                  <tr class="basket-ordersummary__total">
                    <td>TOPLAM</td>
                    <td class="text-right active">
                      <strong>
                        7.599,00
                      </strong>
                      TL
                    </td>
                  </tr>
                </tbody>
              </table>
              <form
                action="/Basket/ToSecondStep?returnUrl=%2Fsepet%2Fsepetim%2F"
                class="form-horizontal"
                method="post"
                role="form"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="ONuPXozYBmaZ2jjaP91MROJHHavyuQKcvGemqEUF7wNpE27d2w_Pz7mBSTUG_q7omyyNdcuDgH_YoMvZFUJ-cnQ5JVM1"
                />
                <input type="hidden" id="current" name="current" value="0" />
                <input
                  type="submit"
                  class="btn btn-block btn-success input-lg basket-ordersummary__button"
                  value="DEVAM ET"
                />
              </form>
              <img
                src="/assets/dist/images/signup_logos.png"
                alt="#"
                class="basket-ordersummary__logos"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import Products from "@/Products";
import BasketCartTableRow from "@/components/BasketCartTableRow";
export default {
  name: "CartPage",
  props: {},
  components: { BasketCartTableRow },
  computed: {},
  data() {
    return {
      productsData: Products.data,
      Cart: Products.inCart,
      dropdownOpen: false
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
    <div class="basket basket-addresses" v-if="Cart.length < 1">
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
                <!-- Ürünler listelenecek -->
                <BasketCartTableRow :productId="cartItem.pid" :cartCount="cartItem.count" v-for="cartItem in Cart" :key="cartItem.count"/>
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
                  src="https://www.vatanbilgisayar.com/assets/dist/images/secure-shopping-icon.png"
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
                    <td class="text-right">{{formatPrice(GetTotal()*0.88)}} TL</td>
                  </tr>
                  <tr>
                    <td><strong>KDV</strong></td>
                    <td class="text-right">{{formatPrice(GetTotal()*0.22)}} TL</td>
                  </tr>
                  <tr class="basket-ordersummary__total">
                    <td>TOPLAM</td>
                    <td class="text-right active">
                      <strong>
                        {{formatPrice(GetTotal())}}
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
                src="https://www.vatanbilgisayar.com/assets/dist/images/signup_logos.png"
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

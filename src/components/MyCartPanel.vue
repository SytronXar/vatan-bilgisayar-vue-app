<script>
import Products from "@/Products";
import BasketCartTableRow from "@/components/BasketCartTableRow";
export default {
  components: { BasketCartTableRow },
  data() {
    return {
      Cart: Products.inCart,
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
            <div class="basket-cart__table-column count hidden-xs hidden-sm">
              Adet
            </div>
            <div class="basket-cart__table-column price  hidden-xs hidden-sm">
              Avantajlı Fiyat
            </div>
            <div
              class="basket-cart__table-column warranty  hidden-xs hidden-sm"
            >
              Garantiyi Uzat
            </div>
            <div class="basket-cart__table-column remove  hidden-xs hidden-sm">
              Sil
            </div>
          </div>
          <!-- Ürünler listelenecek -->
          <BasketCartTableRow
            :productId="cartItem.pid"
            :cartCount="cartItem.count"
            v-for="cartItem in Cart"
            :key="cartItem.count"
          />
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
              <td class="text-right">
                {{ formatPrice(GetTotal() * 0.88) }} TL
              </td>
            </tr>
            <tr>
              <td><strong>KDV</strong></td>
              <td class="text-right">
                {{ formatPrice(GetTotal() * 0.22) }} TL
              </td>
            </tr>
            <tr class="basket-ordersummary__total">
              <td>TOPLAM</td>
              <td class="text-right active">
                <strong>
                  {{ formatPrice(GetTotal()) }}
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
</template>
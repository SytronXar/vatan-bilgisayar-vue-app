<script>
import Products from "@/Products";
import CartButtonItem from "@/components/CartButton/TheCartButtonItem";
export default {
  props: {},
  components: {
    CartButtonItem
  },
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
          Products.data.find(data => data.id === cartItem.pid).cost*cartItem.count;
      });
      return total;
    }
  }
};
</script>
<template>
  <div
    class="btn-group basketGroup"
    :class="{ open: dropdownOpen }"
    @mouseenter="OpenDropdown"
    @mouseleave="CloseDropdown"
  >
    <button
      type="button"
      id="btnMyBasket"
      class="btn btn-primary btn-basket dropdown-toggle"
      aria-haspopup="true"
      :aria-expanded="!dropdownOpen"
    >
      <span class="icon-shopping-card"></span>
      <span class="btn-basket--text">SEPETİM</span>
      <span class="btn-basket--count">0</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-basket openBasket">
      <div class="basket-lists">
        <li
          id="16453018"
          class="test"
          data-count="1"
          v-for="cartItem in Cart"
          :key="cartItem.count"
        >
          <CartButtonItem :CartId="cartItem.id" :pId="cartItem.pid" />
        </li>
      </div>
      <li class="basket-bottom-dp">
        <div class="wrapper-total-cost">
          <span class="basket-sum-txt">TOPLAM:</span>
          <span class="update-"
            >{{formatPrice(GetTotal())}}<span class="price-cent-txt">TL</span></span
          >
        </div>
        <div class="text-center">
          <form
            action="/Basket/ToFirstStep"
            class="loaderForm"
            method="post"
            role="form"
          >
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="fLDOPXnJyPgdWBR5kZu7mD13jCeC-2PH9JLW1CRGcZpFniXgt3aOv0Sf0sNYA8sHjJiuQOhzhx5HdN0rs9vvp8FdEOY1"
            />
            <input type="hidden" id="current" name="current" value="0" />
            <input
              class="btn btn-finish btn-finish__dropdown"
              type="submit"
              value="ALIŞVERİŞİ TAMAMLA"
            />
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>
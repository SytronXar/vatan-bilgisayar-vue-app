<script>
// @ is an alias to /src
import Products from "@/Products";
export default {
  name: "UrunSayfasi",
  computed: {},
  props: {
    CartId: {
      type: String,
      required: true
    },
    pId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cartItem: Products.inCart.find(inCart => inCart.id === this.CartId),
      product: Products.data.find(data => data.id === this.pId)
    };
  },
  methods: {
    ProductHref() {
      return this.product.name.toLowerCase().replace(/\s/g, "-");
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>
<template>
  <router-link
    :id="pId"
    :to="{
      name: 'ProductPage',
      params: {
        productId: pId,
        producthref: ProductHref()
      }
    }"
  >
    <picture class="active">
      <img
        :src="product.images[0]"
        class="img-responsive product-list__image"
      />
    </picture>
    <div class="wrapper-product-text">
      <span class="product-name">{{ product.name }}</span>
      <span class="product-cost">{{ formatPrice(product.cost*cartItem.count) }}</span>
    </div>
  </router-link>
</template>
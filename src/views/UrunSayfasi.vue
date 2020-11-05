<template>
  <div class="urun-sayfasi">
    <h2>Ürün Sayfasi</h2>
    <h3>{{ productId }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UrunSayfasi",
  components: {},
  data() {
    return {
      productId: this.$route.params.id
    }
  }
};
</script>
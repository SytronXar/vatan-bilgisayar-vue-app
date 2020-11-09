<template>
  <div class="owl-item active" style="width: 179.625px;">
    <div class="slider-img">
      <img
        :src="imageSrc"
        :data-src="imageSrc"
        class="lazyimg"
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "UrunSayfasi",
  computed: {},
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
};
</script>
<template>
  <div class="anasayfa">
    <GununFirsatlari />
    <div class="wrapper-product wrapper-product--light visilabs-best_seller">
      <TwoCarousel :message="'Webe Özel Sınırlı Stok'" />
      <FiveCarousel :message="'En Çok Satanlar'" />
      <FiveCarousel :message="'Favori Kategorinizde En Çok Satanlar'" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import GununFirsatlari from "@/components/GununFirsatlari";
import FiveCarousel from "@/components/Carousel/FiveCarousel";
import TwoCarousel from "@/components/Carousel/TwoCarousel";
export default {
  name: "Anasayfa",
  components: {
    GununFirsatlari,
    FiveCarousel,
    TwoCarousel
  }
};
</script>

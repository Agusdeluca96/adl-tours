<template>
  <div class="home">
    <div class="header">
      <div class="header__logo-container">
        <img src="@/assets/images/logo.png" alt="Logo" class="header__logo" />
      </div>
      <div class="header__text-container">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#tours" class="btn btn--white btn--rounded btn--animated">Discover our tours</a>
      </div>
    </div>

    <section class="section-about">
      <div class="row">
        <SectionHeading heading="Exciting tours for adventurous people" />
        <div class="col-1-of-2">
          <ParagraphTitled
            title="You're going to fall in love with nature"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec consequat est, et auctor dolor. Integer et ex ac libero elementum pharetra. Etiam bibendum augue dui, a eleifend risus venenatis eget."
            paragraphClass="u-mb-medium"
          />

          <ParagraphTitled
            title="Live adventures like you never have before"
            paragraph="Nullam et hendrerit odio, et molestie nisl. In eget varius ligula. Duis metus risus, tristique ac auctor vel, faucibus vel orci."
            paragraphClass="u-mb-medium"
          />

          <a href="#" class="btn-text">Learn more &rarr;</a>
        </div>

        <div class="col-1-of-2">
          <Composition :images="aboutImages" />
        </div>
      </div>
    </section>

    <section class="section-features">
      <div class="row">
        <div class="col-1-of-4" v-for="feature in features" :key="`feature-${feature.id}`">
          <FeatureBox :feature="feature" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FEATURES, ABOUT_IMAGES } from "@/_factories";

import FeatureBox from "@/components/FeatureBox.vue";
import Composition from "@/components/Composition.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import ParagraphTitled from "@/components/ParagraphTitled.vue";

export default {
  name: "home",

  components: {
    FeatureBox,
    Composition,
    SectionHeading,
    ParagraphTitled
  },

  data: () => {
    return {
      features: FEATURES,
      aboutImages: ABOUT_IMAGES
    };
  }
};
</script>

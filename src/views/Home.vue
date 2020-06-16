<template>
  <div class="home">
    <div class="header">
      <div class="header__logo-container">
        <img src="@/assets/images/adl-tours-white.png" alt="Logo" class="header__logo" />
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
        <SectionHeading heading="Exciting tours for adventurous people" customClasses="u-mb-big" />
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

    <section class="section-tours">
      <SectionHeading heading="Most popular tours" customClasses="u-mb-big" />
      <div class="row">
        <div class="col-1-of-3" v-for="tour in tours" :key="`tour-${tour.id}`">
          <Card :tour="tour" />
        </div>
      </div>
      <div class="u-text-center u-mt-huge">
        <a href="#" class="btn btn--rounded btn--green">Discover all tours</a>
      </div>
    </section>

    <section class="section-stories">
      <BackgroundVideo
        mp4Src="https://agustindeluca.com.ar/projects/adl-tours/assets/videos/beach-background.mp4"
        webmSrc="https://agustindeluca.com.ar/projects/adl-tours/assets/videos/beach-background.webm"
      />

      <SectionHeading heading="We make people genuinely happy" customClasses="u-mb-big" />

      <div class="row" v-for="story in stories" :key="`story-${story.id}`">
        <Story :story="story" />
      </div>
      <div class="u-text-center u-mt-huge">
        <a href="#" class="btn-text">Read all stories &rarr;</a>
      </div>
    </section>
    <section class="section-book">
      <div class="row">
        <BookingBox />
      </div>
    </section>
  </div>
</template>

<script>
import { ABOUT_IMAGES, FEATURES, TOURS, STORIES } from "@/_factories";

import Card from "@/components/Card.vue";
import Story from "@/components/Story.vue";
import FeatureBox from "@/components/FeatureBox.vue";
import BookingBox from "@/components/BookingBox.vue";
import Composition from "@/components/Composition.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import ParagraphTitled from "@/components/ParagraphTitled.vue";
import BackgroundVideo from "@/components/BackgroundVideo.vue";

export default {
  name: "home",

  components: {
    Card,
    Story,
    FeatureBox,
    BookingBox,
    Composition,
    SectionHeading,
    ParagraphTitled,
    BackgroundVideo
  },

  data: () => {
    return {
      aboutImages: ABOUT_IMAGES,
      features: FEATURES,
      tours: TOURS,
      stories: STORIES
    };
  }
};
</script>

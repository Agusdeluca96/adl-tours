<template>
  <div class="home">
    <div class="header">
      <div class="header__logo-container">
        <img
          src="@/assets/images/adl-tours-white.png"
          alt="Logo"
          class="header__logo"
        />
      </div>
      <div class="header__text-container">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>

        <a
          href="#section-popular-tours"
          class="btn btn--white btn--rounded btn--animated"
          >Discover our tours</a
        >
      </div>
    </div>

    <section class="section-about">
      <section-heading
        heading="Exciting tours for adventurous people"
        customClasses="u-mb-big"
      />
      <div class="row">
        <div class="col-1-of-2">
          <paragraph-titled
            title="You're going to fall in love with nature"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec consequat est, et auctor dolor. Integer et ex ac libero elementum pharetra. Etiam bibendum augue dui, a eleifend risus venenatis eget."
            paragraphClass="u-mb-medium"
          />

          <paragraph-titled
            title="Live adventures like you never have before"
            paragraph="Nullam et hendrerit odio, et molestie nisl. In eget varius ligula. Duis metus risus, tristique ac auctor vel, faucibus vel orci."
            paragraphClass="u-mb-medium"
          />

          <a href="#" class="btn-text">Learn more &rarr;</a>
        </div>

        <div class="col-1-of-2">
          <images-composition :images="aboutImages" />
        </div>
      </div>
    </section>

    <section class="section-features">
      <div class="row">
        <div
          class="col-1-of-4"
          v-for="feature in features"
          :key="`feature-${feature.id}`"
        >
          <feature-box :feature="feature" />
        </div>
      </div>
    </section>

    <section id="popular-tours" class="section-tours">
      <section-heading heading="Most popular tours" customClasses="u-mb-big" />
      <div class="row">
        <div class="col-1-of-3" v-for="tour in tours" :key="`tour-${tour.id}`">
          <tour-card
            :tour="tour"
            @openBookingPopup="tour => openBookingPopup(tour)"
          />
        </div>
      </div>
      <div class="u-text-center u-mt-huge">
        <a href="#" class="btn btn--rounded btn--green">Discover all tours</a>
      </div>
    </section>
    <booking-popup
      :tour="selectedTour"
      @closeBookingPopup="closeBookingPopup()"
    />

    <section class="section-stories">
      <background-video
        mp4Src="https://adl-tours.agustindeluca.com.ar/assets/videos/beach-background.mp4"
        webmSrc="https://adl-tours.agustindeluca.com.ar/assets/videos/beach-background.webm"
      />

      <section-heading
        heading="We make people genuinely happy"
        customClasses="u-mb-big"
      />

      <div class="row" v-for="story in stories" :key="`story-${story.id}`">
        <story-box :story="story" />
      </div>
      <div class="u-text-center u-mt-huge">
        <a href="#" class="btn-text">Read all stories &rarr;</a>
      </div>
    </section>
    <section id="booking" class="section-book">
      <div class="row">
        <div class="booking-box">
          <div class="booking-box__form-container">
            <booking-form />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ABOUT_IMAGES, FEATURES, TOURS, STORIES } from '@/_factories';

import TourCard from '@/components/TourCard.vue';
import StoryBox from '@/components/StoryBox.vue';
import FeatureBox from '@/components/FeatureBox.vue';
import BookingForm from '@/components/BookingForm.vue';
import BookingPopup from '@/components/BookingPopup.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import ParagraphTitled from '@/components/ParagraphTitled.vue';
import BackgroundVideo from '@/components/BackgroundVideo.vue';
import ImagesComposition from '@/components/ImagesComposition.vue';

export default {
  name: 'home',

  components: {
    TourCard,
    StoryBox,
    FeatureBox,
    BookingForm,
    BookingPopup,
    SectionHeading,
    ParagraphTitled,
    BackgroundVideo,
    ImagesComposition
  },

  data: () => {
    return {
      aboutImages: ABOUT_IMAGES,
      features: FEATURES,
      tours: TOURS,
      stories: STORIES,
      selectedTour: {}
    };
  },

  methods: {
    openBookingPopup(tour) {
      this.selectedTour = tour;
    },

    closeBookingPopup() {
      this.selectedTour = {};
    }
  }
};
</script>

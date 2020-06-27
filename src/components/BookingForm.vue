<template>
  <form action="#" class="booking-form">
    <section-heading heading="Start booking now" customClasses="u-mb-medium" />

    <div class="booking-form__group">
      <input
        id="name"
        type="text"
        class="booking-form__input"
        placeholder="Full Name"
        required
      />
      <label for="name" class="booking-form__label">Full Name</label>
    </div>
    <div class="booking-form__group">
      <input
        id="email"
        type="email"
        class="booking-form__input"
        placeholder="Email address"
        required
      />
      <label for="email" class="booking-form__label">Email address</label>
    </div>
    <div class="booking-form__group u-mb-medium">
      <div class="booking-form__radio-group">
        <input
          id="small-group"
          type="radio"
          class="booking-form__radio-input"
          name="group-size"
        />
        <label for="small-group" class="booking-form__radio-label">
          <span class="booking-form__radio-button"></span>
          Small tour group
        </label>
      </div>
      <div class="booking-form__radio-group">
        <input
          id="big-group"
          type="radio"
          class="booking-form__radio-input"
          name="group-size"
        />
        <label for="big-group" class="booking-form__radio-label">
          <span class="booking-form__radio-button"></span>
          Big tour group
        </label>
      </div>
    </div>
    <div class="booking-form__group">
      <button class="btn btn--green btn--rounded">Next step &rarr;</button>
    </div>
  </form>
</template>

<script>
import SectionHeading from '@/components/SectionHeading.vue';

export default {
  components: {
    SectionHeading
  }
};
</script>

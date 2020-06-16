<template>
  <div class="booking-box">
    <div class="booking-box__form-container">
      <form action="#" class="form">
        <SectionHeading heading="Start booking now" customClasses="u-mb-medium" />

        <div class="form__group">
          <input id="name" type="text" class="form__input" placeholder="Full Name" required />
          <label for="name" class="form__label">Full Name</label>
        </div>
        <div class="form__group">
          <input id="email" type="email" class="form__input" placeholder="Email address" required />
          <label for="email" class="form__label">Email address</label>
        </div>
        <div class="form__group u-mb-medium">
          <div class="form__radio-group">
            <input id="small-group" type="radio" class="form__radio-input" name="group-size" />
            <label for="small-group" class="form__radio-label">
              <span class="form__radio-button"></span>
              Small tour group
            </label>
          </div>
          <div class="form__radio-group">
            <input id="big-group" type="radio" class="form__radio-input" name="group-size" />
            <label for="big-group" class="form__radio-label">
              <span class="form__radio-button"></span>
              Big tour group
            </label>
          </div>
        </div>
        <div class="form__group">
          <button class="btn btn--green btn--rounded">Next step &rarr;</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SectionHeading from "@/components/SectionHeading.vue";

export default {
  name: "BookingBox",

  components: {
    SectionHeading
  }
};
</script>



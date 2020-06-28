<template>
  <div id="tour-terms" :class="`booking-popup ${isOpened}`">
    <div class="booking-popup__container">
      <div class="booking-popup__left">
        <img
          class="booking-popup__img"
          src="@/assets/images/nat-8.jpg"
          alt="Tour photo"
        />
        <img
          class="booking-popup__img"
          src="@/assets/images/nat-9.jpg"
          alt="Tour photo"
        />
      </div>
      <div class="booking-popup__right">
        <a
          href="#popular-tours"
          class="booking-popup__close"
          @click="$emit('closeBookingPopup')"
          >&times;</a
        >
        <h2 class="heading-secondary u-mb-small">{{ tour.name }}</h2>
        <h3 class="heading-tertiary u-mb-small">
          Important &ndash; Please read there terms before booking
        </h3>
        <p class="booking-popup__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptate natus quis beatae neque, labore qui animi quibusdam illum
          dolore quam. Delectus natus aliquam quod totam soluta consequuntur
          distinctio fuga. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui aut laboriosam sunt ex, deserunt repellendus rem
          perspiciatis iure cupiditate quis veniam officia nesciunt hic labore
          officiis delectus molestiae! Neque, id. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eveniet, assumenda doloribus rerum
          quidem aliquam nemo minima numquam sequi eos ad, quo odio sit magnam
          placeat? Quos ullam et minima voluptates! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit.
        </p>
        <a
          href="#booking"
          class="btn btn--green btn--rounded"
          @click="$emit('closeBookingPopup')"
          >Accept terms</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tour: Object
  },

  computed: {
    isOpened() {
      return this.tour.id != null ? 'booking-popup--opened' : '';
    }
  }
};
</script>

<template>
  <div class="tour-card">
    <div
      :class="
        `tour-card__side tour-card__side--front tour-card__side--front-${tour.id}`
      "
    >
      <div :class="`tour-card__picture tour-card__picture--${tour.id}`">
        &nbsp;
      </div>
      <h4 class="tour-card__heading">
        <span
          :class="`tour-card__heading-span tour-card__heading-span--${tour.id}`"
          >{{ tour.name }}</span
        >
      </h4>
      <div class="tour-card__details">
        <ul>
          <li>{{ tour.duration }}</li>
          <li>{{ tour.capacity }}</li>
          <li>{{ tour.guides }}</li>
          <li>{{ tour.lodging }}</li>
          <li>{{ tour.difficulty }}</li>
        </ul>
      </div>
    </div>
    <div
      :class="
        `tour-card__side tour-card__side--back tour-card__side--back-${tour.id}`
      "
    >
      <div class="tour-card__call-to-action">
        <div class="tour-card__price-box">
          <p class="tour-card__price-only">Only</p>
          <p class="tour-card__price-value">${{ tour.price }}</p>
        </div>
        <a
          href="#tour-terms"
          class="btn btn--rounded btn--white"
          @click="$emit('openBookingPopup', tour)"
        >
          Book now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tour: Object
  }
};
</script>

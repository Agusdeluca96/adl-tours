<template>
  <div class="card">
    <div :class="`card__side card__side--front card__side--front-${tour.id}`">
      <div :class="`card__picture card__picture--${tour.id}`">&nbsp;</div>
      <h4 class="card__heading">
        <span :class="`card__heading-span card__heading-span--${tour.id}`">{{ tour.name }}</span>
      </h4>
      <div class="card__details">
        <ul>
          <li>{{ tour.duration }}</li>
          <li>{{ tour.capacity }}</li>
          <li>{{ tour.guides }}</li>
          <li>{{ tour.lodging }}</li>
          <li>{{ tour.difficulty }}</li>
        </ul>
      </div>
    </div>
    <div :class="`card__side card__side--back card__side--back-${tour.id}`">
      <div class="card__call-to-action">
        <div class="card__price-box">
          <p class="card__price-only">Only</p>
          <p class="card__price-value">${{ tour.price }}</p>
        </div>
        <a href="#booking-popup" class="btn btn--rounded btn--white">Book now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    tour: Object
  }
};
</script>

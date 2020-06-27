<template>
  <div class="story-box">
    <figure class="story-box__shape">
      <img
        :src="story.personImage"
        :alt="story.personName"
        class="story-box__image"
      />
      <figcaption class="story-box__caption">{{ story.personName }}</figcaption>
    </figure>
    <div class="story-box__text">
      <h3 class="heading-tertiaty u-mb-small">{{ story.title }}</h3>
      <p>{{ story.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: Object
  }
};
</script>

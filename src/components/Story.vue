<template>
  <div class="story">
    <figure class="story__shape">
      <img :src="story.personImage" :alt="story.personName" class="story__image" />
      <figcaption class="story__caption">{{ story.personName }}</figcaption>
    </figure>
    <div class="story__text">
      <h3 class="heading-tertiaty u-mb-small">{{ story.title }}</h3>
      <p>{{ story.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Story",

  props: {
    story: Object
  }
};
</script>

<template>
  <div class="section-heading u-text-center u-mb-big">
    <h2 class="heading-secondary">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  name: "SectionHeading",

  props: {
    heading: String
  }
};
</script>

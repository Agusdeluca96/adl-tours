<template>
  <div :class="`section-heading u-text-center ${customClasses}`">
    <h2 class="heading-secondary">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    customClasses: String
  }
};
</script>

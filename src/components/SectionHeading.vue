<template>
  <div class="section-heading u-text-center u-mb-big">
    <h2 class="heading-secondary">{{ heading }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SectionHeading",

  props: {
    heading: String
  }
});
</script>

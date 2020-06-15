<template>
  <div class="paragraph-titled">
    <h3 :class="`heading-tertiary u-mb-small ${titleClass}`">{{ title }}</h3>
    <p :class="`${paragraphClass}`">{{ paragraph }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ParagraphTitled",

  props: {
    title: String,
    titleClass: String,
    paragraph: String,
    paragraphClass: String
  }
});
</script>

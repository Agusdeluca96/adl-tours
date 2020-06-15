<template>
  <div class="paragraph-titled">
    <h3 :class="`heading-tertiary u-mb-small ${titleClass}`">{{ title }}</h3>
    <p :class="`${paragraphClass}`">{{ paragraph }}</p>
  </div>
</template>
<script>
export default {
  name: "ParagraphTitled",

  props: {
    title: String,
    titleClass: String,
    paragraph: String,
    paragraphClass: String
  }
};
</script>

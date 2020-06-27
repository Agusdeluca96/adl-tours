<template>
  <div class="feature-box">
    <i class="feature-box__icon" :class="feature.icon"></i>
    <paragraph-titled
      :title="feature.title"
      titleClass="uppercase"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
    />
  </div>
</template>

<script>
import ParagraphTitled from '@/components/ParagraphTitled.vue';

export default {
  components: {
    ParagraphTitled
  },

  props: {
    feature: Object
  }
};
</script>

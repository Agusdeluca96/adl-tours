<template>
  <div class="images-composition">
    <img
      v-for="image in images"
      :key="`image-${image.id}`"
      :srcSet="imageSrcSet(image)"
      sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
      :src="imageSrc(image)"
      :alt="image.alt"
      :class="
        `images-composition__photo images-composition__photo--p${image.id}`
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  },

  methods: {
    imageSrcSet(image) {
      return (
        require(`@/assets/images/${image.name}${image.extension}`) +
        ' 300w, ' +
        require(`@/assets/images/${image.name}-large${image.extension}`) +
        ' 1000w'
      );
    },

    imageSrc(image) {
      return require(`@/assets/images/${image.name}-large${image.extension}`);
    }
  }
};
</script>

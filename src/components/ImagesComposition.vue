<template>
  <div class="images-composition">
    <img
      v-for="image in images"
      :key="`image-${image.id}`"
      :src="image.src"
      :alt="image.name"
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
  }
};
</script>

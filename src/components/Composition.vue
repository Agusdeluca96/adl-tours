<template>
  <div class="composition">
    <img
      v-for="image in images"
      :key="`image-${image.id}`"
      :src="image.src"
      :alt="image.name"
      :class="`composition__photo composition__photo--p${image.id}`"
    />
  </div>
</template>

<script>
export default {
  name: "Composition",

  props: {
    images: Array
  }
};
</script>

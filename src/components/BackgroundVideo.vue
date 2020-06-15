<template>
  <div class="background-video">
    <video class="background-video__content" autoplay muted loop>
      <source :src="mp4Src" type="video/mp4" />
      <source :src="webmSrc" type="video/webm" />Your browser is not supported!
    </video>
  </div>
</template>

<script>
export default {
  name: "BackgroundVideo",

  props: {
    mp4Src: String,
    webmSrc: String
  }
};
</script>
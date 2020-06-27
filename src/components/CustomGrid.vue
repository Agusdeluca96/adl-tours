<template>
  <section class="custom-grid">
    <div class="row">
      <div class="col-1-of-2">Col 1 of 2</div>
      <div class="col-1-of-2">Col 1 of 2</div>
    </div>
    <div class="row">
      <div class="col-1-of-3">Col 1 of 3</div>
      <div class="col-1-of-3">Col 1 of 3</div>
      <div class="col-1-of-3">Col 1 of 3</div>
    </div>
    <div class="row">
      <div class="col-1-of-3">Col 1 of 3</div>
      <div class="col-2-of-3">Col 2 of 3</div>
    </div>
    <div class="row">
      <div class="col-1-of-4">Col 1 of 4</div>
      <div class="col-1-of-4">Col 1 of 4</div>
      <div class="col-1-of-4">Col 1 of 4</div>
      <div class="col-1-of-4">Col 1 of 4</div>
    </div>
    <div class="row">
      <div class="col-1-of-4">Col 1 of 4</div>
      <div class="col-1-of-4">Col 1 of 4</div>
      <div class="col-2-of-4">Col 2 of 4</div>
    </div>
    <div class="row">
      <div class="col-1-of-4">Col 1 of 4</div>
      <div class="col-3-of-4">Col 3 of 4</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomGrid'
};
</script>

<style lang="scss" scoped>
.custom-grid {
  .row {
    height: $grid-row-height;

    [class^='col-'] {
      background-color: orangered;
      color: $color-white;
      height: 100%;
      line-height: $grid-row-height;
      text-align: center;
    }
  }
}
</style>

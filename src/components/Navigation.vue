<template>
  <div class="navigation">
    <input id="navigation-toogle" class="navigation__checkbox" type="checkbox" />
    <label for="navigation-toogle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#about-us" class="navigation__link">About us</a>
        </li>
        <li class="navigation__item">
          <a href="#features" class="navigation__link">Your benfits</a>
        </li>
        <li class="navigation__item">
          <a href="#popular-tours" class="navigation__link">Popular tours</a>
        </li>
        <li class="navigation__item">
          <a href="#stories" class="navigation__link">Stories</a>
        </li>
        <li class="navigation__item">
          <a href="#book-now" class="navigation__link">Book now</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
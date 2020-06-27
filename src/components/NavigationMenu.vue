<template>
  <div class="navigation-menu">
    <input
      id="navigation-menu-toogle"
      class="navigation-menu__checkbox"
      type="checkbox"
    />
    <label for="navigation-menu-toogle" class="navigation-menu__button">
      <span class="navigation-menu__icon">&nbsp;</span>
    </label>

    <div class="navigation-menu__background">&nbsp;</div>

    <nav class="navigation-menu__nav">
      <ul class="navigation-menu__list">
        <li class="navigation-menu__item">
          <a href="#about-us" class="navigation-menu__link">About us</a>
        </li>
        <li class="navigation-menu__item">
          <a href="#features" class="navigation-menu__link">Your benfits</a>
        </li>
        <li class="navigation-menu__item">
          <a href="#popular-tours" class="navigation-menu__link"
            >Popular tours</a
          >
        </li>
        <li class="navigation-menu__item">
          <a href="#stories" class="navigation-menu__link">Stories</a>
        </li>
        <li class="navigation-menu__item">
          <a href="#book-now" class="navigation-menu__link">Book now</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

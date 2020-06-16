<template>
  <footer class="footer">
    <div class="footer__logo-container">
      <img src="@/assets/images/adl-tours.png" alt="Logo" class="footer__logo" />
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="#company" class="footer__link">Company</a>
            </li>
            <li class="footer__item">
              <a href="#contact-us" class="footer__link">Contact Us</a>
            </li>
            <li class="footer__item">
              <a href="#carrers" class="footer__link">Carrers</a>
            </li>
            <li class="footer__item">
              <a href="#privacy-policy" class="footer__link">Privacy Policy</a>
            </li>
            <li class="footer__item">
              <a href="#terms" class="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright">
          Developed by
          <a
            class="footer__link"
            href="https://agustindeluca.com.ar"
            target="_blank"
          >Agustin M. De Luca</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
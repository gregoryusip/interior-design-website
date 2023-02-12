<template>
  <div class="site-container">
    <div class="footer--above">
      <div class="footer--above__wrapper">
        <div class="footer--container-1">
          <img
            src="@/assets/img/logo/logo.png"
            alt="Logo"
            class="footer--container-1__img"
          />
          <p class="footer--container-1__subtitle">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div class="footer--container-1__socmed">
            <a href="#">
              <img src="@/assets/img/footer/facebook.svg" alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src="@/assets/img/footer/twitter.svg" alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src="@/assets/img/footer/linkedin.svg" alt="Facebook Icon" />
            </a>
            <a href="#">
              <img
                src="@/assets/img/footer/instagram.svg"
                alt="Facebook Icon"
              />
            </a>
          </div>
        </div>
        <div class="footer--container-2">
          <h5 class="footer--title">Pages</h5>
          <div class="footer--menu">
            <nuxt-link to="/about">
              <p class="footer--menu__item">About Us</p>
            </nuxt-link>
            <nuxt-link to="/projects">
              <p class="footer--menu__item">Our Projects</p>
            </nuxt-link>
            <nuxt-link to="/teams">
              <p class="footer--menu__item">Our Team</p>
            </nuxt-link>
            <nuxt-link to="/contact">
              <p class="footer--menu__item">Contact Us</p>
            </nuxt-link>
            <nuxt-link to="/services">
              <p class="footer--menu__item">Services</p>
            </nuxt-link>
            <nuxt-link to="/faq">
              <p class="footer--menu__item">FAQ</p>
            </nuxt-link>
          </div>
        </div>
        <div class="footer--container-3">
          <h5 class="footer--title">Services</h5>
          <div class="footer--menu">
            <nuxt-link to="/">
              <p class="footer--menu__item">Kitchen</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p class="footer--menu__item">Living Area</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p class="footer--menu__item">Bathroom</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p class="footer--menu__item">Dinning Hall</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p class="footer--menu__item">Bedroom</p>
            </nuxt-link>
          </div>
        </div>
        <div class="footer--container-4">
          <h5 class="footer--title">Contact</h5>
          <div class="footer--menu">
            <p class="footer--menu__item">
              55 East Birchwood Ave. <br />Brooklyn, New York 11201
            </p>
            <p class="footer--menu__item">contact@interno.com</p>
            <p class="footer--menu__item">(123) 456 - 7890</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer--bottom">
      <p class="footer--bottom__text">
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

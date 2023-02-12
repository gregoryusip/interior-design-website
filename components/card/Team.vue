<template>
  <div class="card-team">
    <div class="card-team--image group">
      <img
        :src="require(`@/assets/img/static/team/${item.img}`)"
        alt="Team Image"
        class="card-team--image__img"
      />
      <div class="card-team--image__overlay">
        <p class="card-team--image__overlay--text">
          <span>"</span>{{ item.quote }}<span>"</span>
        </p>
      </div>
    </div>
    <div class="card-team--content">
      <h4>{{ item.name }}</h4>
      <p class="text--subtitle">{{ item.role }}, {{ item.region }}</p>

      <div class="card-team--content__socmed">
        <a v-if="item.facebook" href="#">
          <img src="@/assets/img/footer/facebook.svg" alt="Facebook Icon" />
        </a>
        <a v-if="item.twitter" href="#">
          <img src="@/assets/img/footer/twitter.svg" alt="Twitter Icon" />
        </a>
        <a v-if="item.linkedin" href="#">
          <img src="@/assets/img/footer/linkedin.svg" alt="Linkedin Icon" />
        </a>
        <a v-if="item.instagram" href="#">
          <img src="@/assets/img/footer/instagram.svg" alt="Instagram Icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    item: Object,
  },
}
</script>

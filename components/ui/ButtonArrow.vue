<template>
  <nuxt-link to="/" class="button">
    <p class="button__text">{{ text }}</p>
    <!-- <IconArrowRight :iconColor="iconColor" /> -->
    <!-- <p class="button__icon"> -->
    <svg
      class="button__icon"
      width="19"
      height="17"
      fill="none"
      viewBox="0 0 19 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
    <!-- </p> -->
  </nuxt-link>
</template>

<script>
export default {
  name: 'ButtonArrow',
  props: {
    text: {
      type: String,
      default: 'Get Started',
    },
    iconColor: {
      type: String,
      default: '#CDA274',
    },
  },
}
</script>

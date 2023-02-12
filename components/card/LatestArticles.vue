<template>
  <div class="card-latest-articles">
    <h6 class="card-latest-articles--title">{{ title }}</h6>
    <p class="card-latest-articles--date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardLatestArticles',
  props: {
    title: {
      type: String,
      default: 'We Focus On Comfort And Gorgeous',
    },
    date: {
      type: String,
      default: '06/02/2020',
    },
  },
}
</script>

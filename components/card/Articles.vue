<template>
  <nuxt-link :to="`/blogs/${item.id}`">
    <div class="card-articles">
      <div class="card-articles__img">
        <img
          :src="require(`@/assets/img/static/blogs/${item.img}`)"
          alt="Projects"
        />
        <div class="card-articles__img--tag">
          <p>{{ item.tag }}</p>
        </div>
      </div>
      <h3 class="card-articles__title">
        {{ item.title }}
      </h3>
      <div class="card-articles__content">
        <p class="card-articles__content--date text--subtitle">
          {{ item.date }}
        </p>
        <div class="card-articles__content--button">
          <img src="@/assets/img/icon/chevron-right.svg" alt="Icon Chevron" />
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardArticles',
  props: {
    item: Object,
  },
}
</script>

<template>
  <div class="page-header">
    <img
      :src="require(`@/assets/img/header/${img}`)"
      alt="Header Image"
      class="page-header--img"
    />
    <div v-if="titleHeader" class="page-header--wrapper">
      <h1 class="page-header--wrapper__title">{{ title }}</h1>
      <p class="page-header--wrapper__subtitle text--subtitle">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    img: {
      type: String,
      default: 'services.jpg',
    },
    title: {
      type: String,
      default: 'Services',
    },
    subtitle: {
      type: String,
      default: 'Home / Services',
    },
    titleHeader: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

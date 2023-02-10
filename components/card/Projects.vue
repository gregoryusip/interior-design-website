<template>
  <div class="card-projects">
    <img src="@/assets/img/static/home/home-project-1.jpg" alt="Projects 1" />
    <div class="card-projects__content">
      <div class="card-projects__content--left">
        <h3 class="card-projects__content--left__title">
          {{ item.title }}
        </h3>
        <p class="card-projects__content--left__subtitle">
          {{ item.desc }}
        </p>
      </div>
      <div class="card-projects__content--right">
        <img src="@/assets/img/icon/chevron-right.svg" alt="Icon Chevron" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProjects',
  props: {
    item: Object,
  },
}
</script>

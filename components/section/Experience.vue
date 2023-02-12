<template>
  <div class="section--experience">
    <div class="site-container">
      <div class="section--experience__container">
        <div
          v-for="(item, i) in points"
          :key="`point-${i}`"
          class="section--experience__container--wrapper"
        >
          <h1 class="section--experience__container--wrapper__title text--85">
            {{ item.count }}
          </h1>
          <p class="section--experience__container--wrapper__subtitle">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionExperience',
  props: {
    points: Array,
  },
}
</script>

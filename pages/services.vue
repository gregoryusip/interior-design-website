<template>
  <div class="services">
    <!-- PAGE HEADER -->
    <UiPageHeader
      :img="'services.jpg'"
      :title="'Services'"
      :subtitle="'Home / Services'"
    />

    <!-- PWR -->
    <div class="site-container py-20 lg:py-36">
      <div class="services--pwr">
        <div
          class="services--pwr__container"
          v-for="(item, i) in pwr"
          :key="`pwr-${i}`"
        >
          <h6 class="services--pwr__container--title text--title">
            {{ item.title }}
          </h6>
          <p class="services--pwr__container--subtitle text--subtitle flex-1">
            {{ item.subtitle }}
          </p>
          <UiReadMoreArrow />
        </div>
      </div>
    </div>

    <!-- HWW -->
    <div class="site-container pb-20 lg:pb-36">
      <div class="services--hww">
        <div class="services--hww__header">
          <h1 class="services--hww__header--title">How We Work</h1>
          <p class="services--hww__header--subtitle text--subtitle">
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div
          v-for="(item, i) in hww"
          :key="`hww-${i}`"
          class="services--hww__content"
        >
          <div class="services--hww__content--left">
            <img
              :src="require(`@/assets/img/static/services/${item.img}`)"
              alt="HWW Image"
              class="services--hww__content--img"
            />
          </div>
          <div class="services--hww__content--right">
            <div class="services--hww__content--right__number">
              <!-- <img
                src="@/assets/img/vector/services-icon-1.svg"
                alt="Vector Image"
              /> -->
              <img
                :src="require(`@/assets/img/vector/${item.vector}`)"
                alt="Vector Image"
              />
              <h1 class="services--hww__content--right__number--numb">
                {{ item.number }}
              </h1>
            </div>
            <div class="services--hww__content--right__content">
              <h4 class="services--hww__content--right__content--title">
                {{ item.title }}
              </h4>
              <p
                class="services--hww__content--right__content--subtitle text--subtitle"
              >
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- JOIN US -->
    <SectionJoinUs />
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      pwr: [
        {
          title: 'Project Plan',
          subtitle:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          link: '',
        },
        {
          title: 'Interior Work',
          subtitle:
            'There are many variations of the passages of lorem Ipsum from available, majority. There are many variations of the passages',
          link: '',
        },
        {
          title: 'Realization',
          subtitle:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          link: '',
        },
        {
          title: 'Project Plan',
          subtitle:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          link: '',
        },
        {
          title: 'Interior Work',
          subtitle:
            'There are many variations of the passages of lorem Ipsum from available, majority. There are many variations of the passages',
          link: '',
        },
        {
          title: 'Realization',
          subtitle:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          link: '',
        },
      ],
      hww: [
        {
          img: 'services-work-1.jpg',
          vector: 'services-icon-1.svg',
          number: '01',
          title: 'Concept & Details',
          subtitle:
            'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
        },
        {
          img: 'services-work-2.jpg',
          vector: 'services-icon-2.svg',
          number: '02',
          title: 'Idea for Work',
          subtitle:
            'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.',
        },
        {
          img: 'services-work-3.jpg',
          vector: 'services-icon-3.svg',
          number: '03',
          title: 'Design',
          subtitle:
            'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ',
        },
        {
          img: 'services-work-4.jpg',
          vector: 'services-icon-4.svg',
          number: '04',
          title: 'Perfection',
          subtitle:
            'It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ',
        },
      ],
    }
  },
}
</script>

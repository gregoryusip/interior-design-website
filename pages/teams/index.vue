<template>
  <div class="team">
    <UiPageHeader
      :img="'professional-index.jpg'"
      :title="'Our Professional'"
      :subtitle="'Home / Team'"
    />

    <div class="site-container py-20 lg:py-36">
      <div class="team--container">
        <div
          v-for="(item, i) in teams"
          :key="`team-${i}`"
          class="team--container__wrapper"
        >
          <CardTeam :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamPage',
  data() {
    return {
      teams: [
        {
          id: 1,
          img: 'team-1.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Charlotte Levi',
          role: 'Design',
          region: 'Australia',
          facebook: true,
          twitter: true,
          linkedin: false,
          instagram: false,
        },
        {
          id: 2,
          img: 'team-2.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Nattasha Julie',
          role: 'Accounting',
          region: 'Australia',
          facebook: true,
          twitter: false,
          linkedin: true,
          instagram: true,
        },
        {
          id: 3,
          img: 'team-3.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'John Smith',
          role: 'Design',
          region: 'England',
          facebook: false,
          twitter: false,
          linkedin: true,
          instagram: true,
        },
        {
          id: 4,
          img: 'team-4.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Nora Owen',
          role: 'Legal',
          region: 'Singapore',
          facebook: true,
          twitter: true,
          linkedin: true,
          instagram: true,
        },
        {
          id: 5,
          img: 'team-5.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Avery Jackson',
          role: 'Project Manager',
          region: 'Singapore',
          facebook: true,
          twitter: true,
          linkedin: false,
          instagram: false,
        },
        {
          id: 6,
          img: 'team-6.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Sofia Carter',
          role: 'Design',
          region: 'Sweden',
          facebook: true,
          twitter: false,
          linkedin: true,
          instagram: true,
        },
        {
          id: 7,
          img: 'team-7.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Luna James',
          role: 'Product Manager',
          region: 'England',
          facebook: true,
          twitter: false,
          linkedin: true,
          instagram: true,
        },
        {
          id: 8,
          img: 'team-8.jpg',
          quote:
            'There are many variations of the passages of lorem Ipsum from available, majority.',
          name: 'Gianna Mateo',
          role: 'Design',
          region: 'Italy',
          facebook: true,
          twitter: false,
          linkedin: true,
          instagram: false,
        },
      ],
    }
  },
}
</script>

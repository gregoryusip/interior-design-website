<template>
  <div class="blogs">
    <!-- PAGE HEADERS -->
    <UiPageHeader
      :img="'article-news.jpg'"
      :title="'Aticles & News'"
      :subtitle="'Home / Blog'"
    />

    <!-- LATEST POST -->
    <div class="site-container py-20 lg:py-36">
      <div class="blogs--latest">
        <h1 class="blogs--section__title">Latest Post</h1>
        <div class="blogs--latest__container">
          <div class="blogs--latest__container--wrapper">
            <div class="blogs--latest__container--wrapper__content">
              <img
                src="@/assets/img/static/blogs/blogs-1.jpg"
                alt="Latest Post"
              />
            </div>
            <div class="blogs--latest__container--wrapper__content">
              <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
              <p
                class="blogs--latest__container--wrapper__content--subtitle text--subtitle"
              >
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief.
                <br /><br />
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
              <p
                class="blogs--latest__container--wrapper__content--date text--subtitle"
              >
                26 December, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ARTICLE & NEWS -->
    <div class="site-container pb-10 lg:pb-20">
      <div class="blogs--articles">
        <h1 class="blogs--section__title">Articles & News</h1>
        <div class="blogs--articles__container">
          <div
            v-for="(item, i) in articles"
            :key="`project-${i}`"
            class="blogs--articles__container--wrapper group"
          >
            <CardArticles :item="item" />
          </div>
        </div>
      </div>
    </div>

    <!-- PAGINATION -->
    <div class="site-container pb-20 lg:pb-36">
      <div class="pagination--container">
        <div class="pagination--container__wrapper">
          <p class="pagination--container__wrapper--number">01</p>
        </div>
        <div class="pagination--container__wrapper">
          <p class="pagination--container__wrapper--number">02</p>
        </div>
        <div class="pagination--container__wrapper">
          <p class="pagination--container__wrapper--number">03</p>
        </div>
        <div class="pagination--container__wrapper">
          <img src="@/assets/img/icon/chevron-right.svg" alt="Icon Chevron" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogsPage',
  data() {
    return {
      articles: [
        {
          id: '1',
          img: 'article-1.jpg',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          tag: 'Kitchen Design',
        },
        {
          id: '2',
          img: 'article-2.jpg',
          title: 'Low Cost Latest Invented Interior Designing Super Ideas',
          date: '22 December, 2022',
          tag: 'Living Design',
        },
        {
          id: '3',
          img: 'article-3.jpg',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
          tag: 'Interior Design',
        },
        {
          id: '4',
          img: 'article-4.jpg',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          tag: 'Kitchen Design',
        },
        {
          id: '5',
          img: 'article-5.jpg',
          title: 'Low Cost Latest Invented Interior Designing Super Ideas',
          date: '22 December, 2022',
          tag: 'Living Design',
        },
        {
          id: '6',
          img: 'article-6.jpg',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
          tag: 'Interior Design',
        },
      ],
    }
  },
}
</script>

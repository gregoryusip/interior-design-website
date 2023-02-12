<template>
  <div class="blogs--detail">
    <!-- PAGE HEADERS -->
    <UiPageHeader :img="'banner-detail.jpg'" :titleHeader="false" />

    <!-- LATEST POST -->
    <div class="site-container py-20 lg:py-36">
      <div class="blogs--detail__container">
        <div class="blogs--detail__container--left">
          <div class="blogs--detail__content">
            <h1 class="blogs--detail__content--title">
              Let’s Get Solution for Building Construction Work
            </h1>
            <img
              src="@/assets/img/static/blogs/blogs-detail-1.jpg"
              alt="Img Detail"
              class="blogs--detail__content--img"
            />
            <div class="blogs--detail__content--date">
              <p class="text--subtitle">26 December, 2022</p>
              <p class="text--subtitle">Interior / Design / Home / Decore</p>
            </div>
            <div class="mb-8">
              <p class="text--subtitle">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary.
              </p>
            </div>
            <div class="blogs--detail__content--quote mb-20">
              <img
                src="@/assets/img/icon/quote.svg"
                alt="Quote Icon"
                class="blogs--detail__content--quote__icon"
              />
              <h3 class="blogs--detail__content--quote__text">
                The details are not the details. <br />
                They make the design.
              </h3>
            </div>

            <h1 class="blogs--detail__content--title">
              Design sprints are great
            </h1>
            <div class="mt-5 mb-8">
              <p class="text--subtitle">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary.
              </p>
            </div>
            <img
              src="@/assets/img/static/blogs/blogs-detail-2.jpg"
              alt="Img Detail"
              class="blogs--detail__content--img"
            />
            <div class="mt-5 mb-8">
              <p class="text--subtitle">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary.
              </p>
            </div>

            <div class="blogs--detail__content--tags">
              <div class="blogs--detail__content--tags__left">
                <h5>Tags</h5>
                <div class="blogs--tags">
                  <p>Kitchen</p>
                </div>
                <div class="blogs--tags">
                  <p>Bedroom</p>
                </div>
              </div>
              <div class="blogs--detail__content--tags__right">
                <a href="#">
                  <img
                    src="@/assets/img/footer/facebook.svg"
                    alt="Facebook Icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="@/assets/img/footer/twitter.svg"
                    alt="Facebook Icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="@/assets/img/footer/linkedin.svg"
                    alt="Facebook Icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="@/assets/img/footer/instagram.svg"
                    alt="Facebook Icon"
                  />
                </a>
              </div>
            </div>

            <div class="section--form-replay">
              <h4 class="section--form-replay__title">Leave a Reply</h4>
              <form action="">
                <div class="section--form-replay__two mb-10">
                  <div class="section--form-replay__two--wrapper">
                    <input
                      type="text"
                      placeholder="Name"
                      class="section--form-replay__form"
                    />
                  </div>
                  <div class="section--form-replay__two--wrapper">
                    <input
                      type="email"
                      placeholder="Email"
                      class="section--form-replay__form"
                    />
                  </div>
                </div>
                <div class="section--form-replay__two mb-10">
                  <div class="section--form-replay__two--wrapper">
                    <input
                      type="text"
                      placeholder="Website"
                      class="section--form-replay__form"
                    />
                  </div>
                  <div class="section--form-replay__two--wrapper">
                    <input
                      type="text"
                      placeholder="Phone"
                      class="section--form-replay__form"
                    />
                  </div>
                </div>
                <div class="section--form-replay__one mb-4">
                  <div class="section--form-replay__one--wrapper">
                    <textarea
                      name="textarea"
                      id="textarea"
                      placeholder="Hello I'm Interested in..."
                      rows="3"
                      class="section--form-replay__form"
                    ></textarea>
                  </div>
                </div>
                <div class="section--form-replay__one mb-10">
                  <div class="section--form-replay__one--wrapper">
                    <input type="checkbox" class="" />
                    <label for="" class=""
                      >Save my name, email, and website in this browser for the
                      next time I comment.</label
                    >
                  </div>
                </div>

                <UiButtonArrow class="button__dark" :text="'Send Now'" />
              </form>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="blogs--detail__container--right">
          <div class="relative mb-10">
            <input
              type="text"
              placeholder="Search"
              class="blogs--detail__sticky--search"
            />
            <img
              src="@/assets/img/icon/search-brown.svg"
              alt="Search Icon"
              class="blogs--detail__sticky--search__icon"
            />
          </div>

          <div class="blogs--detail__sticky--latest mb-10">
            <h4>Latest News</h4>
            <div v-for="(item, i) in 3" :key="`latest-${i}`">
              <CardLatestArticles />
            </div>
          </div>

          <div class="blogs--detail__sticky--categories mb-10">
            <h4 class="mb-2.5">Categories</h4>
            <div
              v-for="(item, i) in categories"
              :key="`category-${i}`"
              class="card-sticky-categories"
            >
              <p>{{ item.title }}</p>
            </div>
          </div>

          <div class="blogs--detail__sticky--tags mb-10">
            <h4 class="mb-2.5">Tags</h4>
            <div class="blogs--detail__sticky--tags__wrapper">
              <div
                v-for="(item, i) in tags"
                :key="`tag-${i}`"
                class="blogs--tags"
              >
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
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
      categories: [
        {
          id: 1,
          title: 'Decoration',
        },
        {
          id: 2,
          title: 'Door Windows',
        },
        {
          id: 3,
          title: 'Home Land',
        },
        {
          id: 4,
          title: 'Roof Installation',
        },
      ],
      tags: [
        {
          id: 1,
          title: 'Kitchen',
        },
        {
          id: 2,
          title: 'Bedroom',
        },
        {
          id: 3,
          title: 'Building',
        },
        {
          id: 4,
          title: 'Architecture',
        },
        {
          id: 5,
          title: 'Kitchen Planning',
        },
        {
          id: 6,
          title: 'Bathroom',
        },
      ],
    }
  },
}
</script>

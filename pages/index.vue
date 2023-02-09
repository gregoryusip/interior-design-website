<template>
  <div class="home">
    <div class="home--banner">
      <div class="home--banner__container">
        <img src="@/assets/img/static/home/home-banner.jpg" alt="Home Banner" />
        <div class="site-container home--banner__container--text">
          <div class="home--banner__container--text__wrap">
            <h1 class="home--banner__container--text__wrap--title">
              Let Your Home Be Unique
            </h1>
            <p
              class="home--banner__container--text__wrap--subtitle text--subtitle"
            >
              There are many variations of the passages of lorem Ipsum from
              available, variations of the passages.
            </p>
            <UiButtonArrow class="button__dark" />
          </div>
        </div>
      </div>
    </div>

    <!-- PROJECT PLAN, INTERIOR WORK, REALIZATION -->
    <div class="site-container pt-20 pb-12 lg:py-52">
      <div class="home--pwr">
        <div
          class="home--pwr__container"
          v-for="(item, i) in pwr"
          :key="`pwr-${i}`"
        >
          <h6 class="home--pwr__container--title text--title">
            {{ item.title }}
          </h6>
          <p class="home--pwr__container--subtitle text--subtitle flex-1">
            {{ item.subtitle }}
          </p>
          <UiReadMoreArrow />
        </div>
      </div>
    </div>

    <!-- WE CREATE THE ART OF STYLISH LIVING STYLISHLY -->
    <div class="site-container pb-20 lg:pb-52">
      <div class="home--wcta">
        <div class="home--wcta__left">
          <h1 class="home--wcta__left--title">
            We Create The Art Of Stylish Living Stylishly
          </h1>
          <p class="home--wcta__left--subtitle text--subtitle">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div class="home--wcta__left--contact">
            <div class="home--wcta__left--contact__icon">
              <img src="@/assets/img/icon/call.svg" alt="Call Icon" />
            </div>
            <div class="home--wcta__left--contact__text">
              <p class="home--wcta__left--contact__text--title text--title">
                0123456789
              </p>
              <p
                class="home--wcta__left--contact__text--subtitle text--subtitle"
              >
                Call Us Anytime
              </p>
            </div>
          </div>
          <UiButtonArrow class="button__dark" :text="'Get Free Estimate'" />
        </div>
        <div class="home--wcta__right">
          <img
            src="@/assets/img/static/home/home-about.jpg"
            alt="About Image"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <!-- WHAT THE PEOPLE THINKS ABOUT US -->
    <div class="site-container pb-20 lg:pb-36">
      <div class="home--wtpt">
        <div class="home--wtpt__title">
          <h1>What the People Thinks About Us</h1>
        </div>
        <div class="home--wtpt__comments">
          <div
            v-for="(item, i) in wtpt"
            :key="`people-${i}`"
            class="home--wtpt__comments--container"
          >
            <UiCardHomePeopleThink
              :name="item.name"
              :region="item.region"
              :comment="item.comment"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- CLIENTS -->
    <div class="site-container pb-36">
      <div class="home--client">
        <div class="home--client__wrap">
          <img src="@/assets/img/client/client-1.png" alt="Client 1" />
        </div>
        <div class="home--client__wrap">
          <img src="@/assets/img/client/client-2.png" alt="Client 2" />
        </div>
        <div class="home--client__wrap">
          <img src="@/assets/img/client/client-3.png" alt="Client 3" />
        </div>
        <div class="home--client__wrap">
          <img src="@/assets/img/client/client-4.png" alt="Client 4" />
        </div>
        <div class="home--client__wrap">
          <img src="@/assets/img/client/client-5.png" alt="Client 5" />
        </div>
      </div>
    </div>

    <!-- FOLLOW OUR PROJECTS -->
    <div class="site-container pb-20 lg:pb-36">
      <div class="home--projects">
        <div class="home--projects__title">
          <h1 class="text--title">Follow Our Projects</h1>
        </div>
        <div class="home--projects__subtitle">
          <p class="text--subtitle">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div class="home--projects__container">
          <div
            v-for="(item, i) in projects"
            :key="`project-${i}`"
            class="home--projects__container--wrapper"
          >
            <div class="card-projects">
              <img
                src="@/assets/img/static/home/home-project-1.jpg"
                alt="Projects 1"
              />
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
                  <img
                    src="@/assets/img/icon/chevron-right.svg"
                    alt="Icon Chevron"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ATYILE & NEWS -->
    <div class="site-container pb-20 lg:pb-36">
      <div class="home--articles">
        <div class="home--articles__title">
          <h1 class="text--title">Articles & News</h1>
        </div>
        <div class="home--articles__subtitle">
          <p class="text--subtitle">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div class="home--articles__container">
          <div
            v-for="(item, i) in articles"
            :key="`project-${i}`"
            class="home--articles__container--wrapper group"
          >
            <div class="card-articles">
              <div class="card-articles__img">
                <img
                  src="@/assets/img/static/home/home-article-1.jpg"
                  alt="Projects 1"
                />
                <div class="card-articles__img--tag">
                  <p>{{ item.tag }}</p>
                </div>
              </div>
              <h3 class="card-articles__title">
                {{ item.title }}
              </h3>
              <div class="card-articles__content">
                <p class="card-articles__content--date">
                  {{ item.date }}
                </p>
                <div class="card-articles__content--button">
                  <img
                    src="@/assets/img/icon/chevron-right.svg"
                    alt="Icon Chevron"
                  />
                </div>
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
  name: 'IndexPage',
  layout: 'default',
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
      ],
      wtpt: [
        {
          photo: '',
          name: 'Nattasha Mith',
          region: 'New York, USA',
          comment:
            'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.',
        },
        {
          photo: '',
          name: 'Raymond Galario',
          region: 'Sydney, Australia',
          comment:
            'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
        },
        {
          photo: '',
          name: 'Benny Roll',
          region: 'Jakarta, Indonesia',
          comment:
            'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.',
        },
      ],
      projects: [
        {
          title: 'Modern Kitchen',
          desc: 'Decor / Artchitecture',
        },
        {
          title: 'Cozy Living Room',
          desc: 'Design / Artchitecture',
        },
        {
          title: 'Cozy Working Room',
          desc: 'Design / Artchitecture',
        },
        {
          title: 'Modern Playground',
          desc: 'Decor / Artchitecture',
        },
      ],
      articles: [
        {
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          tag: 'Kitchen Design',
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Super Ideas',
          date: '22 December, 2022',
          tag: 'Living Design',
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
          tag: 'Interior Design',
        },
      ],
    }
  },
}
</script>

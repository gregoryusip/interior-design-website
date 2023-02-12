<template>
  <div class="faq">
    <UiPageHeader
      :img="'faq-index.jpg'"
      :title="`Faq's`"
      :subtitle="'Home / Faq'"
    />

    <!-- EQA -->
    <div class="site-container py-20 lg:py-36">
      <div class="faq--eqa">
        <h1 class="faq--eqa__title">Every Question Answered</h1>

        <div class="faq--eqa__container">
          <div class="faq--eqa__container--wrapper">
            <div v-for="(item, i) in faqs" :key="`faq-${i}`" class="faq--qa">
              <div class="faq--qa__title" @click="chooseFAQ(item.id)">
                <h4
                  :class="{
                    'text-primary-one': faqOpenId === item.id,
                    'text-primary-two': faqOpenId !== item.id,
                  }"
                >
                  {{ item.title }}
                </h4>
                <img
                  src="@/assets/img/icon/chevron-right.svg"
                  alt="Chevron Icon"
                  class="faq--qa__title--img"
                  :class="{ 'rotate-90': faqOpenId === item.id }"
                />
              </div>
              <div
                class="faq--qa__answer"
                :class="{
                  '-mb-24 opacity-0': faqOpenId !== item.id,
                  'mb-0 mt-4 opacity-100': faqOpenId === item.id,
                }"
              >
                <p class="text--subtitle">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
          <div class="faq--eqa__container--wrapper">
            <img
              src="@/assets/img/static/faq/faq-1.jpg"
              alt="FAQ Image"
              class="faq--eqa__container--wrapper__img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="site-container pb-20 lg:pb-36">
      <div class="faq--eqa">
        <h1 class="faq--eqa__title">Project related questions</h1>

        <div class="faq--eqa__container faq--prq">
          <div class="faq--eqa__container--wrapper">
            <img
              src="@/assets/img/static/faq/faq-2.jpg"
              alt="FAQ Image"
              class="faq--eqa__container--wrapper__img"
            />
          </div>
          <div class="faq--eqa__container--wrapper">
            <div v-for="(item, i) in prqs" :key="`faq-${i}`" class="faq--qa">
              <div class="faq--qa__title" @click="choosePRQ(item.id)">
                <h4
                  :class="{
                    'text-primary-one': prqOpenId === item.id,
                    'text-primary-two': prqOpenId !== item.id,
                  }"
                >
                  {{ item.title }}
                </h4>
                <img
                  src="@/assets/img/icon/chevron-right.svg"
                  alt="Chevron Icon"
                  class="faq--qa__title--img"
                  :class="{ 'rotate-90': prqOpenId === item.id }"
                />
              </div>
              <div
                class="faq--qa__answer"
                :class="{
                  '-mb-24 opacity-0': prqOpenId !== item.id,
                  'mb-0 mt-4 opacity-100': prqOpenId === item.id,
                }"
              >
                <p class="text--subtitle">
                  {{ item.answer }}
                </p>
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
  name: 'FAQPage',
  data() {
    return {
      faqOpenId: 0,
      faqs: [
        {
          id: 1,
          title: 'What is the Hipcouch Interior Design Service?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 2,
          title: 'So, how exactly does this work?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 3,
          title: 'What cities do you currently operate in?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 4,
          title: 'Hipcouch Interior Design Service?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 5,
          title: 'What kind of interior designers do you have?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
      ],
      prqOpenId: 0,
      prqs: [
        {
          id: 1,
          title: 'How long does it take?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 2,
          title: 'Can I use my existing furnishings?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 3,
          title: 'I put into redesigning my interior?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 4,
          title: 'What do your services cost?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
        {
          id: 5,
          title: 'Do you offer free consultations?',
          answer:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.',
        },
      ],
    }
  },
  methods: {
    chooseFAQ(id) {
      if (this.faqOpenId === id) {
        this.faqOpenId = 0

        return
      }

      this.faqOpenId = id
    },
    choosePRQ(id) {
      if (this.prqOpenId === id) {
        this.prqOpenId = 0

        return
      }

      this.prqOpenId = id
    },
  },
}
</script>

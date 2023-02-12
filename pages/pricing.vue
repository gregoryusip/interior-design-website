<template>
  <div class="pricing">
    <UiPageHeader
      :img="'pricing-plan.jpg'"
      :title="'Pricing & Plan'"
      :subtitle="'Home / Pricing'"
    />

    <div class="site-container py-20 lg:py-36">
      <div class="pricing--container">
        <div
          v-for="(item, i) in pricing"
          :key="`pricing-${i}`"
          class="pricing--container__wrapper"
        >
          <div class="pricing--container__wrapper--box">
            <h3 class="pricing--container__wrapper--box__title">
              {{ item.title }}
            </h3>
            <h1
              class="pricing--container__wrapper--box__price"
              :class="{ 'text-primary-one': item.most_popular }"
            >
              <sub>$</sub>{{ item.price }}
            </h1>
            <h5 class="mb-8">/month</h5>

            <div class="pricing--container__wrapper--box__divider">
              <div
                v-if="item.most_popular"
                class="pricing--container__wrapper--box__divider--most"
              >
                <p>Most Popular Plans</p>
              </div>
              <div
                class="pricing--container__wrapper--box__divider--line"
                :class="{
                  'bg-primary-two': item.most_popular,
                  'bg-primary-one ': !item.most_popular,
                }"
              ></div>
            </div>

            <div class="mb-4">
              <p
                v-for="(benefit, i) in item.benefit"
                :key="`benefit-${i}`"
                class="pricing--container__wrapper--box__benefit"
              >
                {{ benefit }}
              </p>
            </div>

            <UiButtonArrow
              class="mx-auto"
              :class="{
                button__brown: !item.most_popular,
                button__dark: item.most_popular,
              }"
              :text="'Get Started'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
  data() {
    return {
      pricing: [
        {
          id: 1,
          title: 'Design Advices',
          price: 29,
          most_popular: false,
          benefit: [
            'General living space advices',
            'Rennovation advices',
            'Interior design advices',
            'Furniture reorganization',
            'Up to 5 hours meetings',
          ],
        },
        {
          id: 2,
          title: 'Complete Interior',
          price: 39,
          most_popular: true,
          benefit: [
            'Complete home redesign',
            'Interior and exterior works',
            'Modular interior planning',
            'Kitchen design',
            'Garages organization',
          ],
        },
        {
          id: 3,
          title: 'Furniture Design',
          price: 59,
          most_popular: false,
          benefit: [
            'Furniture for living room',
            'Furniture refurbishment',
            'Sofas and armchairs',
            'Tables and chairs',
            'Kitchens',
          ],
        },
      ],
    }
  },
}
</script>

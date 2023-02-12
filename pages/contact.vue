<template>
  <div class="contact">
    <UiPageHeader
      :img="'contact-us.jpg'"
      :title="'Contact Us'"
      :subtitle="'Home / Contact'"
    />

    <div class="site-container py-20 lg:py-36">
      <div class="contact--us">
        <h1 class="contact--us__title">
          We love meeting new people and helping them.
        </h1>
        <div class="contact--us__container">
          <div class="contact--us__container--info">
            <div class="contact--us__container--info__wrapper">
              <div
                v-for="(item, i) in contacts"
                :key="`contact-${i}`"
                class="contact--us__contact"
              >
                <div class="contact--us__contact--icon">
                  <img
                    :src="require(`@/assets/img/icon/${item.icon}`)"
                    alt="Icon"
                  />
                </div>
                <p class="contact--us__contact--text">{{ item.value }}</p>
              </div>

              <div class="contact--us__sosmed">
                <a href="#">
                  <img src="@/assets/img/footer/facebook.svg" alt="Icon" />
                </a>
                <a href="#">
                  <img src="@/assets/img/footer/twitter.svg" alt="Icon" />
                </a>
                <a href="#">
                  <img src="@/assets/img/footer/linkedin.svg" alt="Icon" />
                </a>
                <a href="#">
                  <img src="@/assets/img/footer/instagram.svg" alt="Icon" />
                </a>
              </div>
            </div>
          </div>
          <div class="contact--us__container--form">
            <div class="section--form-replay">
              <form action="#">
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
                      placeholder="Subject"
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
                <div class="section--form-replay__one mb-10">
                  <div class="section--form-replay__one--wrapper">
                    <textarea
                      name="textarea"
                      id="textarea"
                      placeholder="Hello I'm Interested in..."
                      rows="5"
                      class="section--form-replay__form"
                    ></textarea>
                  </div>
                </div>

                <UiButtonArrow
                  class="button__dark ml-auto"
                  :text="'Send Now'"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-container pb-20 lg:pb-36">
      <div class="contact--map">
        <img src="@/assets/img/static/contact/map.png" alt="Map" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      contacts: [
        {
          id: 1,
          icon: 'email-brown.svg',
          value: 'info@yourdomain.com',
        },
        {
          id: 2,
          icon: 'phone-brown.svg',
          value: '+1 (378) 400-1234',
        },
        {
          id: 3,
          icon: 'www-brown.svg',
          value: 'www.yourdomain.com',
        },
      ],
    }
  },
}
</script>

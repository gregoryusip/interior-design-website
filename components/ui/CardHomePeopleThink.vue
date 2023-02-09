<template>
  <div class="card-wtpt">
    <div class="card-wtpt__wrapper">
      <div class="card-wtpt__wrapper--information">
        <img
          src="@/assets/img/static/home/home-people-1.jpg"
          alt="People Image"
          class="card-wtpt__wrapper--information__photo"
        />
        <div class="card-wtpt__wrapper--information__text">
          <p class="card-wtpt__wrapper--information__text--name">{{ name }}</p>
          <p class="card-wtpt__wrapper--information__text--region">
            {{ region }}
          </p>
        </div>
      </div>
      <p class="card-wtpt__wrapper--comment">{{ comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardHomePeopleThink',
  props: {
    photo: {
      type: String,
    },
    name: {
      type: String,
      default: 'Nattasha Mith',
    },
    region: {
      type: String,
      default: 'Sydney, USA',
    },
    comment: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
    },
  },
}
</script>

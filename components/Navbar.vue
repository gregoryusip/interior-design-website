<template>
  <div class="navbar">
    <div class="site-container flex flex-wrap items-center">
      <div class="w-1/2 lg:w-1/3">
        <img src="@/assets/img/logo/logo.png" alt="Logo" class="h-[50px]" />
      </div>
      <div class="w-2/3 hidden lg:block">
        <div class="w-full flex justify-end gap-x-7">
          <nuxt-link :to="item.link" v-for="(item, i) in navbarMenu" :key="i">
            <p
              class="navbar--item__text"
              :class="{ 'navbar--item__text--active': isActiveMenu(item.link) }"
            >
              {{ item.menu }}
            </p>
          </nuxt-link>
          <div class="cursor-pointer">
            <img
              src="@/assets/img/icon/search.svg"
              alt="Search Icon"
              class="navbar--item__icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarMenu: [
        {
          menu: 'Home',
          link: '/',
        },
        {
          menu: 'Pages',
          link: '/pages',
        },
        {
          menu: 'Services',
          link: '/services',
        },
        {
          menu: 'Project',
          link: '/projects',
        },
        {
          menu: 'Blog',
          link: '/blogs',
        },
        {
          menu: 'Contact',
          link: '/contact',
        },
      ],
    }
  },
  methods: {
    isActiveMenu(link) {
      let currUrl = this.$route.fullPath

      if (currUrl === link) {
        return true
      }
      return false
    },
  },
}
</script>

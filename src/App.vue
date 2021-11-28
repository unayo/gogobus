<template>
<div class="d-none d-md-block">
  <div
    :class="look ? 'd-none' : ''"
    class="menu bg-primary rounded-1 text-center">
    <img class="bus px-3 py-5 mb-3 border-bottom w-100" alt="bus logo" src="@/assets/logo.png">
    <router-link to="/stop" class="icon d-inline-block rounded-1 p-2 m-2">
      <img alt="stop" src="@/assets/images/icon-pin.svg">
    </router-link>
    <router-link to="/search" class="icon d-inline-block rounded-1 p-2 m-2">
      <img alt="stop" src="@/assets/images/icon-search.svg">
    </router-link>
    <router-link to="/news" class="icon d-inline-block rounded-1 p-2 m-2">
      <img alt="stop" src="@/assets/images/icon-pin.svg">
    </router-link>
  </div>
</div>
<!-- hamburger -->
<div
  @click.prevent="myHamburger"
  :class="isClick? 'open' : '' "
  href="#" id="nav-icon" class="hamburger d-md-none">
  <span></span>
  <span></span>
  <span></span>
</div>
<div class="menu-phone fixed-top d-md-none bg-primary rounded-1 text-center">
  <img class="logo-phone" alt="bus logo" src="@/assets/logo.png">
</div>
<div
  :class="isClick? 'menu-items-on' : 'menu-items-off' "
  class="menu-items d-md-none">
  <router-link @click.prevent="myHamburger" to="/stop" class="icon d-block rounded-1 p-2 m-2 text-white">
    <img class="me-2" alt="stop" src="@/assets/images/icon-pin.svg">
    附近站牌
  </router-link>
  <router-link @click.prevent="myHamburger" to="/search" class="icon d-block rounded-1 p-2 m-2 text-white">
    <img class="me-2" alt="stop" src="@/assets/images/icon-search.svg">
    路線搜尋
  </router-link>
  <router-link @click.prevent="myHamburger" to="/news" class="icon d-block rounded-1 p-2 m-2 text-white">
    <img class="me-2" alt="stop" src="@/assets/images/icon-pin.svg">
    最新消息
  </router-link>
</div>
<!-- router-view -->
<div
  :class="look ? 'page-none' : 'page'">
  <router-view/>
</div>
</template>

<style lang="scss">
@import "assets/main.scss";

.menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 109px;
  box-shadow: 3px 2px 6px rgba(121, 121, 121, 0.25)
}
.page {
  margin-left: 109px;
}
@media (max-width: 767px) {
  .page {
    margin-left: 0px;
    margin-top: 69px;
  }
}
.page-none {
  margin-left: 0;
}
.router-link-active {
  background-color: #2A4AC2;
}
.icon {
  &:hover {
    background-color: #BFCDFF;
  }
}
// hamburger
.menu-phone {
  height: 69px;
  .logo-phone {
    width: 69px;
    object-fit: contain;
    padding-top: 13px;
  }
}
.menu-items {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: #486be8d6;
  z-index: 1031;
}
.menu-items-on {
  display: block;
  padding-top: 71px;
  bottom: 0;
  .icon {
    background-color: #2A4AC3;
  }
}
.menu-items-off {
  display: none;
  padding-top: 71px;
  transition: .25s ease-in-out;
  overflow: hidden;
  transition: .25s ease-in-out;
}
.hamburger {
  z-index: 1032;
  width: 33px;
  height: 35px;
  position: fixed;
  left: 16px;
  top: 18px;
  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    opacity: 1;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    &:nth-child(1) {
      top: 3px;
      transform-origin: left center;
      transition: .25s ease-in-out;
    }
    &:nth-child(2) {
      top: 15px;
      transform-origin: left center;
      transition: .25s ease-in-out;
    }
    &:nth-child(3) {
      top: 27px;
      transform-origin: left center;
      transition: .25s ease-in-out;
    }
  }
}
.open {
  span {
    &:nth-child(1) {
      transform: rotate(45deg);
      top: 6px;
      left: 8px;
    }
    &:nth-child(2) {
      width: 0;
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
      top: 30px;
      left: 8px;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      isClick: false
    }
  },
  methods: {
    myHamburger () {
      this.isClick = !this.isClick
    }
  },
  computed: {
    look () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

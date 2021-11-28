<template>
<div class="banner position-relative">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 text-center">
        <img class="bus pt-5 mt-5" alt="bus logo" src="../assets/images/logo-home.svg">
      </div>
    </div>
  </div>
  <img class="bg-bus img-fluid position-absolute" alt="background-bus" src="../assets/images/banner-bus.png">
  <img class="bg-star position-absolute" alt="background-star" src="../assets/images/star.png">
</div>
</template>

<style lang="scss">
  body {
  background-color: #486AE8;
  }
  .banner {
    height: 100vh;
    overflow: hidden;
  }
  .bg-bus {
    bottom: -10%;
    z-index: 2;
  }
  @media (max-width:756px) {
    .bg-bus {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      max-width: 140%;
    }
  }
  .bg-star {
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<script>
export default {
  name: 'Home',
  created () {
    // 三秒後跳轉
    setTimeout(() => this.$router.push({ path: '/stop' }), 3000)
  }
}
</script>

<template>
  <div class="wrapper">
    <index-header></index-header>
    <div class="carousel-wrapper">
        <carousel></carousel>
    </div>
    <div class="introduction-wrapper">
      <introduction></introduction>
    </div>
  </div>
</template>

<script>
import IndexHeader from '@/components/indexHeader'
import Carousel from '@/components/carousel'
import Introduction from '@/components/introduction'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    Carousel,
    Introduction
  }
}
</script>
<style lang="stylus" scoped>
.wrapper {
  background-image: url('../../static/img/bg.jpg');
}

.carousel-wrapper {
  // height 100vh;
}

.introduction-wrapper {
  width: 100%;
  height: 500px;
  // background: red;
}
</style>

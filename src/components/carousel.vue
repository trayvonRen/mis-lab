<template>
  <div class="wrapper" ref="wrapper">
    <el-carousel
      :interval="3000"
      :height="cssAtr.carouselHeight + 'px'"
      arrow="always"
      direction="vertical"
      indicator-position="none"
    >
      <el-carousel-item
        v-for="(item, index) in imgList"
        :key="index"
      >
        <span class="carousel-label"></span>
        <div class="carousel-label">{{ item.desc }}</div>
        <img
          ref="carouselImg"
          class="carousel-img"
          :src="item.path"
          @load="imgLoad"
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cssAtr: {
        carouselHeight: '',
        carouselImgeHeight: ''
      },
      imgList: [
        {
          path: '../../static/img/1.jpg',
          desc: 'Welcome to Mis-Lab ♥  :)'
        }, {
          path: '../../static/img/2.jpg',
          desc: 'Check it out, you are going to ♥ it :)'
        }, {
          path: '../../static/img/3.jpg',
          esc: 'Woyasuo hen six'
        }
      ]
    }
  },
  methods: {
    imgLoad () {
      this.$nextTick(() => {
        this.cssAtr.carouselHeight = this.$refs.carouselImg[0].height
      })
    }
  },
  mounted () {
    this.imgLoad()
    window.addEventListener('resize', () => {
      this.cssAtr.carouselHeight = this.$refs.carouselImg[0].height
      this.imgLoad()
    }, false)
  }
}
</script>

<style lang="css" scoped>

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-label {
  /* 水平垂直居中 */
  position: absolute;
  left: 50%; /* 定位父级的50% */
  top: 50%;
  transform: translate(-50%, -50%); /*自己的50% */
  font-size: 1rem;
  color: white;
}
.carousel-img {
  width: 100%;
  /* height: inherit; */
}
</style>

<template>
  <div class='wrapper' :style="headerCss">
    <div class="title-wrapper">
        <h1>Mis-Lab</h1>
    </div>
    <div class="head-image-wrapper">
      <h1 class="name" @click="toLogin">{{ userName }}</h1>
      <img class="head-image" @click="toUserPage" :src="headImgSrc" alt="" onerror="this.src='../../static/img/head.png'">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      headerCss: {
        background: 'rgba(0, 0, 0, 0)',
        color: '#409EFF'
      }
    }
  },
  name: 'IndexHeader',
  mounted () {
    let timer = null
    window.addEventListener('scroll', () => {
      this.headerCss.background = 'rgba(0, 0, 0, .8)'
      this.headerCss.color = 'white'
      clearTimeout(timer)
      timer = setTimeout(() => {
        setTimeout(() => {
          this.headerCss.background = 'rgba(0, 0, 0, 0)'
          this.headerCss.color = '#409EFF'
        }, 1500)
      }, 100)
    })
  },
  computed: {
    headImgSrc () {
      if (this.userInfo === '') {
        return '../../static/img/head.png'
      } else {
        return this.userInfo.headUrl
      }
    },
    userName () {
      if (this.userInfo === '') {
        return '请登录'
      } else {
        return this.userInfo.userName
      }
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    toLogin () {
      if (this.userInfo !== '') {
        return
      }
      this.$router.push({ path: '/login' })
    },
    toUserPage () {
      // console.log(this.userInfo)
      if (this.userInfo === '') {
        const h = this.$createElement
        this.$notify({
          type: 'warning',
          title: 'warning',
          message: h('i', { style: 'color: red' }, '请先登录工作室主页')
        })
        return
      }
      this.$router.push({ path: '/userPage' })
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../common/styles/common.styl'
.wrapper
  position fixed
  width 100vw
  height 25px
  z-index 999
  padding 20px 0
  transition 1.5s
  .title-wrapper
    float: left
    font-size: 34px
    margin-left 30px
    line-height: 1
    letter-spacing: 3px
    padding-left: 10px
    border-left: 4px solid $themecolor
    h1
      font-weight: 700
      font-family: $header-username-font
  .head-image-wrapper
    display flex
    flex-direction row-reverse
    height 100%
    .head-image
      border-radius 50%
      height 100%
      width 25px
      margin-right 15px
    .head-image:hover
      cursor pointer
    .name
      margin-right 30px
      line-height 30px
      font-family $main-title
    .name:hover
      cursor pointer
</style>

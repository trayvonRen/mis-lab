<template>
  <div class="wrapper">
    <header class="section-header">
      <h3 class="title">{{ title }}</h3>
    </header>
    <p class="intro-text">{{ intro }}</p>
  </div>
</template>

<script>
export default {
  name: 'introTitle',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    intro: {
      type: String,
      default: '这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，！'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/styles/common.styl'
.section-header
    position relative
    padding-bottom 15px
    margin-bottom 20px
    .title
      font-size 32px
      color #111
      font-family "Open Sans", $main-title
      line-height 1.5
      text-shadow 2px 2px 0px rgba(0,0,0,0.2)
      text-align center
      font-weight 700
    .title::before
      content ''
      position absolute
      display block
      width 120px
      height 1.5px
      background: #ddd
      bottom 1px
      left calc(50% - 60px)
    .title::after
      content ''
      position absolute
      display block
      width 40px
      height 3.5px
      background $themecolor
      bottom 0
      left calc(50% - 20px)
.intro-text
  font-family $side-text
  font-size 20px
</style>

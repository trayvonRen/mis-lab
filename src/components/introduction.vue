<template>
  <div class="wrapper">
    <div class="technology-wrapper">
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 100%
  display flex
  justify-content space-between
  align-items center
  .technology-wrapper
    width 300px
    height 500px
    background red

</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div class="app-bar">
    <div class="app-bar-title">
      <h1>Gread Calculator</h1>
      <p>Calculate your high school, college and cumulative GPA, check your grades and understand how the GPA scale works.</p>
    </div>
    <div class="app-settings" @click="showSettingCard = !showSettingCard">
      <i class="material-icons">settings</i>
    </div>
    <div v-bind:class="{'settings-card': true, 'show-settings-card': showSettingCard, 'hide-settings-card': !showSettingCard}">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSettingCard: false
    }
  },
  computed: {
    title: function() {
      return this.$store.state.title
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-bar
  width 100%
  height 150px
  padding 2em
  display flex
  color #000
  text-shadow 0 0 3px rgba(0,0,0,0.2)
  user-select none
  margin-bottom: 3em
.app-bar-title
  flex 2
  padding 0px 2em
  h1
    font-weight 500
    font-size 2rem
  p
    font-size 1.1rem

.app-settings
  flex 1
  display flex
  justify-content center
  cursor pointer
  i
    margin auto
    font-size 2em
    text-shadow 0 0 1px rgba(0,0,0,0.1)
    transition all 0.6s
    
    &:hover
      text-shadow 0 1px 5px rgba(0,0,0,0.4)
      transform rotate(180deg) scale(1.2)

.settings-card
  max-width 550px
  width 80%
  min-height 60vh
  background #FFF
  position absolute
  top 100px
  right 12%
  box-shadow rgba(7, 29, 63, 0.425) 0px 4px 16px 0px
  border-radius 0.6em
  z-index 100

.show-settings-card
  animation: move-from-top 1s linear forwards
.hide-settings-card
  animation: hide-to-top 0.5s ease-in forwards
@keyframes hide-to-top
  0%
    margin-top: 5em
  50%
    margin: 0em
  100%
    top: -100vh

@media screen and (max-width: 600px)
  .app-bar
    flex-direction column
    min-height 200px
    .app-bar-title
      padding 0
  .app-settings
    position absolute
    top 1em
    right 1em
  .settings-card
    top 6em
    right 2em

@media screen and (max-width: 380px)
  .app-bar
    margin-bottom 1em
    min-height: 80px
  .app-bar-title
    h1
      font-size 1.6em
    p
      display none
  .settings-card
    top 4em
    right 2em
</style>
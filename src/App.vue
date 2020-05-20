<template>
  <div class="app">
    <div class="badge">leul-dev</div>
    <app-title></app-title>
    <calculator-container></calculator-container>
  </div>
</template>

<script>
import apptitle from './components/app_title'
import calculator_container from './components/calculator_container'

export default {
  components: {
    'app-title': apptitle,
    'calculator-container': calculator_container
  },

}
</script>

<style lang="stylus">
* 
  font-family: Barlow, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0
  padding: 0
  box-sizing: border-box
* p 
  font-weight 300
body 
  background-color #D9F7FA
  margin-bottom 200vh
  overflow-x: hidden
  max-width 100vw
.app
  height 100vh
  width 100vw
  background-image linear-gradient(to bottom, rgba(235,235,235,0.2), #D9F7FA), url('./assets/img/bg.jpg')
  background-size cover
  background-repeat no-repeat
.badge
  border-radius 2em
  background #B94545
  color #FFF
  padding 3px 1em
  position absolute
  top 0.5em
  left 0.5em 




// global components
.add-button
  border 1px solid #1690ED
  background transparent
  color #1690ED
  height 42px
  font-size 18px
  cursor pointer
  transition all 0.3s cubic-bezier(0.16, 0.68, 0.43, 0.99) 0s
  border-radius 2em
  padding 0px 20px
  margin-top 2em
  display flex
  justify-content center
  font-weight 300
  outline-color rgba(0,0,0,0.1)
  outline none
  .btn-icon
    margin-right 1em
.add-button:hover
  border-color #56B656
  color #56B656
.add-button:active
  transform scale(0.945)



.close-btn
  width 25px
  height 25px
  display flex
  align-items center
  justify-content center
  border 1px solid #4A5C7D
  border-radius 50%
  background transparent
  color #8A2451
  outline none
  position absolute 
  top 0.5em
  right 0em
  .material-icons
    font-size 16px

.close-btn:hover
  border-color #EA5959
  color #56B956


// Spring animation
spring-wobbly(t)
  return -0.5 * (2.71828 ** (-6 * t)) * (
    -2 * (2.71828 ** (6 * t)) + sin(12 * t) + 2 * cos(12 * t))

lerp(a, b, p)
  return a + p * (b - a)

@keyframes move-from-top
  for i in (0..100)
    {i + '%'}
      t = i / 100
      p = spring-wobbly(t)
      top lerp(0px, 130px, p)
</style>
<template>
  <div class="semister-card">
    <div class="header">
      <h1>Semister {{semister.id}} </h1>
      <div class="weighted-container">
        Weighted
      </div>
    </div>
    <button class="close-btn" @click="delteSemister()"><i class="material-icons">close</i> </button>
    <template v-for="cource in cources">
      <semister-cource :key="cource.id" :length="cources.length" :cource="cource" v-on:delete="deleteCource" v-on:greadValue="greadValue" ></semister-cource>
    </template>
    <div class="footer">
      <div class="gread-point">
        <p>Semester {{semister.id}} GPA: </p>
        <span class="gread-value">&nbsp;0.00</span>
      </div>
      <button class="add-button" @click="addCource()" ><i class="material-icons">add</i>Add Cource</button> 
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import semister_cource from './semister_cource'

export default {
  props: ['semister'],
  components: {
    'semister-cource': semister_cource
  },
  data() {
    return {
      cources: [{id:1},{id:2},{id:3},{id:4}]
    }
  },
  methods: {
    delteSemister: function() {
      this.$emit('delete', this.semister.id)
    },
    addCource: function() {
      let length = this.cources.length;
      this.cources.push({ id: ++length })
    },
    deleteCource: function(id) {
      this.cources = this.cources.filter(cource => cource.id!==id);
      let xid = 1;
      this.cources.forEach(cource => cource.id = xid++)
    },
    greadValue: function(val) {
      alert(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
.semister-card
  position relative
  .header
    display flex
    width 100%
    padding-right 2.3em
    margin-bottom 2em
    h1
      flex 1
      font-size 1.52em
      font-weight 400
      color #342454
    .weighted-container
      font-weight 400
      font-size 1.1em
      margin-left auto
      margin-top 5px
  .footer
    display flex
    align-items center
    width: 100%
    margin: 1em auto
    font-size 18px
    font-weight 400
    .gread-point
      display flex
      .gread-value
        font-weight 400
    .add-button  
      display inline-block
      margin-top 0
      margin-left 1em
      padding 0px 1em
      height 35px
      font-size 14px
      display: flex
      align-items center
      font-weight 400
  
  .divider
    width 100%
    border-top 1px solid #ddd
    margin 2em auto

  .close-btn
    position absolute 
    top 0.5em
    right 0em
</style>
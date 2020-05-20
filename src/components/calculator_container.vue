<template>
  <div class="card">
    <template v-for="semister in semisters">
      <gread-semister :key="semister.id" v-bind:semister="semister" v-on:delete="deleteSemister"></gread-semister>
    </template>
    <button class="add-button" v-on:click="createSemister()"> <i class="btn-icon material-icons">playlist_add</i> Add Semister</button>
  </div>
</template>

<script>
import greadsemister from './gread_semister'

export default {
  components: {
    'gread-semister': greadsemister
  },
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.semisters)
  },
  computed: {
    semisters() {
      return this.$store.state.semisters
    }
  },
  methods: {
    createSemister: function() {
      this.$store.dispatch('createSemister');
    },
    deleteSemister: function(id) {
      this.$store.dispatch('deleteSemister', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  max-width 700px
  min-width 700px
  min-height 500px
  background #FFF
  border-radius 10px
  box-shadow rgba(7, 29, 63, 0.125) 0px 4px 16px 0px
  animation popup 1s cubic-bezier(.83,.8,.01,1.35) forwards
  padding 1.6em
  margin 1em auto 20em

@keyframes popup
  0% { transform: scale(0) }
  100% { transform: scale(1) }

@media screen and (max-width: 720px)
  .card
    max-width 90%
    min-width 300px
    margin 1em 3%
    width 90%
</style>
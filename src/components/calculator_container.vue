  <template>
  <div>
    <div class="card">
      <template v-for="semister in semisters">
        <gread-semister :key="semister.id" v-bind:semister="semister"></gread-semister>
      </template>
      <button class="add-button" v-on:click="createSemister()">
        <i class="btn-icon material-icons">playlist_add</i> Add Semister
      </button>
      <div class="cgpa">
        <p>{{ cgpa }}</p>
        <small>Cumulative GPA</small>
      </div>
    </div>
    <button @click="printGPA()" class="print-btn">
      Print GPA
      <i class="material-icons">print</i>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import greadSemister from "./gread_semister";

export default {
  components: {
    "gread-semister": greadSemister
  },
  computed: {
    ...mapState(["semisters", "cgpa"])
  },
  methods: {
    ...mapActions(["createSemister"]),
    printGPA() {
      const choice = confirm("Are you sure you want to print?");
      if (choice) window.print();
    }
  }
};
</script>

<style lang="stylus" scoped>
.card
  position relative
  max-width 700px
  min-width 700px
  min-height 430px
  background #FFF
  border-radius 10px
  box-shadow rgba(7, 29, 63, 0.125) 0px 4px 16px 0px
  animation popup 1s cubic-bezier(.83,.8,.01,1.35) forwards
  padding 1.6em
  margin 1em auto 60px

.cgpa
  position absolute
  bottom 0
  right 2rem
  width 160px
  height 160px
  display flex
  flex-direction column
  align-items center
  justify-content center
  background white
  border-radius 50%
  box-shadow 0 1px 15px 2px rgba(0,0,0,0.07)
  transform: translateY(20%)
  p
    font-size 2rem
    font-weight 500
  small
    font-size 0.9em
    font-weight 200

.print-btn
  padding 10px 5%
  border-radius 5px
  background #56C
  color white
  border none
  margin auto
  font-size 1rem
  display flex
  align-items center
  outline none
  box-shadow 0 0 6px rgba(0,0,0,0.1)
  transition transform 0.4s ease, background 0.4s ease
  &:hover
    background #23D
  &:active
    transform: scale(0.9)
  i
    margin-left 1em

@keyframes popup
  0% { transform: scale(0) }
  100% { transform: scale(1) }

@media screen and (max-width: 720px)
  .card
    max-width 90%
    min-width 300px
    margin 1em 3%
    width 90%

@media  print
  .card
    box-shadow none
  .print-btn
    display none
</style>
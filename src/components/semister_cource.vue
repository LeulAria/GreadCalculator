<template>
  <div class="cource-card">
    <div class="cource-info">
      <div
        :class="{'cource-name':true, 'border-top': (cource.id==1), tlr: (cource.id==1), blr: (cource.id==length) }"
      >
        <input
          @change="submitCourceInfo()"
          v-model="cource_name"
          type="text"
          placeholder="Course name"
        />
      </div>
      <div :class="{'cource-gread': true, 'border-top': (cource.id==1) }">
        <select @change="submitCourceInfo()" v-model="cource_gread">
          <template v-for="(gread,i) in greads">
            <option :key="i" :value="gread.value" v-if="gread.name!=='Gread'">{{gread.name}}</option>
            <option
              :key="i"
              v-if="gread.name=='Gread'"
              selected="selected"
              value
              hidden="hidden"
            >{{gread.name}}</option>
          </template>
        </select>
      </div>
      <div
        :class="{'cource-credit':true, 'border-top': (cource.id==1), trr: (cource.id==1), brr: (cource.id==length) }"
      >
        <input
          @change="submitCourceInfo()"
          v-model="cource_credit"
          type="number"
          placeholder="Credits"
        />
      </div>
      <div class="cource-weight-container">
        <div
          :class="{'cource-weight':true, 'border-top': (cource.id==1), tr: (cource.id==1), br: (cource.id==length) }"
        >
          <select @change="submitCourceInfo()" v-model="cource_weight">
            <template v-for="(weight, i) in weights">
              <option :key="i" :value="weight.value" v-if="weight.name!=='Weight'">{{weight.name}}</option>
              <option
                :key="i"
                v-if="weight.name=='Weight'"
                selected="selected"
                value
                hidden="hidden"
              >{{weight.name}}</option>
            </template>
          </select>
        </div>
      </div>
    </div>

    <div class="close-cource">
      <button class="close-btn">
        <i class="material-icons" @click="deleteCource({ id: cource.id, sid: sId})">close</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["cource", "semister_id", "length"],
  created() {},
  data() {
    return {
      greads: [
        { name: "Gread", value: "", hide: true },
        { name: "A+", value: "A" },
        { name: "A", value: "A" },
        { name: "A-", value: "A-" },
        { name: "B+", value: "B+" },
        { name: "B", value: "B" },
        { name: "B-", value: "B-" },
        { name: "C+", value: "C+" },
        { name: "C", value: "C" },
        { name: "C-", value: "C-" },
        { name: "D+", value: "D+" },
        { name: "D", value: "D" },
        { name: "D-", value: "D-" },
        { name: "F", value: "F" }
      ],
      weights: [
        { name: "Weight", value: "" },
        { name: "Regular", value: "regular" },
        { name: "Honors", value: "honors" },
        { name: "AP / IB", value: "ap/ib" },
        { name: "College", value: "College" }
      ],
      cource_name: "",
      cource_gread: "",
      cource_credit: "",
      cource_weight: ""
    };
  },
  methods: {
    ...mapActions(["deleteCource"]),
    submitCourceInfo: function() {
      const courceName = this.cource_name;
      const courceGread = this.cource_gread;
      const courceCredit = this.cource_credit;
      const courceWeight = this.cource_weight;

      const courceInfo = {
        courceName,
        courceGread,
        courceCredit,
        courceWeight
      };
      const info = { courceInfo, sid: this.semister_id, cid: this.cource.id };
      this.$store.dispatch("updateCourceInfo", info);
      this.$store.dispatch("calculateSemisterGread", this.semister_id);
    }
  },
  computed: {
    sId() {
      return this.semister_id;
    }
  }
};
</script>

<style lang="stylus" scoped>
.cource-card
  display flex
  align-items center
  width 100%
  height 50px
  padding-right 1em
  font-size 18px
  font-weight 400
  position relative
  user-select none

.cource-info
  flex-basis 95% 
  height 100%
  display flex
  .cource-name
    flex 6
    padding 5px
    border 1px solid #E0E2E6
    border-top-color transparent
  .cource-gread
    position relative
    flex 2
    padding 5px
    border-bottom 1px solid #E0E2E6
  .cource-credit
    flex 2
    padding 5px                                                                                           

    border 1px solid #E0E2E6
    border-top-color transparent
    input
      appearance none
  .cource-weight-container
    flex 1
    height 100%
    flex-basis 120px
    padding 0 1em
    .cource-weight
      position relative
      border 1px solid #E0E2E6
      border-top-color transparent
      padding 5px
      height 100%

.close-cource
  height 100%
  flex-basis 5%
  display flex
  justify-content center
  align-items center
.close-btn
  position static
  border-color #D0D2D6
  color #E0E2E6

input
  flex 1
  width 100%
  height 100%
  padding 0 10px
  font-size 1.1rem
  font-weight 400
  border none
  outline none
  color #0D2451
input::placeholder
  color #C0C2C6
  font-weight 400

.border-top
  border-top 1px solid #E0E2E6 !important
.tr
  border-top-left-radius 5px 
  border-top-right-radius 5px 
.br
  border-bottom-left-radius 5px 
  border-bottom-right-radius 5px 
.tlr
  border-top-left-radius 5px
.trr
  border-top-right-radius 5px
.blr
  border-bottom-left-radius 5px
.brr
  border-bottom-right-radius 5px


select
  width 100%
  border none 
  outline none
  height 100%
  padding 0 10px
  font-size 1rem
  font-weight 400
  color #B0B2B6
  background url('../assets/img/dropdown.png') no-repeat 95% center
  appearance none
  &:selected
    color red

@media print
  .close-cource
    display none
</style>
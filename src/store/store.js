import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    greadScale: [
      { name: 'A+',	percentage: 97, value: 4.00 },
      { name: 'A',	percentage: 93, value:	4.00 },
      { name: 'A−',	percentage: 90, value:	3.67 },
      { name: 'B+',	percentage: 87, value:	3.33 },
      { name: 'B',	percentage: 83, value:	3.00 },
      { name: 'B−',	percentage: 80, value:	2.67 },
      { name: 'C+',	percentage: 77, value:	2.33 },
      { name: 'C',	percentage: 73, value:	2.00 },
      { name: 'C-',	percentage: 70, value:	1.67 },
      { name: 'D+',	percentage: 67, value:	1.33 },
      { name: 'D',	percentage: 63, value:	1.00 },
      { name: 'D-',	percentage: 60, value:	0.67 },
      { name: 'F',	percentage: 0, value:	0.00 }
    ],
    semisters: [{id: 1}]
  },
  getters: {

  },
  mutations: {
    createSemister: state => {
      let length = state.semisters.length;
      state.semisters.push({ id: ++length});
    },
    deleteSemister: (state, id) => {
      state.semisters = state.semisters.filter(semister => semister.id!==id);
      let xid = 1;
      state.semisters.forEach(semister => semister.id = xid++)
    }
  },
  actions: {
    createSemister: context => {
      context.commit('createSemister')
    },
    deleteSemister: (context, id) => {
      context.commit('deleteSemister', id)
    }
  }
})
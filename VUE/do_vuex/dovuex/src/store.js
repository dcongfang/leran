import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// CEO
const state = {
  count: 0
}
// 改变
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
  // incrementIfOdd (state) {
  //   if (state.count === 2 )
  // }
}
// 组件的computed
const getters = {
  eventOrOdd: state => state.count % 2 === 0 ? 'even':'odd'
}
// 动作  部门 不能修改  state
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  // incrementIfOdd: ({ commit }) => commit('incrementIfOdd')
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    // actions axios 异步取数据...
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 2000);
    })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
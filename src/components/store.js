import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import part1 from './part1'
import part2 from './part2'

export default new Vuex.Store({
  modules: {
    part1,
    part2
  }
})
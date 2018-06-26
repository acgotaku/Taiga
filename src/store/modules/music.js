const namespaced = true

const state = {
  currentMusic: null
}

const getters = {
  getCurrentMusic: state => {
    return state.currentMusic
  }
}

const mutations = {
  setCurrentMusic (state, music) {
    state.currentMusic = music
  }
}

const actions = {}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

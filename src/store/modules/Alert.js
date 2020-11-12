const state = {
  type: null,
  message: null,
};

const actions = {
  success({ commit }, message) {
    commit("success", message);
  },
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }) {
    commit("clear");
  },
};

const mutations = {
  success(state, message) {
    state.type = "success";
    state.messsage = message;
  },
  error(state, message) {
    state.type = "error";
    state.message = message;
  },
  clear(state) {
    state.type = null;
    state.message = null;
  },
};

export const Alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};

import { userService } from "../../services/UserServices";
import router from "../../router/index";

const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };
const getters = {
  getStatus: (state) => state.status,
  getUser: () => user,
};

const actions = {
  login({ dispatch, commit }, { username, password }) {
    console.log("Called");
    commit("loginRequest", { username });
    userService.login(username, password).then(
      (user) => {
        if (user && user.token) {
          commit("loginSuccess", user);
          router.push("/User");
        }
      },
      (error) => {
        commit("loginFailure", error);
        dispatch("Alert/error", error, { root: true });
      }
    );
  },

  logout({ commit }) {
    userService.logout();
    commit("logout");
    router.push("/");
  },
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },

  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
};

export const Account = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

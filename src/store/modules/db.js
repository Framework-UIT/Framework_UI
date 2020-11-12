import { getCategories } from "../../api/CategoryApiServices";
const state = {
  Categories: [],
};

const getters = {
  AllCategories: (state) => state.Categories,
};

const actions = {
  fetchAllCategories({ commit }) {
    getCategories().then((res) => {
      if (res && res.data) commit("setCategories", res.data);
      else alert("Categories fetch response is null");
    });
  },

  addNewCategory({ commit }, new_cat) {
    commit("addCategory", new_cat);
  },
};

const mutations = {
  setCategories: (state, Categories) => (state.Categories = Categories),
  addCategory: (state, new_cat) => state.Categories.push(new_cat),
};

export const db = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

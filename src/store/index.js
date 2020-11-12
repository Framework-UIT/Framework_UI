import Vue from "vue";
import Vuex from "vuex";
import { db } from "./modules/db";
import { Account } from "./modules/Account";
import { Alert } from "./modules/Alert";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    db,
    Account,
    Alert,
  },
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

Vue.config.productionTip = false;
Vue.use(VueGlide);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

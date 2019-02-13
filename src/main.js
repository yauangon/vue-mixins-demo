import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const EventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");

export default EventBus;

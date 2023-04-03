import Vue from 'vue'
import App from './App.vue'
import '@/global.less'
import ConfigAxios from "@/config/config.axios";
import ConfigDefault from "@/config/config.default";
import ConfigUrl from "@/config/config.url";
import UbanVue from "@ubancloud/vue";

Vue.use(UbanVue,{...ConfigDefault,axios:ConfigAxios,url:ConfigUrl})

import i18n from "@/lib/i18n";
import router from "@/lib/router";
import store from "@/lib/store";
import bootstrap from './bootstrap'

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({router, store, i18n, created: bootstrap, render: h => h(App)}).$mount('#app');

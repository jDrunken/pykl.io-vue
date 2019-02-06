import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import VueScrollTo from 'vue-scrollto'  // animate scroll

Vue.config.productionTip = false

Vue.use(VueScrollTo);

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app')

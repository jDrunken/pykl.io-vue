import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n.js'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        lang : i18n.locale
    },
    mutations: {
        changeLanguage (context, payload) {
            i18n.locale = payload.lang
        }
    },
    actions: { // 비동기로 데이터가 꽂히는 것들은 이곳에 기술한다. 답이 언제 날아올지 모르는 것들
    }
})

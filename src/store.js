import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang : ''
    },
    mutations: {
        changeLanguage (context, payload) {
            console.log(context,payload);
            context.commit('changeLanguage')
            payload.i18n.locale = payload.lang
        }
    },
    actions: {
        changeLanguage ({ commit }, payload) {
            commit('onLangChanged', payload)
        }
    }
})

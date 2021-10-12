import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        scrollTop: 0,
        scrollDirection: null,
        language: localStorage.lang || 'en',
    },
    getters: {
        getScrollTop(state) {
            return state.scrollTop
        },
        getDirection(state) {
            return state.scrollDirection
        },
        language(state) {
            return state.language;
        },
    },
    mutations: {
        setScrollTop(state, val) {
            state.scrollTop = val
        },
        setScrollDirection(state, val) {
            state.scrollDirection = val
        },
        setLanguage(state, l) {
            state.language = l;
        },
    }
})

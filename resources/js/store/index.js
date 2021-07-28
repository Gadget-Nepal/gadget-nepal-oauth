import Vue from 'vue'

import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

//Import vuex modules
import auth from "./modules/auth";
import webservice from "./modules/webservice";

Vue.use(Vuex)

const opts = {
    modules: {
        auth,
        webservice,
    },

    state: {
    },

    mutations: {},

    actions: {

    },

    getters: {},
    plugins: [createPersistedState({
            storage: window.sessionStorage,
        }
    )]
}

export default new Vuex.Store(opts)

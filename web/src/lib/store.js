import Vue from 'vue'
import Vuex from 'vuex'
import {app, user, getters} from '@clapjs/vue-core/lib/store'
import clap from './store/clap'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        user,
        clap
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {
        ...getters,
        applications: state => state.clap.applications,
        application: state => state.clap.application,
    }
})

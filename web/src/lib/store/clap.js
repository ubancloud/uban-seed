import Vue from 'vue'
import router from '../router'
const clap = {
    state: {
        application: '',
        applications:[],
    },
    mutations: {
        TOGGLE_APPLICATIONS: (state, applications) => {
            Vue.ls.set('APPLICATIONS', applications)
            state.applications = applications
        },
        TOGGLE_APPLICATION: (state, application) => {
            Vue.ls.set('APPLICATION', application)
            state.application = application
        },
    },
    actions: {
        ToggleApplications({ commit }, applications) {
            commit('TOGGLE_APPLICATIONS', applications)
        },
        ToggleApplication({ commit }, application) {
            return new Promise((resolve, reject) => {
                commit('TOGGLE_APPLICATION', application)
                router.loadDynamicRoutes(application).then(() => {
                    resolve()
                }).catch(e => {
                    reject(e)
                })
            })
        },
    }
};

export default clap



export const state = () => {
    return {
        login: false
    }
}

export const getters = {
    getLogin(state) {
        return state.login
    },
}

export const mutations = {
    setLogin(state, login) {
        state.login = login
    },
}

export const actions = {
    async nuxtServerInit({ commit }, { req, redirect }) {
    }
}
// state
export const state = {
    user: null,
    token: localStorage.getItem('auth')
}

// getters
export const getters = {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null
}

// mutations
export const mutations = {

    FETCH_USER_SUCCESS(state, { user }) {
        state.user = user
    },

    UPDATE_USER(state, { user }) {
        state.user = user
    },

    FETCH_USER_FAILURE(state) {
        state.token = null
        localStorage.removeItem('auth')
    },

    LOGOUT(state) {
        state.user = null
        state.token = null

        localStorage.removeItem('auth')
    }

}

// actions
export const actions = {

    async fetchUser({ commit }) {
        try {
            const { data } = await axios.get('/api/user')

            localStorage.setItem("auth", "true");

            commit('FETCH_USER_SUCCESS', { user: data })
        } catch (e) {
            commit('FETCH_USER_FAILURE')
        }
    },

    updateUser({ commit }, data) {
        commit('UPDATE_USER', {user: data})
    },

    async logout({ commit }) {
        try {
            await axios.post('/api/logout')
        } catch (e) { }

        commit(types.LOGOUT)
    }

}
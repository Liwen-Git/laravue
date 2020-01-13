import {removeToken, setToken} from '../../libs/auth'
import http from '../../libs/http'

const state = {
    token: '',
    provider: ''
}

const getters = {
    token: state => state.token,
    accessToken: state => state.token.access_token,
}

const mutations = {
    SET_TOKEN(state, {token, provider}) {
        state.token = token
        state.provider = provider
    }
}

const actions = {
    loginHandle({commit}, {username, password, clientId, clientSecret, provider}) {
        return new Promise((resolve, reject) => {
            return http.post('/oauth/token', {
                    username,
                    password,
                    provider,
                    grant_type: 'password',
                    client_id: clientId,
                    client_secret: clientSecret
                }).then(response => {
                    const token = {
                        ...response.data,
                        created_at: new Date().getTime()
                    }

                    commit('SET_TOKEN', {token, provider})

                    resolve(setToken(token, provider))
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    logoutHandle({commit}, provider) {
        return new Promise((resolve, reject) => {
            removeToken(provider)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
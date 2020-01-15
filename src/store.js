import Vue from 'vue';
import Vuex from 'vuex';
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: null,
        loggingIn: false,
        loginError: null,
        loginSuccessful: false,
    },
    mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
            state.loginSuccessful = !errorMessage;
        },
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        logout: (state) => {
            state.accessToken = null;
        }
    },
    actions: {

        doLogin: function ({commit}, loginData) {
            commit('loginStart');

            axios.post('http://localhost:3000/client/login',{
                ...loginData
            })
                .then((response) => {
                  // eslint-disable-next-line no-console
                  console.log(response);
                    localStorage.setItem('accessToken', response.data.token);
                    commit('loginStop', null);
                    commit('updateAccessToken', response.data.token);
                    router.push('/');
                    window.location.reload();
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                    commit('loginStop', error);
                    commit('updateAccessToken', null);
                });
        },
        fetchAccessToken({commit}) {
            commit('updateAccessToken', localStorage.getItem('accessToken'));
        },
        logout({commit}) {
            localStorage.removeItem('accessToken');
            commit('logout');
            router.push('/');
            window.location.reload();

        }
    },
    modules: {}
});

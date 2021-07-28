import {Promise} from "es6-promise";
import axios from "axios";

const state = {
    user: "",
    accessToken: ""
};

const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
    },
    SET_ACCESS_TOKEN(state, payload) {
        state.accessToken = payload;
    }
};

const actions = {
    loginOrRegister(state, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/' + payload.route, payload.data, {
                headers: {
                    Accept: "application/json",
                }
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    },
    logout(state) {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/logout', {}, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + state.getters.GET_ACCESS_TOKEN
                }
            }).then(function (response) {
                if (response.data.status === 200) {
                    state.commit("SET_USER", "");
                    state.commit("SET_ACCESS_TOKEN", "");
                    window.sessionStorage.clear();
                }
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    },
};

const getters = {
    GET_ACCESS_TOKEN(state) {
        return state.accessToken;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};


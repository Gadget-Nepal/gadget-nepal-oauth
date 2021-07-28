import axios from "axios";
import {Promise} from "es6-promise";

const state = {};

const mutations = {};

const actions = {
    makePostRequest(state, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/' + payload.route, payload.data, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + state.getters.GET_ACCESS_TOKEN
                }
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    },
    makeGetRequest(state, payload) {
        return new Promise((resolve, reject) => {
            axios.get('/api/v1/' + payload.route, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + state.getters.GET_ACCESS_TOKEN
                }
            }).then(function (response) {
                resolve();
            }).catch(function (error) {
                reject();
            });
        })
    }

};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
};


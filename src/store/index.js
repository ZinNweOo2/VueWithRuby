import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from "../router";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: null,
        errMsg: "",
        userValidationErrors: null,
        applicantsData: null,
        imgFile: [],
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
        },

        setErrorData(state, errMsg) {
            state.errMsg = errMsg;
        },

        setApplicantData(state, applicantsData) {
            state.applicantsData = applicantsData;
        },

        setValidateError(state, error) {
            state.userValidationErrors = error;
        },

        setImgFile(state, imgFile) {
            state.imgFile = imgFile;
        },
    },

    actions: {

        createApplicant({
            commit
        }, formData) {
            try {
                axios
                    .post("/api/create", formData)
                    .then((data) => {
                        if (data) {
                            router.push({
                                name: "done",
                            });
                            commit("setApplicantData", null);
                            commit("setImgFile", null);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (error) {
                console.error(error);
            }
        },
        validateApplicant({
            commit
        }, applicantData) {
            axios
                .post("api/validate", applicantData)
                .then((data) => {
                    if (data) {
                        commit("setApplicantData", applicantData);
                        commit("setValidateError", null);
                    }
                    router.push({
                        name: "confirm",
                    });
                })
                .catch((err) => {
                    commit("setValidateError", err.response.data);
                });
        },

        createImgFile({
            commit
        }, imgFile) {
            commit("setImgFile", imgFile);
        },

        login({
            commit
        }, userData) {
            axios
                .post("/login", userData)
                .then((data) => {
                    commit("setErrorData", null);
                    commit("setUserData", data);
                    router.push({
                        name: "applicant-list",
                    });
                })
                .catch((err) => {
                    commit("setErrorData", err.response.data.error);
                });
        },

        logout({
            commit
        }) {
            commit("setUserData", null);
            commit("setErrorData", null);
        },

        cancelApplicant({
            commit
        }) {
            commit("setApplicantData", null);
            commit("setImgFile", null);
        },
    },
    getters: {
        isData: (state) => !!state.applicantsData,
        isLoggedIn: (state) => !!state.user,
        userType: (state) => {
            if (state.user && state.user.data.user_type) {
                return state.user.data.user_type;
            }
            return -1;
        },
        userId: (state) => {
            if (state.user && state.user.data.user_id) {
                return state.user.data.user_id;
            }
        },
        userEmail: (state) => {
            if (state.user && state.user.data.user.email) {
                return state.user.data.user.email;
            }
        },
    },
    plugins: [createPersistedState()],
});
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    companies: null,
    companyInfo: null,
  },
  getters: {
    GET_COMPANIES(state) {
      return state.companies;
    },
    GET_COMPANY_INFO(state) {
      return state.companyInfo;
    },
  },
  mutations: {
    SET_COMPANIES(state, payload) {
      state.companies = payload;
    },
    SET_COMPANY_INFO(state, payload) {
      state.companyInfo = payload;
    },
  },
  actions: {
    fetchCompanies(context) {
      fetch("http://api-test.duotek.ru/companies")
        .then((res) => res.json())
        .then((res) => {
          context.commit("SET_COMPANIES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCompanyInfo(context, id) {
      fetch(`http://api-test.duotek.ru/companies/info?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
          context.commit("SET_COMPANY_INFO", res.data);
        });
    },
  },
});

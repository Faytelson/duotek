import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    companies: null,
    companyInfo: null,
    companiesTotalPages: null,
    industries: null,
    specializations: null,
    filteredItems: null,
  },
  getters: {
    GET_COMPANIES(state) {
      return state.companies;
    },
    GET_COMPANY_INFO(state) {
      return state.companyInfo;
    },
    GET_COMPANIES_TOTAL_PAGES(state) {
      return state.companiesTotalPages;
    },
    GET_INDUSTRIES(state) {
      return state.industries;
    },
    GET_SPECS(state) {
      return state.specializations;
    },
    GET_FILTERED_ITEMS(state) {
      return state.filteredItems;
    },
  },
  mutations: {
    SET_COMPANIES(state, payload) {
      state.companies = payload;
    },
    SET_COMPANY_INFO(state, payload) {
      state.companyInfo = payload;
    },
    SET_COMPANIES_TOTAL_PAGES(state, payload) {
      state.companiesTotalPages = payload;
    },
    SET_INDUSTRIES(state, payload) {
      state.industries = payload;
    },
    SET_SPECS(state, payload) {
      state.specializations = payload;
    },
    SET_FILTERED_ITEMS(state, payload) {
      state.filteredItems = payload;
    },
  },
  actions: {
    fetchCompanies(context, args) {
      const [page, per_page] = args;
      fetch(`http://api-test.duotek.ru/companies?page=${page}&per_page=${per_page}`)
        .then((res) => res.json())
        .then((res) => {
          context.commit("SET_COMPANIES", res.data);
          context.commit("SET_COMPANIES_TOTAL_PAGES", res.meta.total);
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCompaniesSearch(context, args) {
      const [per_page, searchQuery] = args;
      fetch(`http://api-test.duotek.ru/companies?per_page=${per_page}&search=${searchQuery}`)
        .then((res) => res.json())
        .then((res) => {
          context.commit("SET_COMPANIES", res.data);
          context.commit("SET_COMPANIES_TOTAL_PAGES", res.meta.total);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchDefinitions(context) {
      fetch(`http://api-test.duotek.ru/definitions`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          context.commit("SET_INDUSTRIES", res.Industry);
          context.commit("SET_SPECS", res.CompanySpecialization);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCompaniesFilter(context, args) {
      const [specializations, industries] = args;
      fetch(`http://api-test.duotek.ru/companies?specializations=${specializations}&industries=${industries}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          context.commit("SET_COMPANY_INFO", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

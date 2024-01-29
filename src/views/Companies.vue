<template>
  <div class="companies">
    <div class="companies__container">
      <h1 class="companies__title">
        <Title title="Каталог компаний" :styleType="['main']"></Title>
      </h1>
      <div class="companies__inner">
        <div class="companies__column">
          <div class="companies__search">
            <InputSearch placeholder="Поиск продукта или отрасли" name="company_search" :id="1" @emitValue="searchQuery"></InputSearch>
          </div>
          <div class="companies__items">
            <div class="companies__item" v-for="company in getCompanies" :key="company.id">
              <router-link :to="{ name: 'companyDetail', params: { id: company.id } }">
                <CompanyLink :companyInfo="company"></CompanyLink>
              </router-link>
            </div>
          </div>
          <div class="overflow-auto" v-if="getCompanies">
            <b-pagination-nav :link-gen="linkGen" v-model="pagination.currentPage" :number-of-pages="getPaginationLength" align="center" use-router></b-pagination-nav>
          </div>
        </div>
        <div class="companies__column">
          <div class="companies__filters">
            <div class="companies__filter-item">
              <div class="companies__filter-item-title">Отрасль</div>
              <div class="companies__filter">
                <FilterComponent label="Все отрасли" :optionsList="getIndustries" @emitValue="filterItems"></FilterComponent>
              </div>
            </div>
            <div class="companies__filter-item">
              <div class="companies__filter-item-title">Специализация</div>
              <div class="companies__filter">
                <FilterComponent label="Все специализации" :optionsList="getSpecs" @emitValue="filterItems"></FilterComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import CompanyLink from "@/components/CompanyLink.vue";
import InputSearch from "@/components/ui/InputSearch.vue";
import FilterComponent from "@/components/ui/FilterComponent.vue";

export default {
  name: "Companies",
  components: {
    Title,
    CompanyLink,
    InputSearch,
    FilterComponent,
  },
  mounted() {
    this.checkQueryParams();
    this.fetchCompanies();
    this.fetchDefinitions();
  },
  watch: {
    $route(to) {
      this.pagination.currentPage = to.query.page;
      this.fetchCompanies();
    },
  },
  data() {
    return {
      pagination: {
        perPage: 5,
        currentPage: 1,
      },
      filteredIndustries: "",
      filteredSpecs: "",
    };
  },
  computed: {
    getCompanies() {
      return this.$store.getters.GET_COMPANIES;
    },
    getPaginationLength() {
      return Math.ceil(Number(this.$store.getters.GET_COMPANIES_TOTAL_PAGES) / this.pagination.perPage);
    },
    getIndustries() {
      return this.$store.getters.GET_INDUSTRIES;
    },
    getSpecs() {
      return this.$store.getters.GET_SPECS;
    },
  },
  methods: {
    fetchCompanies() {
      this.$store.dispatch("fetchCompanies", [this.pagination.currentPage, this.pagination.perPage]);
    },
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
    checkQueryParams() {
      this.pagination.currentPage = this.$route.query.page ? this.$route.query.page : 1;
      if (this.$route.query?.search) {
        this.searchQuery(this.$route.query.search);
      }
    },
    searchQuery(value) {
      console.log(value);
      this.$store.dispatch("fetchCompaniesSearch", [this.pagination.perPage, value]);
      // this.$router.push(({ name: "companies", query: { ...this.$route.query, search: value } }))
      // this.pushRouteTo({ name: "companies", query: { ...this.$route.query, search: value } });
    },
    // pushRouteTo(route) {
    //   if (typeof route == "string") {
    //     if (this.$route.path != route) {
    //       this.$router.push(route);
    //     }
    //   } else {
    //     if (this.$route.name == route.name) {
    //       if ("params" in route) {
    //         let routesMatched = true;
    //         for (let key in this.$route.params) {
    //           const value = this.$route.params[key];
    //           if (value == null || value == undefined) {
    //             if (key in route.params) {
    //               if (route.params[key] != undefined && route.params[key] != null) {
    //                 routesMatched = false;
    //                 break;
    //               }
    //             }
    //           } else {
    //             if (key in route.params) {
    //               if (route.params[key] != value) {
    //                 routesMatched = false;
    //                 break;
    //               }
    //             } else {
    //               routesMatched = false;
    //               break;
    //             }
    //           }
    //           if (!routesMatched) {
    //             this.$router.push(route);
    //           }
    //         }
    //       } else {
    //         if (Object.keys(this.$route.params).length != 0) {
    //           this.$router.push(route);
    //         }
    //       }
    //     }
    //   }
    // },
    fetchDefinitions() {
      this.$store.dispatch("fetchDefinitions");
    },
    filterItems(option) {
      if (option.companySpecializationGroup) {
        this.filteredSpecs = option.id;
      } else if (option.industryGroup) {
        this.filteredIndustries = option.id;
      }
      this.$store.dispatch("fetchCompaniesFilter", [this.filteredSpecs, this.filteredIndustries]);
    },
  },
};
</script>

<style lang="scss" scoped>
.companies {
  padding-top: 75px;
  padding-bottom: 44px;

  &__container {
    @include container;
  }

  &__title {
    margin-bottom: 18px;
  }

  &__inner {
    display: grid;
    grid-template-columns: 792px 264px;
    justify-content: space-between;
  }

  &__item {
    margin-bottom: 30px;
  }

  &__search {
    margin-bottom: 38px;
  }

  &__filters {
    width: 100%;
    background-color: $color-ultra-light-grey;
    border-radius: 4px;
    padding: 18px 20px;
  }

  &__filter-item-title {
    @include font($font-main, 16px, 400);
    color: $color-black;
    margin-bottom: 16px;
  }

  &__filter-item {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

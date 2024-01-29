<template>
  <div class="companies">
    <div class="companies__container">
      <h1 class="companies__title">
        <Title title="Каталог компаний" :styleType="['main']"></Title>
      </h1>
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
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import CompanyLink from "@/components/CompanyLink.vue";
import InputSearch from "@/components/ui/InputSearch.vue";

export default {
  name: "Companies",
  components: {
    Title,
    CompanyLink,
    InputSearch,
  },
  mounted() {
    this.checkQueryParams();
    this.fetchCompanies();
  },
  watch: {
    "$route"(to) {
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
    };
  },
  computed: {
    getCompanies() {
      return this.$store.getters.GET_COMPANIES;
    },
    getPaginationLength() {
      return Math.ceil(Number(this.$store.getters.GET_COMPANIES_TOTAL_PAGES) / this.pagination.perPage);
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
      if(this.$route.query?.search) {
        this.searchQuery(this.$route.query.search);
      }
    },
    searchQuery(value) {
      this.$store.dispatch("fetchCompaniesSearch", [this.pagination.perPage, value]);
      this.pushRouteTo({ name: "companies", query: { ...this.$route.query, search: value } });
    },
    pushRouteTo(route) {
      if (typeof route == "string") {
        if (this.$route.path != route) {
          this.$router.push(route);
        }
      } else {
        if (this.$route.name == route.name) {
          if ("params" in route) {
            let routesMatched = true;
            for (let key in this.$route.params) {
              const value = this.$route.params[key];
              if (value == null || value == undefined) {
                if (key in route.params) {
                  if (route.params[key] != undefined && route.params[key] != null) {
                    routesMatched = false;
                    break;
                  }
                }
              } else {
                if (key in route.params) {
                  if (route.params[key] != value) {
                    routesMatched = false;
                    break;
                  }
                } else {
                  routesMatched = false;
                  break;
                }
              }
              if (!routesMatched) {
                this.$router.push(route);
              }
            }
          } else {
            if (Object.keys(this.$route.params).length != 0) {
              this.$router.push(route);
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.companies {
  padding-top: 75px;

  &__container {
    @include container;
  }

  &__title {
    margin-bottom: 18px;
  }

  &__item {
    margin-bottom: 30px;
  }

  &__search {
    margin-bottom: 38px;
  }
}
</style>

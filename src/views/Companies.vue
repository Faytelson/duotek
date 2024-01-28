<template>
  <div class="companies">
    <div class="companies__container">
      <h1 class="companies__title">
        <Title title="Каталог компаний" :styleType="['main']"></Title>
      </h1>
      <div class="companies__items">
        <div class="companies__item" v-for="company in getCompanies" :key="company.id">
          <router-link :to="{ name: 'companyDetail', params: { id: company.id } }">
            <CompanyLink :companyInfo="company"></CompanyLink>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import CompanyLink from "@/components/CompanyLink.vue";

export default {
  name: "Companies",
  components: {
    Title,
    CompanyLink,
  },
  computed: {
    getCompanies() {
      return this.$store.getters.GET_COMPANIES;
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
}
</style>

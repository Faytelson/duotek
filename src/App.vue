<template>
  <div id="app">
    <div class="app__header">
      <Header></Header>
    </div>
    <div class="app__content">
      <router-view></router-view>
    </div>
    <div class="app__footer"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    this.fetchCompanies();
  },
  methods: {
    fetchCompanies() {
      this.$store.dispatch("fetchCompanies");
    },
  },
};
</script>

<style lang="scss"></style>

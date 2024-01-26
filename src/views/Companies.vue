<template>
  <div class="companies">
    <div class="companies__container">
      companies
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
};
</script>

<style lang="scss" scoped>
.companies {
  padding-top: 75px;

  &__container {
    @include container;
  }
}
</style>

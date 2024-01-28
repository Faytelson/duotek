<template>
  <div class="company-link">
    <div class="company-link__logo-container">
      <img :src="companyInfo.picture" alt="" class="company-link__logo" />
    </div>
    <div class="company-link__info">
      <div class="company-link__title">{{ companyInfo.title }}</div>
      <div class="company-link__description">{{ companyInfo.description_short }}</div>
      <div class="company-link__specializations">
        <OptionsList :options="companyInfo.companySpecializations"></OptionsList>
      </div>
    </div>
  </div>
</template>

<script>
import OptionsList from "./OptionsList.vue";

export default {
  name: "CompanyLink",
  props: {
    companyInfo: Object,
  },
  components: {
    OptionsList,
  },
};
</script>

<style lang="scss" scoped>
.company-link {
  display: grid;
  grid-template-columns: 160px 1fr;
  padding: 40px 52px 32px 9px;
  max-width: 745px;
  position: relative;

  &::after {
    @include pseudo;
    right: -11px;
    bottom: 18px;
    width: 24px;
    height: 24px;
    background: url("@/assets/images/icon_right_red.svg") center / contain no-repeat;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity $transition-main, visibility $transition-main;
  }

  &:hover {
    & .company-link__title {
      color: $color-red;
    }

    &::after {
      opacity: 1;
      visibility: visible;
    }
  }

  &__logo-container {
    height: 90px;
    width: auto;
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left top;
  }

  &__title {
    @include font($font-main, 24px, 400);
    color: $color-blue;
    margin-bottom: 16px;
    transition: color $transition-main;
  }

  &__description {
    @include font($font-main, 14px, 400);
    color: $color-black;
    margin-bottom: 16px;
  }
}
</style>

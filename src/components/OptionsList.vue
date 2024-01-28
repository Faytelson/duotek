<template>
  <div class="options-list">
    <div class="options-list__item" v-for="opt in options" :key="opt.title">{{ opt.title }}</div>
  </div>
</template>

<script>
export default {
  name: "OptionsList",
  props: {
    options: Array,
  },
};
</script>

<style lang="scss" scoped>
.options-list {
  display: flex;
  align-items: center;
  gap: 4px;

  &__item {
    @include font($font-main, 14px, 400);
    color: $color-black;
    padding: 5px 22px;
  }
}
</style>

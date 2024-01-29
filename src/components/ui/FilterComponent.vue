<template>
  <div class="filter" tabindex="0" @blur="closeOptions">
    <div class="filter__header" @click="handleOptions">
      <div v-if="!filterValue" class="filter__label-field">
        <p class="filter__label">{{ label }}</p>
        <span class="filter__arrow"></span>
      </div>
      <div v-else class="filter__value">{{ filterValue }}</div>
    </div>
    <ul class="filter__options" v-if="showOptions">
      <li class="filter__option" v-for="opt in optionsList" :key="opt.id" @click="handleChosenOption(opt)">{{ opt.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    optionsList: Array,
    label: String,
  },
  data() {
    return {
      filterValue: "",
      showOptions: false,
    };
  },
  methods: {
    handleChosenOption(opt) {
      this.filterValue = opt.title;
      this.handleOptions();
      this.emitValue(opt);
    },
    emitValue(option) {
      this.$emit("emitValue", option);
    },
    handleOptions() {
      this.showOptions = !this.showOptions;
    },
    closeOptions() {
      this.showOptions = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  position: relative;

  &__header {
    height: 40px;
    border-radius: 8px;
    background-color: $color-white;
    padding: 9px 16px;
    cursor: pointer;
  }

  &__label-field {
    position: relative;
  }

  &__label {
    @include font($font-main, 14px, 400);
    color: $color-black;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 24px;
    height: 24px;
    background: url("@/assets/images/icon_arrow_down.png") center / contain no-repeat;
  }

  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    padding: 8px 12px;
    border-radius: 4px;
    z-index: 2;
    background-color: $color-white;
    border: 1px solid $color-light-grey;
  }

  &__option {
    margin-bottom: 10px;
    cursor: pointer;
  }

  &__value {
    pointer-events: none;
    max-height: 100%;
    overflow: hidden;
  }
}
</style>

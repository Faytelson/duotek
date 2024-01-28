<template>
  <button class="button" :class="classes" @click="emitEvent">{{ title }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    title: String,
    styleType: Array,
  },
  computed: {
    classes() {
      let classes = [];
      if (this.styleType?.length > 0) {
        this.styleType.forEach((type) => {
          classes.push(`button_${type}`);
        });
      }
      return classes;
    },
  },
  methods: {
    emitEvent() {
      this.$emit("clickBtn");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  &_back {
    @include font($font-main, 14px, 400);
    color: $color-blue;
    padding-left: 35px;
    position: relative;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      @include pseudo;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      background: url("@/assets/images/icon_left_blue.png") center / contain no-repeat;
    }
  }
}
</style>

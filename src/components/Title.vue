<template>
  <div class="title" :class="classes">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    styleType: Array,
  },
  computed: {
    classes() {
      let classes = [];
      if (this.styleType?.length > 0) {
        this.styleType.forEach((type) => {
          classes.push(`title_${type}`);
        });
      }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  &_main {
    @include font($font-main, 36px, 600);
    color: $color-black;
  }

  &_sm {
    @include font($font-main, 18px, 400);
    color: $color-black;
  }
}
</style>

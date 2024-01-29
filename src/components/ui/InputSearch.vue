<template>
  <div class="input-search">
    <div class="input-search__field">
      <input type="text" class="input-search__input" :placeholder="placeholder" :name="name" :id="id" v-model="inputValue" @input="emitValue" />
    </div>
    <button class="input-search__btn" @click="emitValue">Найти</button>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    emitValue() {
      this.$emit("emitValue", this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  &::before {
    @include pseudo;
    width: 45px;
    height: 100%;
    top: 0;
    left: 0;
    background: url("@/assets/images/icon_search.png") center / 24px 24px no-repeat;
  }

  &__field {
    border: 1px solid $color-extra-light-grey;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding-left: 45px;
  }

  &__input {
    width: 100%;
    height: 100%;
    @include font($font-title, 16px, 400);
    color: $color-black;

    &::placeholder {
      @include font($font-title, 16px, 400);
      color: $color-grey;
    }
  }

  &__btn {
    @include font($font-main, 14px, 400);
    color: $color-white;
    padding: 10px 18px;
    background-color: $color-blue;
  }
}
</style>

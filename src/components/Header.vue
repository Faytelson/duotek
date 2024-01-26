<template>
  <div class="header">
    <div class="header__container">
      <div class="header__inner">
        <div class="header__logo-container">
          <img :src="require('@/assets/images/logo.svg')" alt="Логотип" class="header__logo" />
        </div>
        <div class="header__nav">
          <div class="header__menu menu">
            <ul class="menu__list">
              <li class="menu__item"><router-link class="menu__link" to="/tenders">Тендеры</router-link></li>
              <li class="menu__item"><router-link class="menu__link" to="/companies">Компании</router-link></li>
              <li class="menu__item"><router-link class="menu__link" to="/products">Продукты</router-link></li>
              <li class="menu__item"><router-link class="menu__link" to="/cases">Кейсы</router-link></li>
              <li class="menu__item"><router-link class="menu__link" to="/blog">Блог</router-link></li>
            </ul>
          </div>
          <div class="header__user-panel"><button class="menu__btn">Вход и регистрация</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    @include container;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo-container {
    width: 160px;
    height: 50px;
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__menu {
    margin-right: 170px;
  }
}
.menu {
  &__list {
    display: flex;
    gap: 40px;
  }

  &__btn,
  &__link {
    @include font-link;
    transition: color $transition-main;

    &:hover,
    &.router-link-exact-active {
      color: $color-light-grey;
    }
  }
}
</style>

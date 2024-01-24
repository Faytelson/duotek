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
                    <li class="menu__item"><router-link to="/">Тендеры</router-link></li>
                    <li class="menu__item"><router-link to="/companies">Компании</router-link></li>
                    <li class="menu__item"><router-link to="/">Продукты</router-link></li>
                    <li class="menu__item"><router-link to="/">Кейсы</router-link></li>
                    <li class="menu__item"><router-link to="/">Блог</router-link></li>
                  </ul>
                </div>
                <div class="header__user-panel"></div>
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
}
.menu {
  &__list {
    display: flex;
    gap: 40px;
  }
}
</style>

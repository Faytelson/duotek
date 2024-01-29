<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__columns">
        <div class="footer__column">
          <div class="footer__column-title">Тендеры</div>
          <button class="footer__btn footer__btn_blue">Добавить тендер</button>
          <ul class="footer__nav">
            <li class="footer__nav-item">Каталог тендеров</li>
            <li class="footer__nav-item">Работа с клиентами</li>
            <li class="footer__nav-item">Управление проектами</li>
            <li class="footer__nav-item">Маркетинг</li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__column-title">Компании</div>
          <button class="footer__btn footer__btn_red">Добавить компанию</button>
          <ul class="footer__nav">
            <li class="footer__nav-item">Рейтинги</li>
            <li class="footer__nav-item">Отраслевая специализация</li>
            <li class="footer__nav-item">Интеграторы</li>
            <li class="footer__nav-item">Решения для бизнеса крепеж</li>
            <li class="footer__nav-item">Разработка сайтов</li>
            <li class="footer__nav-item">Мобильные приложения</li>
            <li class="footer__nav-item">Онлайн-реклама</li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__column-title">Продукты</div>
          <ul class="footer__nav">
            <li class="footer__nav-item">Рейтинги</li>
            <li class="footer__nav-item">По отраслям</li>
            <li class="footer__nav-item">Работа с клиентами</li>
            <li class="footer__nav-item">Управление проектами</li>
            <li class="footer__nav-item">Маркетинг</li>
            <li class="footer__nav-item">Финансы</li>
            <li class="footer__nav-item">Управление бизнесом</li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__column-title">Кейсы</div>
          <ul class="footer__nav">
            <li class="footer__nav-item">Автоматизация сантехников</li>
            <li class="footer__nav-item">Автоматизация клининга</li>
            <li class="footer__nav-item">Автоматизация СТО</li>
            <li class="footer__nav-item">Автоматизация сантехников</li>
            <li class="footer__nav-item">Автоматизация клининга</li>
            <li class="footer__nav-item">Автоматизация СТО</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <ul class="footer__socials">
          <li class="footer__social-item">
            <img src="@/assets/images/icon_facebook.png" alt="facebook" class="footer__social-icon" />
          </li>
          <li class="footer__social-item">
            <img src="@/assets/images/icon_vk.png" alt="vk" class="footer__social-icon" />
          </li>
          <li class="footer__social-item">
            <img src="@/assets/images/icon_youtube.png" alt="youtube" class="footer__social-icon" />
          </li>
        </ul>
        <ul class="footer__info-items">
          <li class="footer__info-item">О проекте</li>
          <li class="footer__info-item">Пользовательское соглашение</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 80px;
  padding-bottom: 87px;
  border-top: 1px solid $color-ultra-light-grey;

  &__container {
    @include container;
  }

  &__columns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
  }

  &__column-title {
    @include font($font-main, 16px, 400);
    color: $color-black;
    margin-bottom: 16px;
  }

  &__btn {
    height: 32px;
    padding: 5px 16px;
    @include font($font-main, 14px, 400);
    color: $color-white;
    margin-bottom: 16px;
    border-radius: 4px;

    &_blue {
      background-color: $color-blue;
    }

    &_red {
      background-color: $color-red;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__nav-item {
    @include font($font-main, 14px, 400);
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__social-item {
    width: 24px;
    height: 24px;
  }

  &__info-items {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__info-item {
    @include font($font-main, 12px, 400);
    color: $color-grey;
  }
}
</style>

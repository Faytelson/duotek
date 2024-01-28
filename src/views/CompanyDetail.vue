<template>
  <div class="company-detail">
    <div class="company-detail__container">
      <div class="company-detail__btn-back">
        <ButtonComponent title="Компании" :styleType="['back']" @clickBtn="goBack"></ButtonComponent>
      </div>
      <h1 class="company-detail__title">
        <Title :title="getCompanyInfo.title" :styleType="['main']" v-if="getCompanyInfo"></Title>
      </h1>
      <div class="company-detail__inner">
        <div class="company-detail__main">
          <div class="company-detail__info">
            <div class="company-detail__info-item" v-if="getCompanyInfo?.age">
              <span class="company-detail__info-item-num">{{ getCompanyInfo.age }}</span>
              <span class="company-detail__info-item-title">{{ [getCompanyInfo.age, "год", "года", "лет"] | getWordForm }}</span>
            </div>
            <div class="company-detail__info-item" v-if="getCompanyInfo?.staff">
              <span class="company-detail__info-item-num">{{ getCompanyInfo.staff }}</span>
              <span class="company-detail__info-item-title">{{ [getCompanyInfo.staff, "человек", "человека", "человек"] | getWordForm }}</span>
            </div>
          </div>
          <div class="company-detail__description-short" v-if="getCompanyInfo?.description_short">{{ getCompanyInfo.description_short }}</div>
          <div class="company-detail__description-full" v-if="getCompanyInfo?.description_full">{{ getCompanyInfo.description_full }}</div>
          <div class="company-detail__opt-list company-detail__opt-list_specializations" v-if="getCompanyInfo?.companySpecializations">
            <h2 class="company-detail__list-title">
              <Title title="Проектная специализация" :styleType="['sm']"></Title>
            </h2>
            <div class="company-detail__specializations-list">
              <OptionsList :options="getCompanyInfo?.companySpecializations"></OptionsList>
            </div>
          </div>
          <div class="company-detail__opt-list company-detail__opt-list_techs" v-if="getCompanyInfo?.industries">
            <h2 class="company-detail__list-title">
              <Title title="Технологии" :styleType="['sm']"></Title>
            </h2>
            <div class="company-detail__techs-list">
              <OptionsList :options="getCompanyInfo?.industries"></OptionsList>
            </div>
          </div>
        </div>
        <div class="company-detail__aside aside">
          <div class="aside__logo-container" v-if="getCompanyInfo?.picture">
            <img :src="getCompanyInfo?.picture" alt="Лого" class="aside__logo" />
          </div>
          <div class="aside__info">
            <div class="aside__item">
              <div class="aside__item-title">Сайт:</div>
              <div class="aside__item-data">
                <a :href="getCompanyInfo.url" v-if="getCompanyInfo?.url">{{ getCompanyInfo.url }}</a>
                <span v-else>-</span>
              </div>
            </div>
            <div class="aside__item">
              <div class="aside__item-title">Город:</div>
              <div class="aside__item-data">
                <span v-if="getCompanyInfo?.city?.title">{{ getCompanyInfo.city.title }}</span>
                <span v-else>-</span>
              </div>
            </div>
            <div class="aside__item">
              <div class="aside__item-title">E-mail:</div>
              <div class="aside__item-data">
                <a :href="'mailto:' + getCompanyInfo.contact_email" v-if="getCompanyInfo?.contact_email">{{ getCompanyInfo.contact_email }}</a>
                <span v-else>-</span>
              </div>
            </div>
            <div class="aside__item">
              <div class="aside__item-title">Телефон:</div>
              <div class="aside__item-data">
                <a :href="'tel:' + getCompanyInfo.contact_phone" v-if="getCompanyInfo?.contact_phone"> {{ getCompanyInfo.contact_phone | getTel }}</a>
                <span v-else>-</span>
              </div>
            </div>
            <div class="aside__item">
              <div class="aside__item-title">WhatsApp:</div>
              <div class="aside__item-data">
                <a :href="'https://api.whatsapp.com/send?phone=' + getCompanyInfo?.contact_whatsapp" target="_blank" v-if="getCompanyInfo?.contact_whatsapp">{{ getCompanyInfo?.contact_whatsapp }}</a>
                <span v-else>-</span>
              </div>
            </div>
            <div class="aside__item">
              <div class="aside__item-title">Telegram:</div>
              <div class="aside__item-data">
                <span v-if="getCompanyInfo?.contact_telegram">{{ getCompanyInfo?.contact_telegram }}</span>
                <span v-else>-</span>
              </div>
            </div>
            <div class="aside__item">
              <div class="aside__item-title">Skype:</div>
              <div class="aside__item-data">
                <span v-if="getCompanyInfo?.contact_skype">{{ getCompanyInfo?.contact_skype }}</span>
                <span v-else>-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import OptionsList from "@/components/OptionsList.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";

export default {
  name: "CompanyDetail",
  components: {
    Title,
    OptionsList,
    ButtonComponent,
  },
  mounted() {
    this.fetchCompanyInfo();
    console.log("mounted");
  },
  filters: {
    getWordForm(args) {
      const [number, one, two, five] = args;
      let n = number;
      n %= 100;
      if (n >= 5 && n <= 20) {
        return five;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return two;
      }
      return five;
    },
    getTel(tel) {
      let countryCode = `+${String(tel).slice(0, 1)} `;
      let cityCode = `(${String(tel).slice(1, 4)}) `;
      let num = `${String(tel).slice(4, 7)}-${String(tel).slice(7, 9)}-${String(tel).slice(9, 11)}`;
      return `${countryCode}${cityCode}${num}`;
    },
  },
  computed: {
    getCompanyInfo() {
      return this.$store.getters.GET_COMPANY_INFO;
    },
  },
  methods: {
    fetchCompanyInfo() {
      console.log("fetch");
      this.$store.dispatch("fetchCompanyInfo", this.$route.params.id);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.company-detail {
  padding-top: 39px;

  &__container {
    @include container;
    padding: 0 37px;
  }

  &__inner {
    display: grid;
    grid-template-columns: 744px 264px;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 18px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 21px;
    margin-bottom: 10px;
  }

  &__info-item {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  &__info-item-num {
    @include font($font-main, 60px, 400);
    color: $color-red;
    line-height: 1em;
  }

  &__info-item-title {
    @include font($font-main, 16px, 400);
    color: $color-dark-grey;
  }

  &__description-short {
    @include font($font-main, 18px, 400);
    line-height: 25.2px;
    color: $color-black;
    margin-bottom: 24px;
  }

  &__description-full {
    @include font($font-main, 14px, 400);
    color: $color-dark-grey;
    line-height: 21px;
    margin-bottom: 40px;
  }

  &__list-title {
    margin-bottom: 24px;
  }

  &__opt-list {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__btn-back {
    margin-bottom: 14px;
  }
}

.aside {
  &__logo-container {
    width: 120px;
    height: 120px;
    margin-bottom: 16px;
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__item-data,
  &__item-title {
    @include font($font-main, 14px, 400);
    line-height: 21px;
  }

  &__item-title {
    color: $color-grey;
    margin-bottom: 5px;
  }

  &__item-data {
    color: $color-blue;
  }

  &__item {
    margin-bottom: 28px;
  }
}
</style>

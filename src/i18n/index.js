import Vue from 'vue'
import en from './lang/en'
import zh from './lang/zh-CN'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'zh',
      iso: 'zh-CN',
      name: 'Chinese'
    }
  ],
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

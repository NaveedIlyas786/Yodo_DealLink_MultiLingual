// src/utils/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import engLanguageOfferPage from '../utils/locales/offerPageSidebar/engLanguageOfferPage.json'
import arabicLanguageOfferPage from '../utils/locales/offerPageSidebar/arabicLangaugeOfferPage.json'

import engLanguageUserPage from '../utils/locales/userPageSidebar/engLanguageUserPage.json'
import arabicLanguageUserPage from '../utils/locales/userPageSidebar/arabicLanguageUserPage.json'

import offersNeedingReviewEnglish from '../utils/locales/offersNeedingReview/offersNeedingReviewEnglish.json'
import offersNeedingReviewArabic from '../utils/locales/offersNeedingReview/offersNeedingReviewArabic.json'

import topPerformingOffersEnglish from '../utils/locales/topPerformingOffers/topPerformingOffersEnglish.json'
import topPerformingOffersArabic from '../utils/locales/topPerformingOffers/topPerformingOffersArabic.json'

import staticDataEnglish from '../utils/locales/staticData/staticDataEnglish.json'
import staticDataArabic from '../utils/locales/staticData/staticDataArabic.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    ns: [
      'admin/offerPage',
      'admin/users',
      'admin/dashboard',
      'user/offerPage',
      'user/users',
      'user/dashboard',
      'static',
    ],
    defaultNS: 'admin/offerPage',
    fallbackNS: 'static',
    resources: {
      en: {
        'admin/offerPage': engLanguageOfferPage,
        'admin/users': engLanguageUserPage,
        'admin/dashboard': offersNeedingReviewEnglish,
        'admin/adminCategory': topPerformingOffersEnglish,
        'user/userOfferPage': engLanguageOfferPage,
        'user/users': engLanguageUserPage,
        'user/dashboard': topPerformingOffersEnglish,
        static: staticDataEnglish,
      },
      ar: {
        'admin/offerPage': arabicLanguageOfferPage,
        'admin/users': arabicLanguageUserPage,
        'admin/dashboard': offersNeedingReviewArabic,
        'user/userOfferPage': arabicLanguageOfferPage,
        'user/users': arabicLanguageUserPage,
        'user/dashboard': topPerformingOffersArabic,
        'admin/adminCategory': topPerformingOffersArabic,
        static: staticDataArabic,
      },
    },
  })

export default i18n

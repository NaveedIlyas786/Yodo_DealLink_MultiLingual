// src/components/LanguageSelector.jsx
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import UAEFlagImg from '../assets/uaeFlag.png'
import UkFlagImg from '../assets/ukFlag.png'

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()
  const [langCode, setLangCode] = useState(i18n.language)

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('langCode', code)
    setLangCode(code)
  }

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  return (
    <div className='overflow-y-auto flex flex-col flex-1 bg-gray-50'>
      <div className='flex gap-[50px]'>
        <div className='flex items-center gap-4'>
          <input
            className='w-5 h-5 cursor-pointer accent-green-600'
            type='radio'
            id='english'
            name='fav_language'
            checked={langCode === 'en'}
            onChange={() => handleLanguageChange('en')}
          />
          <img className='w-[24px] h-[24px]' src={UkFlagImg} alt='UK Flag' />
          <label htmlFor='english'>English</label>
        </div>
        <div className='flex items-center gap-4'>
          <input
            className='w-5 h-5 cursor-pointer accent-green-600'
            type='radio'
            id='arabic'
            name='fav_language'
            checked={langCode === 'ar'}
            onChange={() => handleLanguageChange('ar')}
          />
          <img className='w-[28px] h-[28px]' src={UAEFlagImg} alt='UAE Flag' />
          <label htmlFor='arabic'>{t('Arabic', { ns: 'static' })}</label>
        </div>
      </div>
    </div>
  )
}

export default LanguageSelector

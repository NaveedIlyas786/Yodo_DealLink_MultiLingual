// src/components/AppWithTranslation.jsx
import React, { useState, useEffect } from 'react'
import i18n from '../utils/i18n'
import { App } from '../App'

const AppWithTranslation = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const langCode = localStorage.getItem('langCode') || i18n.language || 'en'
    i18n.changeLanguage(langCode).then(() => {
      document.body.dir = langCode === 'ar' ? 'rtl' : 'ltr'
      setReady(true)
    })
  }, [])

  if (!ready) {
    return <div className='p-10 text-center text-gray-400'>Loading...</div>
  }

  return <App />
}

export default AppWithTranslation

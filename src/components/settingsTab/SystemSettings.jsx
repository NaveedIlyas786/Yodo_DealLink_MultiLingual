import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../LenguageSelector'

const SystemSettings = () => {
  const { t } = useTranslation('static')

  return (
    <div className='flex-1 lg:flex-[0.60] flex flex-col gap-[20px] bg-gray-50 rounded'>
      <div>
        <h1 className='text-xl font-semibold mb-1'>
          {t('Show Notifications')}
        </h1>
        <p className='text-sm text-gray-600 mb-4'>
          {t(
            'Allow to receive push notifications for user activities and logs count.'
          )}
        </p>
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-700'>{t('OFF')}</span>
          <label className='switch'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>
          <span className='text-sm font-medium text-gray-700'>{t('ON')}</span>
        </div>
      </div>

      <div>
        <h1 className='text-xl font-semibold mb-1'>
          {t('2 Factor Authentication')}
        </h1>
        <p className='text-sm text-gray-600 mb-4'>
          {t(
            'Allow to receive push notifications for user activities and logs count.'
          )}
        </p>
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-700'>{t('OFF')}</span>
          <label className='switch'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>
          <span className='text-sm font-medium text-gray-700'>{t('ON')}</span>
        </div>
      </div>

      <div>
        <h1 className='text-xl font-semibold mb-1'>
          {t('Select Your Language')}
        </h1>
        <p className='text-sm text-gray-600 mb-4'>
          {t(
            'Allow to receive push notifications for user activities and logs count.'
          )}
        </p>
        <LanguageSelector />
      </div>
    </div>
  )
}

export default SystemSettings

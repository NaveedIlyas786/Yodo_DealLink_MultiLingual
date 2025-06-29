import * as LucideIcons from 'lucide-react'
const Bell = LucideIcons.Bell
const UserCircle = LucideIcons.UserCircle
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDynamicNamespace } from './useDynamicNameSpace'

const ProfileNotification = () => {
  const ns = useDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback
  // console.log('Current language table:', t.language)

  return (
    <div className='flex justify-between shadow-md bg-white px-[20px] py-[15px]  rounded-xl items-center mb-[20px]'>
      <div>
        <h1 className='text-lg font-semibold'>{t('Hey! Arlene McCoy')}</h1>
        <p className='text-gray-500 text-sm'>
          {t('Here’s an overview of platform activity.')}
        </p>
      </div>
      <div className='flex items-center space-x-4'>
        <Bell className='text-gray-500' />
        <UserCircle className='text-green-600 w-8 h-8' />
      </div>
    </div>
  )
}

export default ProfileNotification

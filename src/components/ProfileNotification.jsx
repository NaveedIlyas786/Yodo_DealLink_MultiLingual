import * as LucideIcons from 'lucide-react'
const Bell = LucideIcons.Bell
const UserCircle = LucideIcons.UserCircle
import React from 'react'
import { useTranslation } from 'react-i18next'
import { UseDynamicNamespace } from './UseDynamicNamespace'
import { useNotification } from '../context/NotificationContext'

const ProfileNotification = () => {
  const ns = UseDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback
  // console.log('Current language table:', t.language)

  const { toggleNotifications } = useNotification()

  return (
    <div className='flex justify-between shadow-md bg-white px-[20px] py-[15px]  rounded-xl items-center mb-[20px]'>
      <div>
        <h1 className='text-lg Helviticaneue'>{t('Hey! Arlene McCoyy')}</h1>
        <p className='text-gray-500 poppins_normal_bold'>
          {t('Here’s an overview of platform activity.')}
        </p>
      </div>
      <div className='flex items-center space-x-4'>
        <Bell
          onClick={toggleNotifications}
          className=' cursor-pointer text-gray-500'
        />
        <UserCircle className='text-green-600 w-8 h-8' />
      </div>
    </div>
  )
}

export default ProfileNotification

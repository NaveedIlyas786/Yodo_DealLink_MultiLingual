import React, { useEffect, useState } from 'react'
import ProfileNotification from '@/components/ProfileNotification'
import ProfileSettings from '@/components/settingsTab/ProfileSettings'
import SystemSettings from '@/components/settingsTab/SystemSettings'
import ChangePassword from '@/components/settingsTab/ChangePassword'
import { useTranslation } from 'react-i18next'
import { useDynamicNamespace } from '@/components/useDynamicNameSpace'
import Notifications from '../../components/settingsTab/Notifications'
import { useNotification } from '@/context/NotificationContext'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profileSetting')
  const { showNotifications } = useNotification()
  const ns = useDynamicNamespace()
  const { t } = useTranslation([ns, 'static'])

  console.log(showNotifications)
  useEffect(() => {
    setActiveTab('profileSetting')
  }, [])

  const handleaActiveTab = (activeSec) => {
    setActiveTab(activeSec)
  }

  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50'>
      <ProfileNotification />

      {showNotifications ? (
        <Notifications />
      ) : (
        <>
          <h1 className='text-lg ml-[40px] kumbh_sans_25 text-black mb-4'>
            {t('Settings')}
          </h1>

          <div className='flex gap-[12px] ml-[40px] flex-wrap'>
            {['profileSetting', 'systemSetting', 'changePasword'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleaActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'bg-[#17642F] text-white kumbh_sans_sami_bold'
                    : 'bg-none text-black hover:bg-[#69bb68] kumbh_sans_normal_bold hover:text-white'
                } border-[1px] border-[#25252526] py-2 px-4 sm:py-[15px] sm:px-[24px] cursor-pointer rounded-full`}
              >
                {t(
                  tab === 'changePasword'
                    ? 'Change Password'
                    : tab === 'systemSetting'
                    ? 'System Settings'
                    : 'Profile Settings'
                )}
              </button>
            ))}
          </div>

          <div className='flex mt-[25px] ml-0 lg:ml-[40px]'>
            {activeTab === 'profileSetting' && <ProfileSettings />}
            {activeTab === 'systemSetting' && <SystemSettings />}
            {activeTab === 'changePasword' && <ChangePassword />}
          </div>
        </>
      )}
    </div>
  )
}

export default Settings

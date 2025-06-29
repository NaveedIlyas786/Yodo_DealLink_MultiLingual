import React, { useEffect, useState } from 'react'
import ProfileNotification from '@/components/ProfileNotification'
import ProfileSettings from '@/components/settingsTab/ProfileSettings'
import SystemSettings from '@/components/settingsTab/SystemSettings'
import ChangePassword from '@/components/settingsTab/ChangePassword'
import { useTranslation } from 'react-i18next'
import { useDynamicNamespace } from '@/components/useDynamicNameSpace'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profileSetting')
  const ns = useDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback

  useEffect(() => {
    setActiveTab('profileSetting')
  }, [])

  const handleaActiveTab = (activeSec) => {
    setActiveTab(activeSec)
  }

  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50'>
      <ProfileNotification />
      <h1 className='text-3xl ml-[40px] font-bold text-black mb-4'>
        {t('Settings')}
      </h1>

      <div className='flex gap-[12px] ml-[40px] flex-wrap'>
        <button
          onClick={() => handleaActiveTab('profileSetting')}
          className={`${
            activeTab === 'profileSetting'
              ? 'bg-[#17642F] text-white'
              : 'bg-none text-black hover:bg-[#69bb68] hover:text-white'
          } border-[1px] border-[#25252526] py-2 px-4 sm:py-[15px] sm:px-[24px] text-sm sm:text-base font-semibold cursor-pointer rounded-full`}
        >
          {t('Profile Settings')}
        </button>
        <button
          onClick={() => handleaActiveTab('systemSetting')}
          className={`${
            activeTab === 'systemSetting'
              ? 'bg-[#17642F] text-white'
              : 'bg-none text-black hover:bg-[#69bb68] hover:text-white'
          } border-[1px] border-[#25252526] py-2 px-4 sm:py-[15px] sm:px-[24px] text-sm sm:text-base font-semibold cursor-pointer rounded-full`}
        >
          {t('System Settings')}
        </button>
        <button
          onClick={() => handleaActiveTab('changePasword')}
          className={`${
            activeTab === 'changePasword'
              ? 'bg-[#17642F] text-white'
              : 'bg-none text-black hover:bg-[#69bb68] hover:text-white'
          } border-[1px] border-[#25252526] py-2 px-4 sm:py-[15px] sm:px-[24px] text-sm sm:text-base font-semibold cursor-pointer rounded-full`}
        >
          {t('Change Password')}
        </button>
      </div>

      <div className='flex mt-[32px] ml-0 lg:ml-[40px]'>
        {activeTab === 'profileSetting' && <ProfileSettings />}
        {activeTab === 'systemSetting' && <SystemSettings />}
        {activeTab === 'changePasword' && <ChangePassword />}
      </div>
    </div>
  )
}

export default Settings

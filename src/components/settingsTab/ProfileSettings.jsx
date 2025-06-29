import React from 'react'
import { Input } from '@/components/ui/input'
import { useTranslation } from 'react-i18next'
const ProfileSettings = () => {
  const { t } = useTranslation()

  return (
    <div className='flex-1 lg:flex-[0.60] flex-col gap-[20px]'>
      <div>
        <label
          className='text-[15px] kumbh_sans_sami_bold my-[14px]'
          htmlFor='businessName'
        >
          {t('Business Name', { ns: 'static' })}
        </label>
        <Input
          className='rounded-full bg-white py-[25px] px-[20px]'
          type='text'
          name='business'
          id='businessName'
        />
      </div>
      <div className='flex gap-[14px] my-[20px]'>
        <div className='w-full'>
          <label
            className='text-[15px] kumbh_sans_sami_bold'
            htmlFor='firstName'
          >
            {t("Owner's First Name", { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white  py-[25px] px-[20px]'
            type='text'
            name='firstName'
            id='firstName'
          />
        </div>
        <div className='w-full'>
          <label
            className='text-[15px] kumbh_sans_sami_bold'
            htmlFor='lastName'
          >
            {t("Owner's Last Name", { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='lastName'
            id='lastName'
          />
        </div>
      </div>
      <div className='flex  gap-[14px] my-[20px]'>
        <div className='w-full'>
          <label className='text-[15px] kumbh_sans_sami_bold' htmlFor='email'>
            {t('Email Address', { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='w-full'>
          <label
            className='text-[15px] kumbh_sans_sami_bold'
            htmlFor='phoneNumber'
          >
            {t('Phone Number', { ns: 'static' })}
          </label>
          <div className='flex items-center rounded-full border border-input bg-background px-4 py-[10px]'>
            <span className='text-gray-500 pr-3 border-r border-gray-300'>
              +92
            </span>
            <input
              type='tel'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='3001234567'
              className='w-full px-3 bg-white outline-none '
            />
          </div>
        </div>
      </div>
      <div className='flex gap-[14px] my-[20px]'>
        <div className='w-full'>
          <label className='text-[15px] kumbh_sans_sami_bold' htmlFor='Pass'>
            {t('Password', { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='password'
            name='Pass'
            id='Pass'
          />
        </div>
        <div className='w-full'>
          <label
            className='text-[15px] kumbh_sans_sami_bold'
            htmlFor='confirmPass'
          >
            {t('Confirm Password', { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='password'
            name='confirmPass'
            id='confirmPass'
          />
        </div>
      </div>
      <button
        className='flex-1 lg:flex-[0.60] mt-[20px] w-full text-white cursor-pointer bg-[#FE7D13] rounded-full py-[20px] px-[20px]'
        type='submit'
      >
        {t('Save Changes', { ns: 'static' })}
      </button>
      {/* <LenguageSelector /> */}
    </div>
  )
}

export default ProfileSettings

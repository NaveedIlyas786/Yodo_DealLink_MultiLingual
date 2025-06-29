import React from 'react'
import { Input } from '../ui/input'
import { useTranslation } from 'react-i18next'
const ChangePassword = () => {
  const { t } = useTranslation()
  return (
    <div className='flex-1 lg:flex-[0.60] flex flex-col gap-[20px]  bg-gray-50 rounded '>
      <div>
        <h1 className='kumbh_sans_25 mb-1'>
          {t('Change Password', { ns: 'static' })}
        </h1>
        <div className='mb-[15px]'>
          <label
            className='text-[15px] kumbh_sans_sami_bold my-[14px]'
            htmlFor='businessName'
          >
            {t('Old Password', { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='business'
            id='businessName'
          />
        </div>
        <div className='mb-[15px]'>
          <label
            className='text-[15px] kumbh_sans_sami_bold my-[14px]'
            htmlFor='businessName'
          >
            {t('New Password', { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='business'
            id='businessName'
          />
        </div>
        <div className='mb-[15px]'>
          <label
            className='text-[15px] kumbh_sans_sami_bold my-[14px]'
            htmlFor='businessName'
          >
            {t('Confirm Password', { ns: 'static' })}
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='business'
            id='businessName'
          />
        </div>
        <button
          className='flex-1 lg:flex-[0.60] mt-[15px] w-full text-white cursor-pointer bg-[#FE7D13] rounded-full py-[20px] px-[20px]'
          type='submit'
        >
          {t('Save Changes', { ns: 'static' })}
        </button>
      </div>
    </div>
  )
}

export default ChangePassword

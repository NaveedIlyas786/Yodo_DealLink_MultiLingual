import React from 'react'
import arrowleft from '../../assets/arrow_left.png'
import { useTranslation } from 'react-i18next'
const CreateOfferForm = ({ goBack }) => {
  const { t } = useTranslation()
  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px]'>
      <button
        onClick={goBack}
        className={`text-orange-500 flex gap-[5px] mb-4 text-left cursor-pointer`}
      >
        <img src={arrowleft} className='w-6 h-6' alt='back Arrow' />{' '}
        <span>{t('Create New Offer', { ns: 'static' })} </span>
      </button>

      <form className=' rounded-2xl p-6 space-y-6 w-full'>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              {t('Offer Title', { ns: 'static' })}
            </label>
            <input
              type='text'
              placeholder='e.g. "50% Off on Facial"'
              className='w-full border bg-white border-gray-300 rounded-full px-4 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                {t('Category', { ns: 'static' })}
              </label>
              <div className='relative w-full'>
                <select className='w-full border bg-white border-gray-300 rounded-full px-4 p-2 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400'>
                  <option>{t('Select Category', { ns: 'static' })}</option>
                  <option>{t('Beauty', { ns: 'static' })}</option>
                  <option>{t('Health', { ns: 'static' })}</option>
                  <option>{t('Fitness', { ns: 'static' })}</option>
                </select>

                {/* Custom dropdown icon */}
                <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M19 9l-7 7-7-7' />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                {t('SKU ID', { ns: 'static' })}
              </label>
              <input
                type='text'
                placeholder='Enter SKU Id"'
                className='w-full border bg-white border-gray-300 rounded-full px-4 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                {t('Short Description', { ns: 'static' })}
              </label>
              <input
                type='text'
                placeholder='Enter Short Description'
                className='w-full border bg-white border-gray-300 rounded-full px-4 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              {t('Full Description', { ns: 'static' })}
            </label>
            <textarea
              rows='4'
              placeholder='Type description'
              className='w-full border bg-white border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
            ></textarea>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-lg font-semibold text-gray-800'>
            {t('Pricing & Redemption', { ns: 'static' })}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                {t('Original Price', { ns: 'static' })}
              </label>
              <input
                type='number'
                placeholder='e.g. Rs. 1800'
                className='w-full border bg-white border-gray-300 rounded-full px-4 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                {t('Discounted Price', { ns: 'static' })}
              </label>
              <input
                type='number'
                placeholder='e.g. Rs. 899'
                className='w-full border bg-white border-gray-300 rounded-full px-4 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
          <button
            type='button'
            className='flex-1 border-1 border-black text-gray-700 py-2 rounded-full px-4 hover:bg-gray-100'
          >
            {t('Save as Draft', { ns: 'static' })}
          </button>
          <button
            type='submit'
            className='flex-1 bg-orange-500 text-white py-2 rounded-full px-4 hover:bg-orange-600'
          >
            {t('Publish Now', { ns: 'static' })}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateOfferForm

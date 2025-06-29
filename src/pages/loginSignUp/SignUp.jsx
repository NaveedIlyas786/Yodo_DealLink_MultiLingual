import React from 'react'
import loginLeft from '../../assets/loginLeft.png'
import loginRight from '../../assets/loginRight.png'
import dealLinkLogo from '../../assets/dealLinkLogo.png'
const SignUp = () => {
  return (
    <div className='relative min-h-screen  md:px-[49px]  py-[29px] bg-gray-50 flex items-center justify-center '>
      {/* Left Background Image */}
      <img
        src={loginLeft}
        alt='Decor Left'
        className='hidden md:block max-w-[424px] max-h-[315px]  absolute -left-[10px] bottom-0 h-full  object-contain pointer-events-none z-0'
      />

      {/* Right Background Image */}
      <img
        src={loginRight}
        alt='img'
        className='hidden md:block max-w-[424px] max-h-[315px] absolute -right-[10px] top-0 h-full w-auto object-contain pointer-events-none z-0'
      />

      {/* Form Container */}
      <div className='relative z-10 max-w-2xl min-h-[90vh] bg-white min-w-[80%] lg:min-w-[49.86%] shadow-lg px-[30px] lg:px-[49px] py-[30px] rounded-2xl '>
        {/* Logo */}
        <div className='flex justify-center mb-[5px]'>
          <img src={dealLinkLogo} alt='DealLink' className='h-10' />
        </div>

        <h2 className='text-center kumbh_sana_bold text-gray-800 mb-[15px]'>
          Create your Account
        </h2>

        <form className='flex flex-col gap-[15px]'>
          <div>
            <label className='block kumbh_sana_sami_bold text-gray-700'>
              Business Name
            </label>
            <input
              type='text'
              placeholder='e.g., Glow Beauty Salon'
              className='w-full mt-[14px] px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='flex flex-col md:flex-row gap-[15px]'>
            <div className='flex-1'>
              <label className='block kumbh_sana_sami_bold text-gray-700'>
                Owner's First Name
              </label>
              <input
                type='text'
                placeholder='Enter your first name'
                className='w-full mt-1 px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
            <div className='flex-1'>
              <label className='block kumbh_sana_sami_bold text-gray-700'>
                Owner's Last Name
              </label>
              <input
                type='text'
                placeholder='Enter your last name'
                className='w-full mt-1 px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[15px]'>
            <div className='flex-1'>
              <label className='block kumbh_sana_sami_bold text-gray-700'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full mt-1 px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
            <div className='flex-1'>
              <label className='block kumbh_sana_sami_bold text-gray-700'>
                Phone Number
              </label>
              <div className='flex items-center rounded-xl border border-input bg-background px-4 mt-1 py-[8px]'>
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

          <div className='flex flex-col md:flex-row gap-[15px]'>
            <div className='flex-1'>
              <label className='block kumbh_sana_sami_bold text-gray-700'>
                Password
              </label>
              <input
                type='password'
                placeholder='********'
                autoComplete='current-password' // ✅ Fixes browser autofill warning
                className='w-full mt-1 px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
            <div className='flex-1'>
              <label className='block kumbh_sana_sami_bold text-gray-700'>
                Confirm Password
              </label>
              <input
                type='password'
                placeholder='********'
                autoComplete='current-password' // ✅ Fixes browser autofill warning
                className='w-full mt-1 px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>

          {/* Terms and Buttons */}
          <div className='flex items-center mt-[5px]'>
            <input
              type='checkbox'
              id='terms'
              className='mr-2 w-4 h-4 text-orange-600'
            />
            <label htmlFor='terms' className='text-sm text-gray-700'>
              I agree to DealLink{' '}
              <a href='/' className='text-orange-400 underline'>
                Terms & Conditions
              </a>
            </label>
          </div>

          <div className='flex justify-between items-center mt-[5px] gap-[16px]'>
            <button
              type='button'
              className='bg-[#2525251A] text-[#252525] px-6 py-[7px] rounded-full cursor-not-allowed'
            >
              Back
            </button>
            <button
              type='submit'
              className='bg-gradient-to-r flex-1 cursor-pointer from-orange-400 to-orange-500 text-white px-8 py-[7px] rounded-full shadow hover:from-orange-500 hover:to-orange-600 transition'
            >
              Save & Continue
            </button>
          </div>

          <p className='text-sm text-center text-gray-600 mt-[5px]'>
            If you are already a member, please{' '}
            <a href='/' className='text-orange-400 underline'>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp

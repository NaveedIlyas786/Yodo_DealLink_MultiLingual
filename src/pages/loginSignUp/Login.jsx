import React from 'react'
import loginLeft from '../../assets/loginLeft.png'
import loginRight from '../../assets/loginRight.png'
import dealLinkLogo from '../../assets/dealLinkLogo.png'
const Login = () => {
  return (
    <div className='relative min-h-screen  md:px-[49px]  py-[29px] bg-gray-50 flex items-center justify-center '>
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

        <h2 className='text-center kumbh_sans_bold text-gray-800 mb-[30px]'>
          Login to your Account
        </h2>

        <form className='flex flex-col gap-[20px]'>
          <div className='flex-1'>
            <label className='block kumbh_sans_sami_bold  text-[#323232]'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='Enter your Email'
              className='w-full mt-1 px-4 Inter_normal py-[19px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='flex flex-col md:flex-row gap-[20px]'>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                Password
              </label>
              <input
                type='password'
                placeholder='********'
                autoComplete='current-password' // ✅ Fixes browser autofill warning
                className='w-full mt-1 px-4 Inter_normal py-[19px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>

          {/* Terms and Buttons */}
          <div className='flex items-center justify-between -mt-[5px]'>
            <div className='flex gap-[10px] items-center justify-around'>
              <input
                type='checkbox'
                id='terms'
                className='mr-2 w-4 h-4 text-orange-600'
              />
              <span className='Inter_normal_bold'>Remember me</span>
            </div>
            <label
              htmlFor='terms'
              className='text-sm Inter_normal_bold text-[#323232]'
            >
              <a href='#' className='text-[#0069C1]'>
                Forgot Password
              </a>
            </label>
          </div>

          <div className='flex justify-between items-center mt-[15px]'>
            <button
              type='submit'
              className='bg-gradient-to-r w-full poppins_normal_bold cursor-pointer from-orange-400 to-orange-500 text-white px-8 py-[19px] rounded-full shadow hover:from-orange-500 hover:to-orange-600 transition'
            >
              Login
            </button>
          </div>

          <p className='text-sm text-center text-gray-600 mt-[15px]'>
            Don't have an account?
            <a href='/register' className='text-orange-400 ml-2 '>
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

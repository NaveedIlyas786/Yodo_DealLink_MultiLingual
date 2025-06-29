import React from 'react'
import loginLeft from '../../assets/loginLeft.png'
import loginRight from '../../assets/loginRight.png'
import dealLinkLogo from '../../assets/dealLinkLogo.png'
const ForgotPassword = () => {
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
        <div className='flex justify-center mb-[70px]'>
          <img src={dealLinkLogo} alt='DealLink' className='h-10' />
        </div>
        <h2 className='text-center text-2xl font-bold text-gray-800 mb-[30px]'>
          Forget Password
        </h2>
        <form className='flex flex-col gap-[20px]'>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='Enter your Email'
              className='w-full mt-1 px-4 py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <button
            type='submit'
            className='bg-gradient-to-r w-full mt-[15px] cursor-pointer from-orange-400 to-orange-500 text-white px-8 py-[7px] rounded-full shadow hover:from-orange-500 hover:to-orange-600 transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword

import React from 'react'
import loginLeft from '../../assets/loginLeft.png'
import loginRight from '../../assets/loginRight.png'
import dealLinkLogo from '../../assets/dealLinkLogo.png'
const EmailVerifcationCodePage = () => {
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
        <h2 className='text-center text-2xl font-bold text-gray-800 mb-[20px]'>
          Please check Your email
        </h2>
        <p className='text-center text-[16px] text-[#252525] mb-[50px]'>
          We've just sent a password reset email to your inbox.
        </p>
        <form className='flex flex-col gap-[20px]'>
          <div className='flex-1'>
            <p className='text-center text-[16px] text-[#252525] mb-[22px]'>
              Enter your verification code
            </p>
            <div className='flex items-center gap-[8px] justify-center'>
              <div className='rounded-xl grid place-items-center text-[25px] border-2 border-gray-600 w-[55px] h-[55px]'>
                1
              </div>
              <div className='rounded-xl grid place-items-center text-[25px] border-2 border-gray-600 w-[55px] h-[55px]'>
                2
              </div>
              <div className='rounded-xl grid place-items-center text-[25px] border-2 border-gray-600 w-[55px] h-[55px]'>
                3
              </div>
              <div className='rounded-xl grid place-items-center text-[25px] border-2 border-gray-600 w-[55px] h-[55px]'>
                4
              </div>
              <div className='rounded-xl grid place-items-center text-[25px] border-2 border-gray-600 w-[55px] h-[55px]'>
                5
              </div>
              <div className='rounded-xl grid place-items-center text-[25px] border-2 border-gray-600 w-[55px] h-[55px]'>
                6
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='bg-gradient-to-r w-full mt-[40px] cursor-pointer from-orange-400 to-orange-500 text-white px-8 py-[7px] rounded-full shadow hover:from-orange-500 hover:to-orange-600 transition'
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmailVerifcationCodePage

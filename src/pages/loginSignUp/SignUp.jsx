import React, { useContext } from 'react'
import loginLeft from '../../assets/loginLeft.png'
import loginRight from '../../assets/loginRight.png'
import dealLinkLogo from '../../assets/dealLinkLogo.png'
import { UseDynamicNamespace } from '../../components/useDynamicNamespace'
import { useTranslation } from 'react-i18next'
import { AppContext } from '../../context/AppContext'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
const SignUp = () => {
  const ns = UseDynamicNamespace()
  const { t } = useTranslation([ns, 'static'])
  const { backendUrl, setIsLoggedin } = useContext(AppContext)

  const schema = z.object({
    businessName: z.string().min(1, 'Business Name is required'),
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid Email'),
    pass: z.string().min(5, 'Password should at least 5 characters'),
    confirmPass: z.string().min(5, 'Password should at least 5 characters'),
    phone: z
      .string()
      .trim()
      .regex(
        /^\d{10,}$/,
        'Phone number must be at least 10 digits and only numbers'
      ),
  })

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  // console.log(watch('phone'))

  // console.log('backendUrl: ', backendUrl)
  const handleSubmitRegister = async (data) => {
    try {
      const response = await axios.post('YOUR_BACKEND_URL_HERE', data)
      console.log('Response:', response.data)
    } catch (error) {
      console.error('Error during registration:', error)
    }

    console.log('Ready Data: ', data)
  }

  const OnSubmitHandler = (data, e) => {
    try {
      e.preventDefault()
      axios.defaults.withCredentials = true // it is used to send the cookies-crendtial with the request also
      const response = axios.post(backendUrl + '/api/auth/register', data)
      if (response.success) {
        setIsLoggedin(true)
        navigate('/')
      } else {
        alert(response.message)
      }
    } catch (error) {
      alert(response.message)
    }
  }

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

        <h2 className='text-center kumbh_sans_bold text-gray-800 mb-[15px]'>
          {t('Create your Account')}
        </h2>

        <form
          onSubmit={handleSubmit(handleSubmitRegister)}
          className='flex flex-col gap-[15px]'
        >
          <div>
            <label className='block kumbh_sans_sami_bold  text-[#323232]'>
              {t('Business Name')}
            </label>
            <input
              type='text'
              {...register('businessName', { required: true })}
              placeholder='e.g., Glow Beauty Salon'
              className='w-full mt-[14px] px-4 py-[7px] Inter_normal border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
            {errors.businessName && (
              <div style={{ color: 'red' }}>{errors.businessName.message}</div>
            )}
          </div>

          <div className='flex flex-col md:flex-row gap-[15px]'>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                {t("Owner's First Name")}
              </label>
              <input
                type='text'
                {...register('firstName', { required: true })}
                placeholder='Enter your first name'
                className='w-full mt-1 px-4 Inter_normal py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
              {errors.firstName && (
                <div style={{ color: 'red' }}>{errors.firstName.message}</div>
              )}
            </div>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                {t("Owner's Last Name")}
              </label>
              <input
                type='text'
                {...register('lastName', { required: true })}
                placeholder='Enter your last name'
                className='w-full mt-1 px-4 Inter_normal py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
              {errors.lastName && (
                <div style={{ color: 'red' }}>{errors.lastName.message}</div>
              )}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[15px]'>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                {t('Email Address')}
              </label>
              <input
                type='email'
                {...register('email', { required: true })}
                placeholder='Enter your email address'
                className='w-full mt-1 px-4 Inter_normal py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
              {errors.email && (
                <div style={{ color: 'red' }}>{errors.email.message}</div>
              )}
            </div>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                {t('Phone Number')}
              </label>
              <div className='flex items-center rounded-xl border border-input bg-background px-4 mt-1 py-[8px]'>
                <span className='text-gray-500 pr-3 border-r border-gray-300'>
                  +92
                </span>
                <input
                  type='tel'
                  {...register('phone', { required: true })}
                  id='phoneNumber'
                  placeholder='3001234567'
                  className='w-full px-3 Inter_normal bg-white outline-none '
                />
              </div>
              {errors.phone && (
                <div style={{ color: 'red' }}>{errors.phone.message}</div>
              )}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-[15px]'>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                {t('Password')}
              </label>
              <input
                type='password'
                {...register('pass', { required: true })}
                placeholder='********'
                autoComplete='current-password' // ✅ Fixes browser autofill warning
                className='w-full mt-1 px-4 Inter_normal py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
              {errors.pass && (
                <div style={{ color: 'red' }}>{errors.pass.message}</div>
              )}
            </div>
            <div className='flex-1'>
              <label className='block kumbh_sans_sami_bold  text-[#323232]'>
                {t('Confirm Password')}
              </label>
              <input
                type='password'
                {...register('confirmPass', { required: true })}
                placeholder='********'
                autoComplete='current-password' // ✅ Fixes browser autofill warning
                className='w-full mt-1 px-4 Inter_normal py-[7px] border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
              {errors.confirmPass && (
                <div style={{ color: 'red' }}>{errors.confirmPass.message}</div>
              )}
            </div>
          </div>

          {/* Terms and Buttons */}
          <div className='flex items-center mt-[2px]'>
            <input
              type='checkbox'
              id='terms'
              className='mx-2 w-4 h-4 text-orange-600'
            />
            <label
              htmlFor='terms'
              className='text-sm Inter_normal_bold text-gray-700'
            >
              {t('I agree to DealLink')}
              <a href='/' className='text-orange-400 mx-2 underline'>
                {t('Terms & Conditions')}
              </a>
            </label>
          </div>

          <div className='flex justify-between items-center mt-[5px] gap-[16px]'>
            <button
              type='button'
              className='bg-[#2525251A] text-[#252525] px-6 py-[10px] rounded-full cursor-not-allowed'
            >
              {t('Back')}
            </button>
            <button
              type='submit'
              className='bg-gradient-to-r flex-1 poppins_normal_bold cursor-pointer from-orange-400 to-orange-500 text-white px-8 py-[10px] rounded-full shadow hover:from-orange-500 hover:to-orange-600 transition'
            >
              {t('Save & Continue')}
            </button>
          </div>

          <p className='text-sm text-center text-gray-600 mt-[2px]'>
            {t('If you are already a member, please')}
            <a href='/' className='text-orange-400 mx-2 underline'>
              {t('Login')}
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp

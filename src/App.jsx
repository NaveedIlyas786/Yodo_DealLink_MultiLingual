// App.jsx or App.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignUp from './pages/loginSignUp/SignUp'
import Login from './pages/loginSignUp/Login'
import ForgotPassword from './pages/loginSignUp/ForgotPassword'
import NewPasswordCreationPage from './pages/loginSignUp/NewPasswordCreationPage'
import EmailVerifcationCodePage from './pages/loginSignUp/EmailVerifcationCodePage'
import './App.css'

export const App = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 overflow-y-auto bg-gray-50 px-[15px]'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route
            path='/newPasswordCreationPage'
            element={<NewPasswordCreationPage />}
          />
          <Route
            path='/emailVerifcationCodePage'
            element={<EmailVerifcationCodePage />}
          />
        </Routes>
      </div>
    </div>
  )
}

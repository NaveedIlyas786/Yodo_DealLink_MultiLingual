import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

// Components (can be loaded eagerly if small)
import Sidebar from './components/Sidebar'
const NotFoundPage = lazy(() => import('./components/NotFoundPage'))

// Public Pages
const SignUp = lazy(() => import('./pages/loginSignUp/SignUp'))
const Login = lazy(() => import('./pages/loginSignUp/Login'))
const ForgotPassword = lazy(() => import('./pages/loginSignUp/ForgotPassword'))
const NewPasswordCreationPage = lazy(() =>
  import('./pages/loginSignUp/NewPasswordCreationPage')
)
const EmailVerifcationCodePage = lazy(() =>
  import('./pages/loginSignUp/EmailVerifcationCodePage')
)

// Shared User/Admin Pages
const Settings = lazy(() => import('./pages/allUserRolesAccess/Settings'))
const PaymentsPage = lazy(() =>
  import('./pages/allUserRolesAccess/PaymentsPage')
)
const CouponsPage = lazy(() => import('./pages/allUserRolesAccess/CouponsPage'))

// Admin Pages
const AdminDashboard = lazy(() => import('./pages/adminSection/AdminDashboard'))
const AdminOfferPage = lazy(() => import('./pages/adminSection/AdminOfferPage'))
const AdminCatgeoryPage = lazy(() =>
  import('./pages/adminSection/AdminCatgeoryPage')
)
const Users = lazy(() => import('./pages/adminSection/Users'))

// User Pages
const UserDashboard = lazy(() => import('./pages/userSection/UserDashboard'))
const UserOfferPage = lazy(() => import('./pages/userSection/UserOfferPage'))

export const App = () => {
  const location = useLocation()
  const role = location.pathname.split('/')[1]

  const noSidebarRoutes = [
    '*',
    '/',
    '/register',
    '/forgotPassword',
    '/newPasswordCreationPage',
    '/emailVerifcationCodePage',
  ]

  const isSidebarVisible = !noSidebarRoutes.includes(location.pathname)

  return (
    <div className='flex h-screen'>
      {isSidebarVisible && (role === 'admin' || role === 'user') && (
        <Sidebar role={role} />
      )}
      <div className='flex-1 overflow-y-auto bg-gray-50 px-[15px]'>
        <Suspense fallback={<div className='p-4'>Loading...</div>}>
          <Routes>
            {/* Public routes */}
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

            {/* Admin routes */}
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/offerPage' element={<AdminOfferPage />} />
            <Route
              path='/admin/adminCategory'
              element={<AdminCatgeoryPage />}
            />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/settings' element={<Settings />} />
            <Route path='/admin/payments' element={<PaymentsPage />} />
            <Route path='/admin/Coupons' element={<CouponsPage />} />

            {/* User routes */}
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/user/userOfferPage' element={<UserOfferPage />} />
            <Route path='/user/settings' element={<Settings />} />
            <Route path='/user/payments' element={<PaymentsPage />} />
            <Route path='/user/Coupons' element={<CouponsPage />} />

            {/* Catch-all */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

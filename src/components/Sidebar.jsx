import * as LucideIcons from 'lucide-react'

const ArrowLeft = LucideIcons.ArrowLeft
const BadgePercent = LucideIcons.BadgePercent
const CreditCard = LucideIcons.CreditCard
const Layers = LucideIcons.Layers
const LayoutDashboard = LucideIcons.LayoutDashboard
const LogOut = LucideIcons.LogOut
const Settings = LucideIcons.Settings
const Ticket = LucideIcons.Ticket
const User = LucideIcons.User

import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppIcon from '../assets/app_icon.png'
import dealLinkArbicName from '../assets/dealLinkArbicName.svg'
import dealLinkEnglishName from '../assets/dealLinkEnglishName.svg'
import { useSidebar } from './SidebarContext'
import i18n from '../utils/i18n'
import { useTranslation } from 'react-i18next'

const Sidebar = ({ role }) => {
  const { openSidebar, setOpenSidebar } = useSidebar()
  const location = useLocation()
  const currentLang = i18n.language
  const { t } = useTranslation()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) setOpenSidebar(false)
      else setOpenSidebar(true)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Utility function to determine if the route is active
  const isActive = (path) => location.pathname === path
  // console.log('isActive: ', isActive)

  return (
    <div
      className={`sidebar relative top-0 left-0 z-50 flex flex-col ${
        openSidebar ? 'w-[266px]' : 'w-[80px]'
      } p-4 h-screen bg-white shadow-md transition-all duration-300`}
    >
      {/* Toggle Button */}
      {currentLang === 'ar' ? (
        <button
          className={`absolute top-[50px] ${
            openSidebar ? 'right-[240px]' : 'right-[60px]'
          } z-10 p-2 cursor-pointer border-2 border-orange-500 bg-[#f6f5f5] rounded-full transition-transform duration-300 ${
            openSidebar ? 'rotate-180' : ''
          }`}
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <ArrowLeft className='w-5 h-5 text-[#FE7D13]' />
        </button>
      ) : (
        <button
          className={`absolute top-[50px] -right-3 z-10 p-2 cursor-pointer border-2 border-orange-500 bg-[#f6f5f5] rounded-full transition-transform duration-300 ${
            openSidebar ? '' : 'rotate-180'
          }`}
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <ArrowLeft className='w-5 h-5 text-[#FE7D13]' />
        </button>
      )}

      {/* Logo */}
      <Link
        to='/'
        className='flex items-center gap-2 ml-3 text-[#FE7D13] text-[22px] font-bold'
      >
        <img src={AppIcon} className='w-[38px]' alt='AppIcon' />
        {openSidebar && (
          <img
            src={currentLang === 'ar' ? dealLinkArbicName : dealLinkEnglishName}
            alt='Deal Link'
          />
        )}
      </Link>

      {/* Nav Items */}
      {/* {role === 'admin' && ( */}
      <ul className='flex flex-col space-y-2 mt-10'>
        <li>
          <Link
            to={`/${role}/dashboard`}
            className={`flex items-center gap-2 transition ${
              isActive(`/${role}/dashboard`)
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <LayoutDashboard className='w-7 h-5' />
            {openSidebar && (
              <span className='text-[16px]'>
                {t(`Dashboard`, { ns: 'static' })}
              </span>
            )}
          </Link>
        </li>

        {/* Only show this to admin */}
        {role === 'admin' && (
          <>
            <li>
              <Link
                to={`/${role}/offerPage`}
                className={`flex items-center Inter_bold gap-2 transition ${
                  isActive(`/${role}/offerPage`) ||
                  isActive(`/${role}/offerPage/createnewOffer`)
                    ? 'bg-[#17642f] text-[#ffffff] font-bold'
                    : 'text-gray-700 hover:text-[#FE7D13]'
                }`}
              >
                <BadgePercent className='w-7 h-5' />
                {openSidebar && (
                  <span className='text-[16px]'>
                    {t(`Offers`, { ns: 'static' })}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                to={`/${role}/adminCategory`}
                className={`flex items-center Inter_bold gap-2 transition ${
                  isActive(`/${role}/adminCategory`) ||
                  isActive(`/${role}/adminCategory/createNewCategory`)
                    ? 'bg-[#17642f] text-[#ffffff] font-bold'
                    : 'text-gray-700 hover:text-[#FE7D13]'
                }`}
              >
                <Layers className='w-7 h-5' />

                {openSidebar && (
                  <span className='text-[16px]'>
                    {t(`Category`, { ns: 'static' })}
                  </span>
                )}
              </Link>
            </li>

            <li>
              <Link
                to={`/${role}/users`}
                className={`flex items-center Inter_bold gap-2 transition ${
                  isActive(`/${role}/users`)
                    ? 'bg-[#17642f] text-[#ffffff] font-bold'
                    : 'text-gray-700 hover:text-[#FE7D13]'
                }`}
              >
                <User className='w-7 h-5' />
                {openSidebar && (
                  <span className='text-[16px]'>
                    {t(`Users`, { ns: 'static' })}
                  </span>
                )}
              </Link>
            </li>
          </>
        )}
        {/* Only show this user */}
        {role === 'user' && (
          <>
            <li>
              <Link
                to={`/${role}/userOfferPage`}
                className={`flex items-center Inter_bold gap-2 transition ${
                  isActive(`/${role}/userOfferPage`) ||
                  isActive(`/${role}/userOfferPage/createnewOffer`)
                    ? 'bg-[#17642F] text-[#ffffff] font-bold'
                    : 'text-gray-700  hover:text-[#FE7D13]'
                }`}
              >
                <BadgePercent className='w-7 h-5' />
                {openSidebar && (
                  <span className='text-[16px]'>
                    {t(`My Offers`, { ns: 'static' })}
                  </span>
                )}
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            to={`/${role}/Coupons`}
            className={`flex items-center Inter_bold gap-2 transition ${
              isActive(`/${role}/Coupons`)
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <Ticket className='w-7 h-5' />
            {openSidebar && (
              <span className='text-[16px]'>
                {t(`Coupons`, { ns: 'static' })}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to={`/${role}/payments`}
            className={`flex items-center Inter_bold gap-2 transition ${
              isActive(`/${role}/payments`)
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <CreditCard className='w-7 h-5' />
            {openSidebar && (
              <span className='text-[16px]'>
                {t(`Payments`, { ns: 'static' })}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to={`/${role}/settings`}
            className={`flex items-center Inter_bold  gap-2 transition ${
              isActive(`/${role}/settings`)
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <Settings className='w-7 h-5' />
            {openSidebar && (
              <span className='text-[16px]'>
                {t(`Settings`, { ns: 'static' })}
              </span>
            )}
          </Link>
        </li>
      </ul>
      {/* )} */}

      {/* Logout Button */}

      <div
        className={`absolute bottom-4 left-3 cursor-pointer Inter_bold ${
          openSidebar ? 'p-4' : 'p-2'
        } right-5 flex items-center gap-2  bg-[#A600001A] text-[#A60000] rounded-[10px] hover:bg-[#A600001A] transition`}
      >
        <LogOut size={openSidebar ? 30 : 30} />

        {openSidebar && (
          <span className='font-bold'> {t(`Logout`, { ns: 'static' })}</span>
        )}
      </div>
    </div>
  )
}

export default Sidebar

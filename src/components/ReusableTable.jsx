import i18n from '@/utils/i18n'
import * as LucideIcons from 'lucide-react'

const Pencil = LucideIcons.Pencil
const Repeat = LucideIcons.Repeat
const Trash2 = LucideIcons.Trash2

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDynamicNamespace } from './useDynamicNamespace'

const ReusableTable = ({ headers, data, statusColors, showActions = true }) => {
  const ns = useDynamicNamespace() // ✅ use the namespace from the URL
  const { t } = useTranslation([ns, 'static']) // ✅ load both main + fallback
  const currentLang = i18n.language
  // console.log('currentLang: ', currentLang)
  const [activeRowId, setActiveRowId] = useState(null)
  const actionRef = useRef(null)

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (actionRef.current && !actionRef.current.contains(event.target)) {
        setActiveRowId(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleActionsTab = (id) => {
    setActiveRowId((prevId) => (prevId === id ? null : id))
  }

  const handleAction = (action, id) => {
    console.log(`Action: ${action}, ID: ${id}`)
    setActiveRowId(id)
  }
  // console.log('activeRowId: ', activeRowId)

  return (
    <div className='overflow-auto'>
      <table className='min-w-full text-sm'>
        <thead className='bg-gray-100 '>
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className={` ${
                  currentLang === 'ar' ? 'text-right' : 'text-left'
                } px-4 py-4`}
              >
                {t(header.label)}
              </th>
            ))}

            {showActions && (
              <th
                className={`${
                  currentLang === 'ar' ? 'text-right' : 'text-left'
                } px-4 py-4`}
              >
                {t('Actions')}
              </th>
            )}
          </tr>
        </thead>
        <tbody className='relative'>
          {data.map((row) => (
            <tr key={row.id} className='border-b'>
              {headers.map((header) => (
                <td
                  key={header.key}
                  className={` kumbh_sans_normal_bold ${
                    currentLang === 'ar' ? 'text-right' : 'text-left'
                  } px-4 py-4`}
                >
                  {header.key === 'status' ? (
                    <span
                      className={` kumbh_sans_normal_bold px-2 py-1 rounded text-xs font-medium ${
                        statusColors?.[row.status] ?? ''
                      }`}
                    >
                      {t(`statuses.${row.status}`, row.status)}
                    </span>
                  ) : header.key === 'offerName' ? (
                    t(`offerNames.${row.offerName}`, row.offerName)
                  ) : header.key === 'offerTitle' ? (
                    t(`offerTitles.${row.offerTitle}`, row.offerTitle)
                  ) : header.key === 'merchant' ? (
                    t(`merchants.${row.merchant}`, row.merchant)
                  ) : header.key === 'category' ? (
                    t(`categories.${row.category}`, row.category)
                  ) : header.key === 'role' ? (
                    t(`roles.${row.role}`, row.role)
                  ) : (
                    row[header.key]
                  )}
                </td>
              ))}

              {/* Actions */}
              {showActions && (
                <td
                  className={`${
                    currentLang === 'ar' ? 'text-right' : 'text-left'
                  } px-4 `}
                >
                  <div className='relative inline-block' ref={actionRef}>
                    <button
                      onClick={() => toggleActionsTab(row.id)}
                      className={`text-gray-600 cursor-pointer  text-[20px] ${
                        currentLang === 'ar' ? 'text-right' : 'text-left'
                      } px-4 `}
                    >
                      ...
                    </button>

                    {activeRowId === row.id && (
                      <div
                        className={`absolute z-10 bg-white shadow-lg rounded-lg py-2 w-36 top-6 ${
                          currentLang === 'ar' ? 'left-0' : 'right-0'
                        } `}
                      >
                        <div
                          className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleAction('Delete', row.id)}
                        >
                          <Trash2 className='w-4 h-4 text-orange-500' />
                          <span className='text-sm text-black'>
                            {t('actions.delete')}
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleAction('Edit', row.id)}
                        >
                          <Pencil className='w-4 h-4 text-orange-500' />
                          <span className='text-sm text-black'>
                            {t('actions.edit')}
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleAction('Repost', row.id)}
                        >
                          <Repeat className='w-4 h-4 text-orange-500' />
                          <span className='text-sm text-black'>
                            {t('actions.repost')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReusableTable

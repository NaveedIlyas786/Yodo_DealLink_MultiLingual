import React from 'react'

const ToggleSwitch = ({ label = '', enabled, setEnabled }) => {
  return (
    <div className='flex items-center gap-4'>
      {label && <span className='text-gray-700 font-medium'>{label}</span>}
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          enabled ? 'bg-green-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            enabled ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}

export default ToggleSwitch

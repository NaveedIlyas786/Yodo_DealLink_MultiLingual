import React from 'react'

const FilterSidebar = ({
  filters,
  setFilters,
  applyFilters,
  closeFilter,
  filterOptions = [],
}) => {
  const updateFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type]?.includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...(prev[type] || []), value],
    }))
  }

  return (
    <div className='absolute top-20 right-8 bg-white shadow-md rounded-xl p-4 w-64 z-50'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-semibold text-lg'>Filter</h2>
        <button onClick={closeFilter}>&times;</button>
      </div>

      {filterOptions.map(({ label, key, options }) => (
        <div key={key} className='mb-4'>
          <div className='text-sm text-gray-500 mb-1'>{label}</div>
          {options.map((option) => (
            <div key={option} className='mb-1'>
              <label className='inline-flex items-center space-x-2'>
                <input
                  type='checkbox'
                  className='form-checkbox'
                  checked={filters[key]?.includes(option) || false}
                  onChange={() => updateFilter(key, option)}
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={applyFilters}
        className='mt-4 w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full'
      >
        Apply Now
      </button>
    </div>
  )
}

export default FilterSidebar

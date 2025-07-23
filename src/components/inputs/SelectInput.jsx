import React from 'react'

function SelectInput({ label, name, value, onChange, options = [], required = false }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block font-semibold"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
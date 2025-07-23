import React from 'react'

function TextAreaInput({ label, name, value, onChange, required = false }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block font-semibold"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  )
}

export default TextAreaInput
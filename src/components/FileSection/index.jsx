import React from 'react'

const index = ({ id, label, onChange }) => {
  return (
    <div className="mb-2 flex justify-between">
      <label htmlFor={id} className="form-label text-sm">{label}</label>
      <input 
        type="file" 
        className="w-1/2 h-8 px-3 rounded-lg my-2 text-sm"
        id={id}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default index
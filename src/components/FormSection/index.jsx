import React from 'react'

const Index = ({type, id, placeholder, label, onChange, value}) => {
  return (
    <div className="my-2 flex justify-between">
      <label htmlFor={id} className="form-label text-sm">{label}</label>
      <input 
        type={type} 
        className="w-1/2 h-8 px-3 rounded-lg border text-sm"
        id={id} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  )
}

export default Index
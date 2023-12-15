import React from 'react'

const index = ({type, id, placeholder, label, onChange}) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="form-label">{label}</label>
      <input 
        type={type} 
        className="w-full h-10 px-3 rounded-lg"
        aria-describedby="inputGroupPrepend"
        id={id} 
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default index
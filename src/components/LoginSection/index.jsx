"use client"
import React from 'react'

const Index = ({id, placeholder, label, onChange}) => {

    return (
        <div className="mb-2">
            <label htmlFor={id} className="form-label text-secondary font-semibold">{label}</label>
            <div className="relative items-center">
                <input 
                    type="text"
                    className="w-full h-10 px-3 rounded-lg placeholder:text-sm"
                    aria-describedby="inputGroupPrepend"
                    id={id} 
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
            </div>
        </div>
    )
}

export default Index
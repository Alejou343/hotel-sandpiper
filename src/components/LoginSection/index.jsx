"use client"
import React from 'react'

const Index = ({id, placeholder, label, onChange, type, className, minValue, maxValue}) => {

    return (
        <div className="mb-2">
            <label htmlFor={id} className={`form-label text-secondary font-semibold ${className.label}`}>{label}</label>
            <div className="relative items-center flex justify-center">
                <input 
                    type={type}
                    className={`${className.input} h-10 px-3 rounded-lg placeholder:text-sm`}
                    aria-describedby="inputGroupPrepend"
                    id={id} 
                    placeholder={placeholder}
                    onChange={onChange}
                    min={minValue}
                    max={maxValue}
                    required
                />
            </div>
        </div>
    )
}

export default Index
import React from 'react'

interface ComponentProps {
    list: string[]
    onChange: React.ChangeEventHandler<HTMLSelectElement>
    id: string
    value: string
    label: string
    className: { select: string }
}

const Index: React.FC<ComponentProps> = ({ list, onChange, id, value, label, className }) => {

    return (
        <div className="select-form flex items-center justify-between">
            <label htmlFor={id} className="form-label text-secondary font-semibold text-md">{label}</label>
            <select id={id} className={`h-8 px-3 rounded-lg border text-sm ${className?.select}`} aria-label="Default select example" onChange={onChange} value={value} required>
                <option value="">{""}</option>
                {list?.map((rol, i) => <option key={i} value={rol}> {rol} </option>)}
            </select>
        </div>
    )
}

export default Index
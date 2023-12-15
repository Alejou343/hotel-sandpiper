import React from 'react'

const index = ({ list, onChange, id, value, label }) => {

    return (
        <div className="select-form">
            <label htmlFor={id} className="form-label">{label}</label>
            <select id={id} className="mb-3 form-select" aria-label="Default select example" onChange={onChange} value={value}>
                <option value="">-</option>
                {list?.map((rol, i) => <option key={i} value={rol.bool}> {rol} </option>)}
            </select>
        </div>
    )
}

export default index
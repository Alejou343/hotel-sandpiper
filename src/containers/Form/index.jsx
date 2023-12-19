"use client"
import React from 'react'
import ComercialForm from '@/components/ComercialForm'
import ResidencialForm from '@/components/ResidencialForm'
import Button from '@/components/Button'

const index = () => {

    const [type, setType] = React.useState("")

    return (
        <div className='form'>
            <h1 className='text-3xl text-green-500 my-4 font-bold text-center'> Añadir Propiedad </h1>
            <p className="text-center my-4"> Selecciona el tipo de propiedad para añadir: </p>
            <div className="buttons flex justify-between">
                <Button 
                    children="Residencial" 
                    type="button" 
                    className={`${type == "Residencial" ? "bg-blue-400" : "bg-blue-200"}`} 
                    onClick={() => setType("Residencial")} 
                />
                <Button 
                    children="Comercial" 
                    type="button" 
                    className={`${type == "Comercial" ? "bg-blue-400" : "bg-blue-200"}`} 
                    onClick={() => setType("Comercial")} 
                />
            </div>
            {type == "Comercial" && <ComercialForm />}
            {type == "Residencial" && <ResidencialForm />}
        </div>
    )
}

export default index
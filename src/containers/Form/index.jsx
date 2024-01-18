"use client"
import React from 'react'
import ComercialForm from '@/components/ComercialForm'
import ResidencialForm from '@/components/ResidencialForm'
import Button from '@/components/Button'

const Index = () => {
    
    const [type, setType] = React.useState("")

    return (
        <div className='form-section px-4'>
            <h1 className='text-3xl text-primary my-4 font-bold text-center'> Añadir Propiedad </h1>
            <p className="text-center my-4"> Selecciona el tipo de propiedad para añadir: </p>
            <div className="buttons flex justify-between my-4">
                <Button 
                    type="button" 
                    className={`${type == "Residencial" ? "bg-primary" : "bg-secondary"}`} 
                    onClick={() => setType("Residencial")} 
                >
                    Residencial
                </Button>
                <Button 
                    type="button" 
                    className={`${type == "Comercial" ? "bg-primary" : "bg-secondary"}`} 
                    onClick={() => setType("Comercial")} 
                >
                    Comercial
                </Button>
            </div>
            {type == "Comercial" && <ComercialForm />}
            {type == "Residencial" && <ResidencialForm />}
        </div>
    )
}

export default Index
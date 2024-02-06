"use client"
import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Index = () => {

    const [leads, setLeads] = React.useState([])
    const [total, setTotal] = React.useState(null)
    const [number, setNumber] = React.useState(null)
    const [rol, setRol] = React.useState('')

    React.useEffect(() => {
        try {
            // --> Evento cuando se monte el componente con éxito
        } catch (error) {
            // --> Evento cuando ocurra un error al montar el componente
        }
    }, [])

  return (
    <div className="navbar w-full justify-end flex fixed top-8 right-8">
        <div className="adviserment bg-auxiliar border-primary border-2 p-2 rounded-lg ">
        <span className='font-semibold text-sm'> Total Leads este mes: &nbsp; </span>
        {rol == 'admin' 
            ? <h1 className='font-bold text-center text-2xl text-primary'> {number?.Total} </h1>
            : <h1 className={`font-bold text-center text-2xl ${leads?.length == total?.cantidadLeads ? 'text-red-500' : 'text-primary'}`}> {`${leads?.length} / ${total?.cantidadLeads || 0}`} </h1>
        }
        </div>
    </div>
  )
}

export default Index
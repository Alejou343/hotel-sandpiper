"use client"
import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Index = () => {

    const [leads, setLeads] = React.useState([])

    React.useEffect(() => {
        const userInfo = JSON.parse(Cookies.get('SessionInfo'))
        Promise.all([
            axios.get(`${process.env.BACK_LINK}/api/UserLeadResidencia/${userInfo?.answer[0]?.Correo_Inmobiliaria}`),
            axios.get(`${process.env.BACK_LINK}/api/UserLeadComercial/${userInfo?.answer[0]?.Correo_Inmobiliaria}`)  
        ])
        .then(([response1, response2]) => {
            setLeads([...response1.data, ...response2.data])
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

  return (
    <div className="navbar w-full justify-end flex fixed top-8 right-8">
        <div className="adviserment bg-auxiliar border-primary border-2 p-2 rounded-lg ">
        <span className='font-semibold text-sm'> Total Leads este mes: &nbsp; </span>
        <h1 className='font-bold text-primary text-center text-2xl'> {leads.length || 0 } </h1>
        </div>
    </div>
  )
}

export default Index
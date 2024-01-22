"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Cookies from 'js-cookie'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import './index.css'


const Index = ({ props }) => {

  const router = useRouter()
  const [alert, setAlert] = React.useState('')
  const [formData, setFormData] = React.useState({
    Idresidencia:0,
    Nombrecliente:"Alejandro Uribe",  // --> Este valor debería llegar desde whatsapp
    Numerocliente:"3506217627"
  })

  React.useEffect(() => {
    const response = Cookies.get('ResidencialID')
    setFormData({...formData, Idresidencia: parseInt(response)})
  }, [])

    const generateLead = async () => {
      return await axios.post(`${process.env.BACK_LINK}/api/addLeadResidencia`, formData)
      .then(() => setAlert('¡Lead enviado con éxito!'))
      .catch(() => setAlert('¡Hubo un problema al enviar el Lead!'))
    }

  return (
    <div className='propertie-card bg-auxiliar relative rounded-lg'>
      <Image src={props?.ImagenR || '/assets/default-house.jpg'} alt="foto" width={400} height={400} className="card-image aspect-square rounded-lg mb-2" />
      <div className="flex justify-between px-3">
        <p className="font-bold"> {props?.NombreR} </p>
        <Image src="/assets/edit.png" alt="edit" width={35} height={35} className="icon-edit absolute cursor-pointer" onClick={() => router.push(`/propertie/residencial/edit/${formData.Idresidencia}`)} />
        <div className="is-available">
          {props?.EstadoR == "Disponible" ? <Image src="/assets/green-circle.png" alt="available" width={40} height={40} /> : <Image src="/assets/red-circle.png" alt="unavailable" width={40} height={40} />}
        </div>      
      </div>
      <div className="flex justify-between px-3 mx-auto w-1/2">  
        <p className="my-2 font-bold">{props?.Tipo_ServicioR}</p>
        <p className="my-2">$ {props?.PrecioR}</p>
      </div>
      <div className="flex justify-between px-3">
        <p className="text-sm"> {props?.Area_ConstruidaR} m² </p>
        <p className="text-sm"> | </p>
        <p className="text-sm"> {props?.HabitacionR} Habitaciones </p>
        <p className="text-sm"> | </p>
        <p className="text-sm"> {props?.BanosR} Baños </p>
      </div>
      <Button type="button" onClick={generateLead} className="bg-primary flex justify-center my-4">
        Generar Lead
      </Button>
      {alert.includes('Hubo') 
      ? <p className='text-xs text-red-500 text-center my-4'> {alert} </p>
      : <p className='text-xs text-primary text-center my-4'> {alert} </p>}
    </div>
  )
}

export default Index
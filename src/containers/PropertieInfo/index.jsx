import React from 'react'
import Image from 'next/image'
import './index.css'


const Index = (props) => {


  return (
    <div className='propertie-card p-2 border-2 relative rounded-lg'>
      <Image src={props.props.ImagenR} alt="foto" width={400} height={400} className="card-image aspect-square rounded-lg mb-2" />
      <div className="flex justify-between px-3">
        <p className="font-bold"> {props.props.NombreR} </p>
        <Image src="/assets/edit.png" alt="edit" width={35} height={35} className="icon-edit absolute cursor-pointer" />
        <div className="is-available">
          {props.props.EstadoR == "Disponible" ? <Image src="/assets/green-circle.png" alt="available" width={40} height={40} /> : <Image src="/assets/red-circle.png" alt="unavailable" width={40} height={40} />}
        </div>      
      </div>
      <div className="flex justify-between px-3 mx-auto w-1/2">  
        <p className="my-2 font-bold">{props.props.Tipo_ServicioR}</p>
        <p className="my-2">$ {props.props.PrecioR}</p>
      </div>
      <div className="flex justify-between px-3">
        <p className="text-sm"> {props.props.Area_ConstruidaR}m² </p>
        <p className="text-sm"> | </p>
        <p className="text-sm"> {props.props.HabitacionR} Habitaciones </p>
        <p className="text-sm"> | </p>
        <p className="text-sm"> {props.props.BanosR} Baños </p>
      </div>
    </div>
  )
}

export default Index
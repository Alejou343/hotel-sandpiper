"use client"
import React from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import './index.css'
import Button from '@/components/Button'


const Index = ({ props }) => {

    const router = useRouter()
    const [comercialId, setComercialId] = React.useState(null)

    React.useEffect(() => {
        const response = Cookies.get('ComercialID')
        setComercialId(response)
    }, [])

    return (
        <div className='propertie-card bg-auxiliar relative rounded-lg'>
            <Image src={props?.ImagenC || '/assets/default-house.jpg'} alt="foto" width={400} height={400} className="card-image aspect-square rounded-lg mb-2" />
            <div className="flex justify-between px-3">
                <p className="font-bold"> {props?.NombreC} </p>
                <Image src="/assets/edit.png" alt="edit" width={35} height={35} className="icon-edit absolute cursor-pointer" onClick={() => router.push(`/propertie/comercial/edit/${comercialId}`)} />
                <div className="is-available">
                {props?.EstadoC == "Disponible" ? <Image src="/assets/green-circle.png" alt="available" width={40} height={40} /> : <Image src="/assets/red-circle.png" alt="unavailable" width={40} height={40} />}
                </div>      
            </div>
            <div className="flex justify-between px-3 mx-auto w-1/2"> 
                <p className="my-2 font-bold">{props?.Tipo_ServicioC}</p>
                <p className="my-2">$ {props?.PrecioC}</p>
            </div>
            <div className="flex justify-between px-3">
                <p className="text-sm"> {props?.AreaC || props?.Area_LoteC} m² </p>
                <p className="text-sm"> | </p>
                <p className="text-sm"> {props?.CiudadC} </p>
                <p className="text-sm"> | </p>
                <p className="text-sm"> {props?.TipoC}  </p>
            </div>
            <Button type="button" onClick={() => console.log(`Generando lead para el inmueble ${props.ID_Comercial}`)} className="bg-primary flex justify-center my-4">
                Generar Lead
            </Button>
        </div>
    )
}

export default Index
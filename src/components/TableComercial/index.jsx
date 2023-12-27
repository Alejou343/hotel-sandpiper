"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Index = () => {

    const [loaderActive, setLoaderActive] = React.useState(false)
    const [inmuebles, setInmuebles] = React.useState([])
    const router = useRouter()

    
    React.useEffect(() => {
        const correo = JSON.parse(Cookies.get("User"))
        setLoaderActive(true)
        axios.get(`${process.env.BACK_LINK}/api/UserComercial/${correo.email}`)
        .then((result) => {
            setInmuebles(result.data)
            setLoaderActive(false)
        })
        .catch((error) => { 
            console.error(error) 
            setLoaderActive(false)
        })
    }, [])

  return (
    <div className="table-responsive bg-white max-w-5xl">
        <Loader active={loaderActive} />
        <h1 className="text-center mb-4 text-3xl font-bold text-green-500">Mis Propiedades Comerciales</h1>
        <table className="table table-hover border-2 overflow-auto h-4/6">
            <thead className='border'>
                <tr>        
                    <th className='border px-2 font-bold text-green-400'> ID Inmueble </th>                    
                    <th className='border px-2 font-bold text-green-400'>Nombre Inmueble</th>
                    <th className='border px-2 font-bold text-green-400'>Precio Inmueble</th>                                              
                    <th className='border px-2 font-bold text-green-400'>Estado</th>                                              
                    <th className='border px-2 font-bold text-green-400'>Editar</th>                                              
                    <th className='border px-2 font-bold text-green-400'>Eliminar</th>                                              
                </tr>
            </thead>
            <tbody>
                {inmuebles.map(inmueble => 
                <tr key={inmueble.ID_Comercial} className="hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmueble.ID_Comercial}</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => router.push(`/propertie/comercial/${inmueble.ID_Comercial}`)}>{inmueble.NombreC}</td>
                    <td className='border px-2 text-center'>$ {inmueble.PrecioC}</td>
                    <td className='border px-2'>{inmueble.EstadoC == "Disponible" ? <Image src="/assets/green-circle.png" alt="green.png" width={20} height={20} className="mx-auto" /> : <Image src="/assets/red-circle.png" alt="red.png" width={20} height={20} className="mx-auto" /> }</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => router.push(`/propertie/comercial/edit/${inmueble.ID_Comercial}`)}>
                        <Image src="/assets/edit.png" alt="edit.png" width={20} height={20} className="mx-auto" />
                    </td> 
                    <td className='border px-2 text-center cursor-pointer' onClick={() => console.log(`Eliminando el inmueble ${inmueble.ID_Comercial}`)}>
                        <Image src="/assets/delete.png" alt="delete.png" width={20} height={20} className="mx-auto" />
                    </td>
                </tr>)}           
            </tbody>          
        </table>
    </div>  
  )
}

export default Index
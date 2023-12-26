import React from 'react'
import Image from 'next/image'
import Loader from '@/components/Loader'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Index = () => {

    const [loaderActive, setLoaderActive] = React.useState(false)
    const [inmuebles, setInmuebles] = React.useState([])
    const router = useRouter()

    React.useEffect(() => {
        setLoaderActive(true)
        
        Promise.all([
            axios.get(`${process.env.BACK_LINK}/api/residenciasFilter`),
            axios.get(`${process.env.BACK_LINK}/api/comercialFilter`)
        ])
        .then((result) => {
            const arr = [result[0]?.data, result[1]?.data]
            setInmuebles(arr.flat())
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
        <h1 className="text-center mb-4 text-3xl font-bold text-green-500">Mis Propiedades</h1>
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
                {inmuebles.map((inmueble, id) => 
                <tr key={id} className="hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmueble.ID_Residencial ||  inmueble.ID_Comercial}</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => router.push(`/propertie/${inmueble.ID_Residencial || inmueble.ID_Comercial}`)}>{inmueble.NombreR || inmueble.NombreC}</td>
                    <td className='border px-2 text-center'>$ {inmueble.PrecioR || inmueble.PrecioC}</td>
                    <td className='border px-2'>{inmueble.EstadoR == "Disponible" || inmueble.EstadoC == "Disponible" ? <Image src="/assets/green-circle.png" alt="green.png" width={20} height={20} className="mx-auto" /> : <Image src="/assets/red-circle.png" alt="red.png" width={20} height={20} className="mx-auto" /> }</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => console.log(`Editando el inmueble ${inmueble.ID_Inmobiliaria}`)}>
                        <Image src="/assets/edit.png" alt="edit.png" width={20} height={20} className="mx-auto" />
                    </td> 
                    <td className='border px-2 text-center cursor-pointer' onClick={() => console.log(`Eliminando el inmueble ${id}`)}>
                        <Image src="/assets/delete.png" alt="delete.png" width={20} height={20} className="mx-auto" />
                    </td>
                </tr>)}           
            </tbody>          
        </table>
    </div>  
  )
}

export default Index
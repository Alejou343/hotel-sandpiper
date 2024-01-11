"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Cookies from 'js-cookie'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation'
import ModalGeneral from '@/containers/ModalGeneral'
import ComercialContent from '@/components/ComercialContent'

const Index = () => {

    const [loaderActive, setLoaderActive] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const [inmuebles, setInmuebles] = React.useState([])
    const router = useRouter()

    React.useEffect(() => {
        const sessionInfo = JSON.parse(Cookies.get('SessionInfo'))
        setLoaderActive(true)
        axios.get(`${process.env.BACK_LINK}/api/UserComercial/${sessionInfo?.answer[0]?.Correo_Inmobiliaria}`, {
            headers: {
                "Authorization": `Bearer ${sessionInfo.accesToken}`
            }
        })
        .then((result) => {
            setInmuebles(result.data)
            setLoaderActive(false)
        })
        .catch((error) => { 
            console.error(error) 
            setLoaderActive(false)
        })
    }, [])

    const handleNavigate = (url, id) => {
        Cookies.set('ComercialID', id)
        router.push(url)
    }

    const handleDelete = (id) => {
        Cookies.set('ComercialID', id)
        setOpenModal(true)
    }

  return (
    <div className="bg-white max-w-5xl overflow-auto h-[80vh]">
        <Loader active={loaderActive} />
        <ModalGeneral state={openModal} setState={setOpenModal}>
            <ComercialContent setState={setOpenModal} />
        </ModalGeneral>
        <h1 className="text-center mb-4 text-3xl font-bold text-primary">Mis Propiedades Comerciales</h1>
        <table className="table table-hover border-2">
            <thead className='border'>
                <tr>        
                    <th className='border px-2 font-bold text-secondary'> ID Inmueble </th>                    
                    <th className='border px-2 font-bold text-secondary'>Nombre Inmueble</th>
                    <th className='border px-2 font-bold text-secondary'> Tipo Negocio </th>                                              
                    <th className='border px-2 font-bold text-secondary'>Precio Inmueble</th>                                              
                    <th className='border px-2 font-bold text-secondary'>Estado</th>                                              
                    <th className='border px-2 font-bold text-secondary'>Editar</th>                                              
                    <th className='border px-2 font-bold text-secondary'>Eliminar</th>                                              
                </tr>
            </thead>
            <tbody>
                {inmuebles.map(inmueble => 
                <tr key={inmueble.ID_Comercial} className="hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmueble.ID_Comercial}</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => handleNavigate(`/propertie/comercial/${inmueble.ID_Comercial}`, inmueble.ID_Comercial)}>{inmueble.NombreC}</td>
                    <td className='border px-2 text-center'>{inmueble.Tipo_ServicioC}</td>
                    <td className='border px-2 text-center'>$ {inmueble.PrecioC}</td>
                    <td className='border px-2'>{inmueble.EstadoC == "Disponible" ? <Image src="/assets/green-circle.png" alt="green.png" width={20} height={20} className="mx-auto" /> : <Image src="/assets/red-circle.png" alt="red.png" width={20} height={20} className="mx-auto" /> }</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => handleNavigate(`/propertie/comercial/edit/${inmueble.ID_Comercial}`, inmueble.ID_Comercial)}>
                        <Image src="/assets/edit.png" alt="edit.png" width={20} height={20} className="mx-auto" />
                    </td> 
                    <td className='border px-2 text-center cursor-pointer' onClick={() => handleDelete(inmueble.ID_Comercial)}>
                        <Image src="/assets/delete.png" alt="delete.png" width={20} height={20} className="mx-auto" />
                    </td>
                </tr>)}           
            </tbody>          
        </table>
    </div>  
  )
}

export default Index
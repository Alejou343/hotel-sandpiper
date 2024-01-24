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
        try {
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
        } catch (error) {
            console.error(error)
        }
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
    <div className="bg-primary max-w-5xl overflow-auto max-h-[80vh] py-1 rounded-md">
        <Loader active={loaderActive} />
        <ModalGeneral state={openModal} setState={setOpenModal}>
            <ComercialContent setState={setOpenModal} />
        </ModalGeneral>
        <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">Mis Propiedades Comerciales</h1>
        <table className="table table-hover bg-auxiliar">
            <thead className='bg-secondary text-white'>
                <tr>        
                    <th className='border px-2 font-bold'> ID Inmueble </th>                    
                    <th className='border px-2 font-bold'>Nombre Inmueble</th>
                    <th className='border px-2 font-bold'> Tipo Negocio </th>                                              
                    <th className='border px-2 font-bold'>Precio Inmueble</th>                                              
                    <th className='border px-2 font-bold'>Estado</th>                                              
                    <th className='border px-2 font-bold'>Editar</th>                                              
                    <th className='border px-2 font-bold'>Eliminar</th>                                              
                </tr>
            </thead>
            <tbody>
                {inmuebles.map(inmueble => 
                <tr key={inmueble.ID_Comercial} className="hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmueble.ID_Comercial}</td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => handleNavigate(`/propertie/comercial/${inmueble.ID_Comercial}`, inmueble.ID_Comercial)}>{inmueble.NombreC}</td>
                    <td className='border px-2 text-center'>{inmueble.Tipo_ServicioC}</td>
                    <td className='border px-2 text-center'>$ {inmueble.PrecioC}</td>
                    <td className='border px-2'>
                        {inmueble.EstadoC == "Disponible" 
                        ? <Image src="/assets/green-circle.png" alt="green.png" width={20} height={20} className="mx-auto" /> 
                        : <Image src="/assets/red-circle.png" alt="red.png" width={20} height={20} className="mx-auto" /> }
                    </td>
                    <td className='border px-2 text-center cursor-pointer' onClick={() => handleNavigate(`/propertie/comercial/edit/${inmueble.ID_Comercial}`, inmueble.ID_Comercial)}>
                        <Image src="/assets/edit.png" alt="edit.png" width={20} height={20} className="mx-auto" />
                    </td> 
                    <td className='border px-2 text-center cursor-pointer' onClick={() => handleDelete(inmueble.ID_Comercial)}>
                        <Image src="/assets/delete.png" alt="delete.png" width={20} height={20} className="mx-auto" />
                    </td>
                </tr>)}           
            </tbody>          
        </table>
        <div className="bg-primary text-white rounded-md text-center my-1">
            <b>Total Propiedades Comerciales: </b> {inmuebles.length}
        </div>
    </div>  
  )
}

export default Index
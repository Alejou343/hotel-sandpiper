import React from 'react'
import Image from 'next/image'
import Loader from '@/components/Loader'

const index = () => {

    const [loaderActive, setLoaderActive] = React.useState(true)

    React.useEffect(() => {
        setLoaderActive(true)
    setTimeout(() => {
        setLoaderActive(false)
    }, 2000);
    }, [])

    // Esto debe llegar desde la DB
    const inmuebles = [
        {id: 1001, name: "Bonita casa en Belen", price: "450'000.000", state: true},
        {id: 1002, name: "Espectacular finca en Marinilla", price: "912'000.000", state: true},
        {id: 1003, name: "Apartamento para estrenar en el Poblado", price: "620'000.000", state: true},
        {id: 1004, name: "Lote cerca al aeropuerto", price: "285'000.000", state: true},
        {id: 1005, name: "Bodega gigante para eventos", price: "1.700'000.000", state: false},
        {id: 1006, name: "Consultorio en zona exclusiva de Envigado", price: "185'000.000", state: false},
    ]

  return (
    <div className="table-responsive bg-white max-w-5xl">
        <Loader active={loaderActive} />
        <h1 className="text-center my-4 text-3xl font-bold text-green-500">Mis Propiedades</h1>
        <table className="table table-hover border-2">
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
                <tr key={inmueble.id} className="cursor-pointer hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmueble.id}</td>
                    <td className='border px-2 text-center'>{inmueble.name}</td>
                    <td className='border px-2 text-center'>$ {inmueble.price}</td>
                    <td className='border px-2'>{inmueble.state ? <Image src="/assets/green-circle.png" alt="green.png" width={20} height={20} className="mx-auto"/> : <Image src="/assets/red-circle.png" alt="red.png" width={20} height={20} className="mx-auto" /> }</td>
                    <td className='border px-2 text-center'><Image src="/assets/edit.png" alt="edit.png" width={20} height={20} className="mx-auto"/></td>
                    <td className='border px-2 text-center'><Image src="/assets/delete.png" alt="delete.png" width={20} height={20} className="mx-auto"/></td>
                </tr>)}           
            </tbody>          
        </table>
    </div>  
  )
}

export default index
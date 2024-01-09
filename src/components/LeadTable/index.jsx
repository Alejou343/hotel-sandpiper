import React from 'react'
import Image from 'next/image'
import Loader from '@/components/Loader'

const Index = () => {

    const [loaderActive, setLoaderActive] = React.useState(true)

    React.useEffect(() => {
        setLoaderActive(true)
    setTimeout(() => {
        setLoaderActive(false)
    }, 2000);
    }, [])

  return (
    <div className="table-responsive bg-white max-w-5xl">
        <Loader active={loaderActive} />
        <h1 className="text-center my-4 text-3xl font-bold text-green-500">Mis Leads</h1>
        <table className="table table-hover border-2">
            <thead className='border'>
                <tr>        
                    <th className='border px-2 font-bold text-green-400'> ID Lead </th>                    
                    <th className='border px-2 font-bold text-green-400'>Nombre inmueble</th>                                                                                            
                    <th className='border px-2 font-bold text-green-400'>Nombre Cliente </th>
                    <th className='border px-2 font-bold text-green-400'>Teléfono Cliente</th>                                              
                    <th className='border px-2 font-bold text-green-400'>Fecha de generación</th>                                              
                    <th className='border px-2 font-bold text-green-400'>Detalles</th>                                              
                </tr>
            </thead>
            <tbody>
                {leads.map(lead => 
                <tr key={lead.id} className="cursor-pointer hover:bg-slate-300">
                    <td className='border px-2 text-center'>{lead.id}</td>
                    <td className='border px-2 text-center'>{lead.name}</td>
                    <td className='border px-2 text-center'>{lead.client}</td>
                    <td className='border px-2 text-center'>{lead.phone}</td>
                    <td className='border px-2 text-center'>{lead.startDate}</td>
                    <td className='border px-2 text-center' onClick={() => console.log(`Viendo el inmueble ${lead.id}`)}>
                        <Image src="/assets/open.png" alt="view.png" width={20} height={20} className="mx-auto" />
                    </td>
                </tr>)}           
            </tbody>          
        </table>
    </div>  
  )
}

export default Index
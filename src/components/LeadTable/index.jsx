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

    const leads = [
        {id: 9901, name: "Bonita casa en Belen", client: "Alejandro Alvarez", phone: 3506217627, startDate: "2023-11-01" },
        {id: 9902, name: "Espectacular finca en Marinilla", client: "Santiago Rivera", phone: 3113172984, startDate: "2023-11-16" },
        {id: 9903, name: "Apartamento para estrenar en el Poblado", client: "Simon Clavijo", phone: 3045239673, startDate: "2023-11-27" },
        {id: 9904, name: "Lote cerca al aeropuerto", client: "Walter Vanegas", phone: 3043361388, startDate: "2023-12-05" },
        {id: 9905, name: "Bodega gigante para eventos", client: "Lina Otalvaro", phone: 3215086949, startDate: "2023-12-13" },
        {id: 9906, name: "Consultorio en zona exclusiva de Envigado", client: "Alejandro Velasquez", phone: 3011477516, startDate: "2023-12-15" },
    ]

  return (
    <div className="bg-primary max-w-5xl max-h-[80vh] overflow-auto py-1 rounded-md">
        <Loader active={loaderActive} />
        <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">Mis Leads</h1>
        <table className="table table-hover bg-auxiliar">
            <thead className='bg-secondary text-white'>
                <tr>        
                    <th className='border px-2 font-bold'> ID Lead </th>                    
                    <th className='border px-2 font-bold'>Nombre inmueble</th>                                                                                            
                    <th className='border px-2 font-bold'>Nombre Cliente </th>
                    <th className='border px-2 font-bold'>Teléfono Cliente</th>                                              
                    <th className='border px-2 font-bold'>Fecha de generación</th>                                              
                    <th className='border px-2 font-bold'>Detalles</th>                                              
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
        <div className="bg-primary text-white rounded-md text-center my-1">
            <b>Total: </b> {leads.length}
        </div>
    </div>  
  )
}

export default Index
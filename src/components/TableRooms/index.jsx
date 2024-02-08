import React from 'react'

const Index = () => {

    const inmuebles = [
        {id: 1001, name: "Alexander", floor: 1, status: "Occuped"},
        {id: 1006, name: "Santiago", floor: 1, status: "Clean"},
        {id: 2008, name: "Lina", floor: 2, status: "Occuped"},
        {id: 3005, name: "Simon", floor: 3, status: "Occuped"},
        {id: 4001, name: "Alexandra", floor: 4, status: "Clean"},
    ]

  return (
    <div className="bg-primary max-w-5xl overflow-auto max-h-[80vh] py-1 rounded-md">
        <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">Mis Propiedades Residenciales</h1>
        <table className="table table-hover bg-auxiliar">
            <thead className='bg-secondary text-white'>
                <tr>        
                    <th className='border px-2 font-bold'> ID Inmueble </th>                    
                    <th className='border px-2 font-bold'>Nombre Inmueble</th>
                    <th className='border px-2 font-bold'>Tipo Negocio</th>                                              
                    <th className='border px-2 font-bold'>Precio Inmueble</th>                                               
                </tr>
            </thead>
            <tbody>
                {inmuebles.map(inmueble => 
                <tr key={inmueble.id} className="hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmueble.status}</td>
                    <td className='border px-2 text-center cursor-pointer'>{inmueble.id}</td>
                    <td className='border px-2 text-center'>{inmueble.name}</td>
                    <td className='border px-2 text-center'>$ {inmueble.type}</td>
                </tr>)}           
            </tbody>          
        </table>
        <div className="bg-primary text-white rounded-md text-center my-1">
            <b>Total Habitaciones: </b> {inmuebles.length}
        </div>
    </div>  
  )
}

export default Index
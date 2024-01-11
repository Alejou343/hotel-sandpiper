import React from 'react'
import EditComercial from '@/components/EditComercial'
import Sidebar from '@/components/Sidebar'


const Page = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="mx-auto my-4"> 
                <h1 className="text-primary text-center text-3xl font-bold"> Editar inmueble </h1>
                <EditComercial />   
            </div>
        </div>
    )
}

export default Page
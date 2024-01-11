import React from 'react'
import EditResidencial from '@/components/EditResidencial'
import Sidebar from '@/components/Sidebar'

const Page = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="mx-auto my-4">
                <h1 className="text-primary text-center text-3xl font-bold"> Editar inmueble </h1>
                <EditResidencial />
            </div>
        </div>
    )
}

export default Page
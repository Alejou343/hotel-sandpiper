import React from 'react'
import EditResidencial from '@/components/EditResidencial'
import Sidebar from '@/components/Sidebar'

const Page = () => {
    return (
        <div className='flex items-center'>
            <Sidebar />
            <div className="mx-auto my-4 form-section p-4 bg-auxiliar rounded-lg border-2 border-primary max-h-[80vh]">
                <h1 className="text-primary text-center text-3xl font-bold"> Editar inmueble </h1>
                <EditResidencial />
            </div>
        </div>
    )
}

export default Page
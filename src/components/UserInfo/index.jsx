import React from 'react'
import Image from 'next/image'

const Index = ({ props }) => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-5/6 text-center absolute bottom-8">
                <p className='text-white text-xl font-bold'>{props?.user?.Nombre_Inmobiliaria}</p>
                <p>{props?.user?.Correo_Inmobiliaria}</p>
                <p>{props?.user?.Celular}</p>
                <Image src="/assets/logout.png" alt="logout.png" width={40} height={40} onClick={props.handleLogout} className='cursor-pointer my-4 mx-auto' />
            </div>
        </div>
    )
}

export default Index
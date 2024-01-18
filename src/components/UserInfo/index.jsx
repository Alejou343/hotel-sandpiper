import React from 'react'
import Image from 'next/image'

const Index = ({ props }) => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-5/6 text-center absolute bottom-8">
                <div className="w-[4rem] mx-auto aspect-square rounded-full bg-auxiliar flex mb-4 hover:w-[4.2rem]">
                    <Image src="/assets/logout.png" alt="logout.png" width={30} height={30} onClick={props.handleLogout} className='cursor-pointer my-4 mx-auto' />
                </div>
                <p className='text-white text-xl font-bold'>{props?.user?.Nombre_Inmobiliaria}</p>
                <p>{props?.user?.Correo_Inmobiliaria}</p>
                <p>{props?.user?.Celular}</p>
            </div>
        </div>
    )
}

export default Index
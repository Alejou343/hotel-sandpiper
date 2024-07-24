import React from 'react'
import Image from 'next/image'

interface ComponentProps {
    props: { 
        handleLogout: React.MouseEventHandler<HTMLDivElement>
        user: { user_name: string, user_email: string, user_roles: string } 
    }
}

const Index: React.FC<ComponentProps> = ({ props }) => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-5/6 text-center absolute bottom-8">
                <div onClick={props?.handleLogout} className="w-[4rem] mx-auto cursor-pointer aspect-square rounded-full bg-auxiliar flex mb-4 hover:w-[4.2rem]" title='Cerrar sesión'>
                    <Image src="/assets/logout.svg" alt="logout.svg" width={20} height={20} className='my-4 mx-auto w-auto' />
                </div>
                <p className='text-white text-md font-bold'>{props?.user?.user_email}</p>
                <p className='text-sm'>{props?.user?.user_name}</p>
                <p className='text-sm'>{props?.user?.user_roles}</p>
            </div>
        </div>
    )
}

export default Index
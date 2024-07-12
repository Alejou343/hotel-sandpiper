import React from 'react'
import Loader from '@/components/Loader'

const Index = ({ setState, id }) => {

    return (
        <div className='Gray flex flex-col min-w-fit min-h-fit items-center p-6 pb-10'>
            {/* <Loader active={loading} /> */}
            <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                <p>¿Estás seguro de que deseas eliminar el elemento: <br /> <span className="font-bold">  ELEMENTO </span> ? </p>
                <p> Ocurrió algo inesperado... </p>
            </div>
            <div className="mt-8 flex gap-6">
                <button className="rounded-full bg-slate-400 px-4 py-2 text-white font-bold">CANCELAR</button>
                <button className="rounded-full bg-primary px-4 py-2 text-white font-bold">CONFIRMAR</button>
            </div>
        </div>
    )
}

export default Index
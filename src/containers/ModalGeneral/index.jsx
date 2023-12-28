import React from 'react'
import Image from 'next/image'

const Index = ({ children, state, setState}) => {

    return (
        <>
            { state &&
                <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm'>
                    <main className='w-2/5 h-auto relative rounded shadow-lg bg-secondaryWhite py-12'>
                        <button 
                            className='absolute top-0 pt-3 pr-3 right-0 cursor-pointer'
                            onClick={() => setState( !state )}
                        > 
                            <Image src='/assets/close-icon.png' width={ 25 } height={ 25 } alt='cerrar' />
                        </button>
                        <div className='h-full w-full px-12'>
                            {children}
                        </div>
                    </main>
                </div>
            }
        </>
    )
}

export default Index
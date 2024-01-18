import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Index = () => {
  return (
    <div className='mx-auto bg-auxiliar w-2/3 rounded-[4rem] rounded-ee-none py-2 mb-8'>
        <Link href="/main">
            <Image src="/Pocki.svg" alt="pocki.svg" width={120} height={120} className='mx-auto' />
        </Link>
        <p className='text-center text-xs text-[#7fbd42] font-bold'> Inmobiliaria </p>
    </div>
  )
}

export default Index
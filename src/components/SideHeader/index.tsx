import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import './index.css'

interface ComponentProps {
  to: string
}

const Index: React.FC<ComponentProps> = ({ to }) => {
  return (
    <div className='mx-auto bg-auxiliar w-2/3 rounded-[4rem] rounded-ee-none py-2 mb-8'>
        <Link href={to}>
            <Image src="/Pocki.svg" alt="pocki.svg" width={120} height={120} className='mx-auto w-[8rem]' priority={true} />
        </Link>
        <p className='text-center text-xs text-primary font-bold'> Hotel Sandpiper </p>
    </div>
  )
}

export default Index
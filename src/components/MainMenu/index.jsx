import React from 'react'
import Link from 'next/link'
import { actions } from '@/utils/actionsArray'
import { useItem } from '@/context/ItemContext'

const Index = () => {

    const { item } = useItem()

  return (
    <aside className='main-room'>
        <section className="flex gap-4">
            <Link href={`${actions[item]?.name}/crear`}>
                <div className={"text-primary bg-secondary hover:opacity-60 hover:text-black section w-[8rem] h-[2rem] font-bold flex justify-center items-center rounded-lg cursor-pointer"}> 
                    Crear
                </div>
            </Link>
        </section>
    </aside>
  )
}

export default Index
import React from 'react'
import Link from 'next/link'
import { views } from '@/utils/viewsArray'
import { actions } from '@/utils/actionsArray'
import { useItem } from '@/context/ItemContext'

const Index = ({ id, title }) => {

    const item = useItem()

  return (
    <aside className='main-room'>
        <section className="flex gap-4">
            {views?.map( view => 
            <Link key={view.id} href={`${actions[item?.item]?.name}/${view.name.toLowerCase()}`}>
                <div className={`${(view.id + id) % 2 
                ? "bg-primary text-secondary hover:opacity-60 hover:text-black" 
                : "bg-secondary text-primary hover:opacity-60 hover:text-black"} 
                section w-[8rem] h-[2rem] font-bold flex justify-center items-center rounded-lg cursor-pointer`}> 
                    {view.name} 
                </div>
            </Link>)}
        </section>
    </aside>
  )
}

export default Index
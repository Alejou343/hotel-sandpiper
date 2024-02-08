import React from 'react'
import Link from 'next/link'
import { views } from '@/utils/viewsArray'
import { actions } from '@/utils/actionsArray'
import { useItem } from '@/context/ItemContext'

const Index = ({ id, title }) => {

    const item = useItem()

  return (
    <aside className='main-room'>
        <h1 className='text-3xl text-center my-4 text-primary py-2 border-4 border-secondary bg-auxiliar rounded-lg font-bold'> {title} </h1>
        <section className="grid grid-cols-3 gap-4">
            {views?.map( view => 
            <Link key={view.id} href={`${actions[item?.item]?.name}/${view.name.toLowerCase()}`}>
                <div 
                className={`${(view.id + id) % 2 
                ? "bg-primary text-secondary" 
                : "bg-secondary text-primary"} 
                aspect-square section w-[10rem] font-bold flex justify-center items-center rounded-lg cursor-pointer`}> 
                    {view.name} 
                </div>
            </Link>)}
        </section>
    </aside>
  )
}

export default Index
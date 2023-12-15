"use client"
import React from 'react'
import Button from '@/components/Button'

const index = () => {

    const [user, setUser] = React.useState()
    const [item, setItem] = React.useState(1)

    React.useEffect(() => {
        const userLogged = localStorage.getItem('User')
        setUser(JSON.parse(userLogged).email)
    }, [])

  return (
    <aside className="bg-green-400 w-1/6 h-screen relative py-12">
        <div className="buttons gap-8 flex flex-col">
            <Button children="Mis Propiedades" onClick={() => setItem(1)} type="button" className={`text-xs ${item == 1 ? 'bg-blue-400' : 'bg-blue-200'}`} />
            <Button children="Mis Leads" onClick={() => setItem(2)} type="button" className={`text-xs ${item == 2 ? 'bg-blue-400' : 'bg-blue-200'}`} />
            <Button children="Añadir Propiedad" onClick={() => setItem(3)} type="button" className={`text-xs ${item == 3 ? 'bg-blue-400' : 'bg-blue-200'}`} />
        </div>
        <p className='absolute bottom-8 w-full text-white text-center'>{user}</p>
    </aside>
  )
}

export default index
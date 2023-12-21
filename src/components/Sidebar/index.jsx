"use client"
import React from 'react'
import Button from '@/components/Button'
import { useItem } from '@/context/ItemContext'
import Cookies from 'js-cookie'

const Index = () => {

    const [user, setUser] = React.useState()
    const { item, setItem } = useItem() 

    React.useEffect(() => {
        const userLogged = Cookies.get('User')

        if (userLogged) {
          setUser(JSON.parse(userLogged).email)
        }
    }, [])

  return (
    <aside className="bg-green-400 w-1/6 h-screen relative py-12">
        <div className="buttons gap-8 flex flex-col">
          <Button 
            onClick={() => setItem(1)} 
            type="button" 
            className={`text-xs ${item == 1 ? 'bg-blue-400' : 'bg-blue-200'}`} 
          >
            Mis Propiedades 
          </Button>
          <Button 
            onClick={() => setItem(2)} 
            type="button" 
            className={`text-xs ${item == 2 ? 'bg-blue-400' : 'bg-blue-200'}`} 
            >
            Mis Leads 
            </Button>
          <Button 
            onClick={() => setItem(3)} 
            type="button" 
            className={`text-xs ${item == 3 ? 'bg-blue-400' : 'bg-blue-200'}`} 
            >
              Añadir Propiedad 
            </Button>
        </div>
        <p className='absolute bottom-8 w-full text-white text-center'>{user}</p>
    </aside>
  )
}

export default Index
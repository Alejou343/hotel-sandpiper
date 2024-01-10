"use client"
import React from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import { useItem } from '@/context/ItemContext'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Index = () => {

    const router = useRouter()
    const [user, setUser] = React.useState()
    const { item, setItem } = useItem() 

    React.useEffect(() => {
        const userLogged = JSON.parse(Cookies.get('SessionInfo'))

        if (userLogged) {
          setUser(userLogged?.answer[0])
        }
    }, [])

    const handleLogout = () => {
      Cookies.remove('SessionInfo')
      setTimeout(() => {
        router.push('/')
      }, 2000);
    }

    const handleChange = (id) => {
      router.push('/main')
      setItem(id)
    }

  return (
    <aside className="bg-green-400 w-1/6 h-screen relative py-12">
        <div className="buttons gap-8 flex flex-col">
          <Button 
            onClick={() => handleChange(1)} 
            type="button" 
            className={`text-xs ${item == 1 ? 'bg-blue-400' : 'bg-blue-200'}`} 
          >
            Mis Propiedades residenciales
          </Button>
          <Button 
            onClick={() => handleChange(2)} 
            type="button" 
            className={`text-xs ${item == 2 ? 'bg-blue-400' : 'bg-blue-200'}`} 
            >
            Mis Propiedades comerciales 
            </Button>
          <Button 
            onClick={() => handleChange(3)} 
            type="button" 
            className={`text-xs ${item == 3 ? 'bg-blue-400' : 'bg-blue-200'}`} 
          >
            Mis Leads
          </Button>
          <Button 
            onClick={() => handleChange(4)} 
            type="button" 
            className={`text-xs ${item == 4 ? 'bg-blue-400' : 'bg-blue-200'}`} 
          >
            Añadir Propiedad 
          </Button>
        </div>
        <div className="absolute bottom-8 w-5/6 flex justify-between left-4">
          <p className='text-white'>{user?.Correo_Inmobiliaria}</p>
          <Image src="/assets/logout.png" alt="logout.png" width={20} height={20} onClick={handleLogout} className='cursor-pointer' />
        </div>
    </aside>
  )
}

export default Index
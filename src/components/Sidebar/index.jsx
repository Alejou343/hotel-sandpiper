"use client"
import React from 'react'
import Button from '@/components/Button'
import { useItem } from '@/context/ItemContext'
import UserInfo from '@/components/UserInfo'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import SideHeader from '@/components/SideHeader'

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
    <aside className="bg-primary w-1/6 h-screen relative py-12 rounded-r-[4rem]">
        <SideHeader />
        <div className="buttons gap-8 flex flex-col">
          <Button 
            onClick={() => handleChange(1)} 
            type="button" 
            className={`text-xs ${item == 1 ? 'bg-secondary' : 'bg-auxiliar !text-black'}`} 
          >
            Mis Propiedades residenciales
          </Button>
          <Button 
            onClick={() => handleChange(2)} 
            type="button" 
            className={`text-xs ${item == 2 ? 'bg-secondary' : 'bg-auxiliar !text-black'}`} 
            >
            Mis Propiedades comerciales 
            </Button>
          <Button 
            onClick={() => handleChange(3)} 
            type="button" 
            className={`text-xs ${item == 3 ? 'bg-secondary' : 'bg-auxiliar !text-black'}`} 
          >
            Mis Leads
          </Button>
          <Button 
            onClick={() => handleChange(4)} 
            type="button" 
            className={`text-xs ${item == 4 ? 'bg-secondary' : 'bg-auxiliar !text-black'}`} 
          >
            Añadir Propiedad 
          </Button>
        </div>
        <UserInfo props = {{user, handleLogout}} />
    </aside>
  )
}

export default Index
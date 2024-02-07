"use client"
import React from 'react'
import Cookies from 'js-cookie'
// import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useItem } from '@/context/ItemContext'
// import LimitButton from '@/components/LimitButton'
import './index.css'

const Index = () => {

  const { item } = useItem()
  const [user, setUser] = React.useState()
  
  React.useEffect(() => {
    try {
      const userLogged = JSON.parse(Cookies.get('SessionInfo'))

      if (userLogged) {
        setUser(userLogged?.data?.user_name)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])
  
  const views = [
    { key: 'Residencial', component: <p>Item 1</p>},
    { key: 'Comercial', component: <p> Item 2 </p>},
    { key: 'Lead', component: <p> Item 3 </p>},
    { key: 'Form', component: user?.rol == 'admin' ?  <p> Item 4 </p> : <p> Item 5 </p>}
  ]

    return (
      <div>
        {/* <Navbar /> */}
        <div className='flex'>
          <Sidebar />
          <div className="table-container mx-auto my-4">
            {views[item - 1]?.component}
          </div>
        </div>
        {/* {user?.user_roles == 'admin' ? null : <LimitButton />} */}
      </div>
    )
}

export default Index
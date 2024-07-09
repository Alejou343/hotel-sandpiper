"use client"
import React from 'react'
import Cookies from 'js-cookie'
// import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'
// import LimitButton from '@/components/LimitButton'
import TableRooms from '@/components/TableRooms'
import Layout from '@/containers/Layout'
import './index.css'

const Index = () => {

  const { item } = useItem()
  const [user, setUser] = React.useState()
  
  // React.useEffect(() => {
  //   try {
  //     const userLogged = JSON.parse(Cookies.get('SessionInfo'))

  //     if (userLogged) {
  //       setUser(userLogged?.data?.user_name)
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])

    return (
      <div>
        {/* <Navbar /> */}
        <div className='flex'>
          <Sidebar />
          <div className="flex flex-col justify-center mx-auto">
            <div className="table-container mx-auto my-4">
              <TableRooms endpoint={views[item]?.endpoint} title={views[item]?.key} />  
            </div>
            <div className="table-container mx-auto my-4">
              {views[item]?.component}
            </div>
          </div>
        </div>
        {/* {user?.user_roles == 'admin' ? null : <LimitButton />} */}
      </div>
    )
}

export default Index
"use client"
import React from 'react'
import Cookies from 'js-cookie'
// import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'
// import LimitButton from '@/components/LimitButton'
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
  
  const views = [
    { key: 'Operation Role', component: <MainMenu id={1} title={"Operation Role"} />},
    { key: 'Maintenance Inventory', component: <MainMenu id={2} title={"Maintenance Inventory"} />},
    { key: 'Cleanning Staff', component: <MainMenu id={3} title={"Cleanning Staff"} />},
    { key: 'Room', component: <MainMenu id={4} title={"Room"} />},
    { key: 'Category Room', component: <MainMenu id={5} title={"Category Room"} />},
  ]

    return (
      <div>
        {/* <Navbar /> */}
        <div className='flex'>
          <Sidebar />
          <div className="table-container mx-auto my-4">
            {views[item]?.component}
          </div>
        </div>
        {/* {user?.user_roles == 'admin' ? null : <LimitButton />} */}
      </div>
    )
}

export default Index
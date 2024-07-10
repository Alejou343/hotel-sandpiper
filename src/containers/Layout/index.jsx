"use client"
import React from 'react'
import Cookies from 'js-cookie'
import Sidebar from '@/components/Sidebar'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'
import { usePathname } from 'next/navigation'
import './index.css'

const Index = ({ children }) => {

    const { item } = useItem()
    const pathname = usePathname()
    const [user, setUser] = React.useState()
    
    const views = [
        { key: 'Operation Role', component: <MainMenu />, endpoint: 'operationalRoles'},
        { key: 'Maintenance Inventory', component: <MainMenu />, endpoint: 'maintenanceInventories'},
        { key: 'Cleanning Staff', component: <MainMenu />, endpoint: 'cleaningStaffs'},
        { key: 'Room', component: <MainMenu />, endpoint: 'rooms'}
    ]

    React.useEffect(() => {
        try {
            const userLogged = JSON.parse(Cookies.get('SessionInfo') || '{}')
            if (userLogged) {
                setUser(userLogged?.data?.user_name)
            }
        } catch (error) {
            console.error(error)
        }
    }, [])


    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <div className="flex flex-col justify-center mx-auto">
                    <div className="table-container mx-auto my-4">
                        {children}
                    </div>
                    { pathname == '/main' 
                    ? <div className="table-container mx-auto my-4">
                        {views[item]?.component}
                    </div> 
                    : null}
                </div>
            </div>
        </div>
    )
}

export default Index
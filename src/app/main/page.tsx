"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'
import TableItems from '@/components/TableItems'
import RoomItems from '@/components/RoomItems'
import ManageOptions from '@/components/ManageOptions'
// import Cookies from 'js-cookie'

interface ViewsProps {
  key: string
  component: React.JSX.Element | null
  endpoint: any
}

const Page: React.FC = () => {

  const { item }: any  = useItem()

  const views: ViewsProps[] = [
    { key: 'Personal operacional', component: <MainMenu />, endpoint: 'operationalRoles'},
    { key: 'Personal de mantenimiento', component: <MainMenu />, endpoint: 'maintenanceInventories'},
    { key: 'Personal de limpieza', component: <MainMenu />, endpoint: 'cleaningStaffs'},
    { key: 'Habitaciones', component: <MainMenu />, endpoint: 'rooms'},
    { key: 'Administración', component: null, endpoint: null}
  ]

  return (
    <Layout>
      {item == 4 
        ? <ManageOptions />
        : item == 3 
          ? <RoomItems endpoint={views[item]?.endpoint} title={views[item]?.key} />
          : <TableItems endpoint={views[item]?.endpoint} title={views[item]?.key} />
      }
    </Layout>
  )
}

export default Page
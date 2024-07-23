"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'
import TableItems from '@/components/TableItems'
import ManageOptions from '@/components/ManageOptions'
import Cookies from 'js-cookie'


const Page = () => {

  const { item } = useItem()

  const views = [
    { key: 'Personal operacional', component: <MainMenu />, endpoint: 'operationalRoles'},
    { key: 'Personal de mantenimiento', component: <MainMenu />, endpoint: 'maintenanceInventories'},
    { key: 'Personal de limpieza', component: <MainMenu />, endpoint: 'cleaningStaffs'},
    { key: 'Habitaciones', component: <MainMenu />, endpoint: 'rooms'},
    { key: 'Administración', component: null, endpoint: null}
  ]

  return (
    <Layout>
      {item !== 4 
        ? <TableItems endpoint={views[item]?.endpoint} title={views[item]?.key} />
        : <ManageOptions />
      }
    </Layout>
  )
}

export default Page
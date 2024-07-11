"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'
import TableItems from '@/components/TableItems'
import Cookies from 'js-cookie'


const Page = () => {

  const { item } = useItem()

  const views = [
    { key: 'Operation Role', component: <MainMenu />, endpoint: 'operationalRoles'},
    { key: 'Maintenance Inventory', component: <MainMenu />, endpoint: 'maintenanceInventories'},
    { key: 'Cleanning Staff', component: <MainMenu />, endpoint: 'cleaningStaffs'},
    { key: 'Room', component: <MainMenu />, endpoint: 'rooms'},
  ]

  return (
    <Layout>
      <TableItems endpoint={views[item]?.endpoint} title={views[item]?.key} />  
    </Layout>
  )
}

export default Page
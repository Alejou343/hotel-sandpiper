"use client"
import React from 'react'
import Form from '@/containers/Form'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import LeadTable from '@/components/LeadTable'
import { useItem } from '@/context/ItemContext'
import TableComercial from '@/components/TableComercial'
import TableResidencial from '@/components/TableResidencial'
import './index.css'

const Index = () => {

  const { item } = useItem()
  const views = [
    { key: 'Residencial', component: <TableResidencial />},
    { key: 'Comercial', component: <TableComercial />},
    { key: 'Lead', component: <LeadTable />},
    { key: 'Form', component: <Form />}
  ]


    return (
      <div>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <div className="table-container mx-auto my-4">
            {views[item - 1]?.component}
          </div>
        </div>
      </div>
    )
}

export default Index
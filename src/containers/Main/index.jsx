"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import InmTable from '@/components/InmTable'
import LeadTable from '@/components/LeadTable'
import { useItem } from '@/context/ItemContext'
import Form from '@/containers/Form'

const index = () => {

  const { item } = useItem()

  if (item == 1) {
    return (
      <div className='flex'>
          <Sidebar />
          <div className="mx-auto my-20">
              <InmTable /> 
          </div>
      </div>
    )
  } else if (item == 2) {
    return (
      <div className='flex'>
          <Sidebar />
          <div className="mx-auto my-20">
              <LeadTable /> 
          </div>
      </div>
    )
  } else {
    return (
      <div className='flex'>
          <Sidebar />
          <div className="mx-auto my-20">
              <Form /> 
          </div>
      </div>
    )
  }
}

export default index
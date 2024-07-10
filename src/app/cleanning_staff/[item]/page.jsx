"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Layout from '@/containers/Layout'
import RoomCreateForm from '@/containers/RoomCreateForm'

const page = () => {

    const pathname = usePathname()

  return (
    <Layout>
      <RoomCreateForm />
    </Layout>
  )
}

export default page
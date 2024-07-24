"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import RoomCreateForm from '@/containers/RoomCreateForm'

const page: React.FC = () => {

  return (
    <Layout>
      <RoomCreateForm />
    </Layout>
  )
}

export default page
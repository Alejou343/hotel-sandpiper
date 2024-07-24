"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import PersonalCreateForm from '@/containers/PersonalCreateForm'

const page: React.FC = () => {

  return (
    <Layout>
      <PersonalCreateForm />
    </Layout>
  )
}

export default page
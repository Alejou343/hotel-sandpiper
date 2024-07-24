"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import PersonalEditForm from '@/containers/PersonalEditForm'

const page: React.FC = () => {

  return (
    <Layout>
      <PersonalEditForm />
    </Layout>
  )
}

export default page
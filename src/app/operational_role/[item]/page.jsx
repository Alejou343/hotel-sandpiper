"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Layout from '@/containers/Layout'

const page = () => {

    const pathname = usePathname()

  return (
    <Layout>
      <div>Visualización de la ruta {pathname}</div>
    </Layout>
  )
}

export default page
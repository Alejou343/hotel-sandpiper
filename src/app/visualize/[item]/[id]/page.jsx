"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const page = () => {

    const pathname = usePathname()

  return (
    <div>Visualización del employment {pathname}</div>
  )
}

export default page
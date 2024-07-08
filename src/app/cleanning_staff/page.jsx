"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'

const index = () => {

  const pathname = usePathname()

  return (
    <div>
      {/* <Navbar /> */}
      <div className='flex'>
        <Sidebar />
        <div className="table-container mx-auto my-4">
          Create {pathname}
        </div>
      </div>
      {/* {user?.user_roles == 'admin' ? null : <LimitButton />} */}
    </div>
  )
}

export default index
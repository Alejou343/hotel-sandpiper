"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import RoomCreateForm from '@/containers/RoomCreateForm'

const page = () => {

  const pathname = usePathname()

  return (
    <div>
      {/* <Navbar /> */}
      <div className='flex'>
        <Sidebar />
        <div className="table-container mx-auto my-4 flex justify-center items-center">
          <RoomCreateForm />
        </div>
      </div>
      {/* {user?.user_roles == 'admin' ? null : <LimitButton />} */}
    </div>
  )
}

export default page
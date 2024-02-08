import React from 'react'
import Sidebar from '@/components/Sidebar'

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className='flex'>
        <Sidebar />
        <div className="table-container mx-auto my-4">
          Create Item
        </div>
      </div>
      {/* {user?.user_roles == 'admin' ? null : <LimitButton />} */}
    </div>
  )
}

export default page
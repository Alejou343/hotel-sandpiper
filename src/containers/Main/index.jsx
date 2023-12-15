import React from 'react'
import Sidebar from '@/components/Sidebar'
import InmTable from '@/components/InmTable'
import LeadTable from '@/components/LeadTable'

const index = () => {

  return (
    <div className='flex'>
        <Sidebar />
        {/* <div className="mx-auto my-20">
            <InmTable /> 
        </div> */}
        <div className="mx-auto my-20">
            <LeadTable />
        </div>
    </div>
  )
}

export default index
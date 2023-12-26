"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import ComercialInfo from '@/containers/ComercialInfo'
import axios from 'axios'
import Loader from '@/components/Loader'

const Page = ({ params }) => {

  const [values, setValues] = React.useState(null)
  const [loaderActive, setLoaderActive] = React.useState(false)

  React.useEffect(() => {
    setLoaderActive(true)
    axios.get(`${process.env.BACK_LINK}/api/comercialById/${params.id}`)
    .then((result) => {
      setValues(result.data[0])
      setLoaderActive(false)
    })
    .catch((error) => { 
      console.error(error) 
      setLoaderActive(false)
    })
  }, [])

  return (
    <div className='flex'>
      <Loader active={loaderActive} />
      <Sidebar />
      <div className="mx-auto my-20">
        <ComercialInfo props={values} />
      </div>
    </div>
  )
}

export default Page
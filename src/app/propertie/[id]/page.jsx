"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import PropertieInfo from '@/containers/PropertieInfo'
import axios from 'axios'
import Loader from '@/components/Loader'

const Page = ({ params }) => {

  const [props, setProps] = React.useState({})
  const [loaderActive, setLoaderActive] = React.useState(false)

  React.useEffect(() => {
    setLoaderActive(true)
    axios.get(`${process.env.BACK_LINK}/api/residenciaById/${params.id}`)
    .then((result) => {
      setProps(result.data[0])
      console.log(result.data[0])
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
        <PropertieInfo props={props} />
      </div>
    </div>
  )
}

export default Page
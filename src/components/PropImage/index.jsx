import React from 'react'
import Image from 'next/image'

const Index = ({url}) => {

  return (
    <Image src={url} alt="propertie.png" width={300} height={300} />
  )
}

export default Index
import React from 'react'

const Index = ({title, value}) => {
  return (
    <div className="flex">
        <h1 className="font-bold">{title} :</h1>
        <p className=""> {value} </p>
    </div>
  )
}

export default Index
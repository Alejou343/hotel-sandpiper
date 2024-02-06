import React from 'react'

const Index = ({ name, checked, handleChecked }) => {
  return (
    <div className='flex justify-between w-1/2 mx-auto'>
        <input type='checkbox' checked={checked} onChange={handleChecked} />
        <p className='text-sm my-2 text-center font-semibold'> {name} </p>
    </div>
  )
}

export default Index
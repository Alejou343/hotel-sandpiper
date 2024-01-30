"use client"
import React from 'react'
import Image from 'next/image'
import LimitLeads from '@/components/LimitLeads'
import ModalGeneral from '@/containers/ModalGeneral'

const Index = () => {

  const [isHover, setIsHover] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <>
      {openModal && 
      <ModalGeneral state={openModal} setState={setOpenModal} className='p-4'>
        <LimitLeads setState={setOpenModal} />
      </ModalGeneral>}
      <div className='flex'>
        {isHover && <p className='border text-sm border-primary absolute right-[5%] bottom-9 p-2 rounded-lg bg-auxiliar'> Definir límite mensual de Leads </p>}
      <Image 
        src="/assets/warning.svg" 
        alt="limit-modal.svg" 
        width={50} 
        height={50} 
        className="absolute bottom-8 right-8 cursor-pointer" 
        onClick={() => setOpenModal(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      </div>
    </>
  )
}

export default Index
"use client"
import React from 'react'
import Image from 'next/image'
import ModalGeneral from '@/containers/ModalGeneral'
import LimitLeads from '@/components/LimitLeads'

const Index = () => {

  const [openModal, setOpenModal] = React.useState(false)

  return (
    <>
      {openModal && <ModalGeneral state={openModal} setState={setOpenModal}>
        <LimitLeads />
      </ModalGeneral>}
      <Image 
        src="/assets/warning.png" 
        alt="limit-modal.png" 
        width={50} 
        height={50} 
        className="absolute bottom-8 right-8 cursor-pointer" 
        onClick={() => setOpenModal(true)}
      />
    </>
  )
}

export default Index
"use client"
import React from 'react'
import Main from '@/containers/Main'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'


const Page = () => {

  const router = useRouter()

  // React.useEffect(() => {
  //   try {
  //     const userLogged = Cookies.get('SessionInfo')
  //     if (!userLogged) {
  //       // router.push('/')
  //       console.error('Usuario no logeado')
  //     }
  //   } catch (error) {
  //       console.error(error)
  //   }
  // }, [])

  return (
    <Main />
  )
}

export default Page
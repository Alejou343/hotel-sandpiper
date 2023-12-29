"use client"
import React from 'react'
import Main from '@/containers/Main'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'


const Page = () => {

  const router = useRouter()

  React.useEffect(() => {
    const userLogged = Cookies.get('User')      // --> Esto debería consumir el objeto de SessionInfo
    if (!userLogged) {
      router.push('/')
    }
  }, [])

  return (
    <Main />
  )
}

export default Page
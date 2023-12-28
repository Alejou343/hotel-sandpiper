"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import LoginSection from '@/components/LoginSection'
import PasswordSection from '@/components/PasswordSection';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import Cookies from 'js-cookie'


const Index = () => {

    const router = useRouter()
    const [loaderActive, setLoaderActive] = React.useState(false)

    const [formData, setFormData] = React.useState({
        Correo: '',
        Contraseña: '',
    }); 


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const onLoginSubmit = (e) => {
        e.preventDefault()
        Cookies.set('User', JSON.stringify({...formData, Idinmobiliaria: 3}))
        setLoaderActive(true)
        // setTimeout(() => {
        //     setLoaderActive(false)
        //     router.push('/main')
        // }, 2000);
        axios.post(`${process.env.BACK_LINK}/api/loginUser`, formData)
        // .then((response) => console.log(response.data))
        .then((response) => Cookies.set('Token', response.data?.accesToken))
        .then(() => setLoaderActive(false))
        .then(() => router.push('/main'))
        .catch(() => setLoaderActive(false))
        .catch((error) => console.error(error))
    }

  return (
    <form className="flex flex-col gap-4" onSubmit={onLoginSubmit}>
        <Loader active={loaderActive} />
        <LoginSection  
            label="Correo electrónico"
            type="text"
            id="Correo"
            placeholder="Correo electrónico"
            onChange={handleInputChange}
            value={formData.Correo}
        />
        <PasswordSection  
            id="Contraseña"
            label="Contraseña"
            placeholder="**********"
            onChange={handleInputChange}
            value={formData.Contraseña}
        />
        <Button 
            onClick={() => console.log("Datos a enviar --> ", formData)} 
            type="submit" 
            className="bg-blue-400"
        >
            Ingresar
        </Button>
    </form>
  )
}

export default Index
"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import LoginSection from '@/components/LoginSection'
import PasswordSection from '@/components/PasswordSection';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';
import Cookies from 'js-cookie';
import SideHeader from '@/components/SideHeader';


const Index = () => {

    const router = useRouter()
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [alert, setAlert] = React.useState('')

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

    const eventLogin = (response) => {
        Cookies.set('SessionInfo', JSON.stringify(response.data))
        setLoaderActive(false)
        router.push('/main')
    }

    const eventLoginFailed = (error) => {
        setLoaderActive(false)
        setAlert(error?.response?.data)
    }

    const onLoginSubmit = (e) => {
        setAlert('')
        e.preventDefault()
        setLoaderActive(true)
        axios.post(`${process.env.BACK_LINK}/api/loginUser`, formData)
        .then((response) => eventLogin(response))
        .catch((error) => eventLoginFailed(error))
    }

  return (
    <form className="flex flex-col gap-4 bg-auxiliar p-6 rounded-lg" onSubmit={onLoginSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <LoginSection  
            label="Correo electrónico"
            className={"w-full"}
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
        <p className='text-xs text-red-500 text-center'> {alert} </p>
        <Button 
            onClick={() => console.log("Datos a enviar --> ", formData)} 
            type="submit" 
            className="bg-secondary"
        >
            Ingresar
        </Button>
    </form>
  )
}

export default Index
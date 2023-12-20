"use client"
import React from 'react';
import Button from '@/components/Button';
import LoginSection from '@/components/LoginSection'
import PasswordSection from '@/components/PasswordSection';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';


const Index = () => {

    const router = useRouter()
    const [loaderActive, setLoaderActive] = React.useState(false)

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
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
        localStorage.setItem('User', JSON.stringify({...formData, Idinmobiliaria: "1024001"}))
        setLoaderActive(true)
        setTimeout(() => {
            setLoaderActive(false)
            router.push('/main')
        }, 2000);
    }

  return (
    <form className="flex flex-col gap-4" onSubmit={onLoginSubmit}>
        <Loader active={loaderActive} />
        <LoginSection  
            label="Correo electrónico"
            type="text"
            id="email"
            placeholder="Correo electrónico"
            onChange={handleInputChange}
            value={formData.username}
        />
        <PasswordSection  
            id="password"
            label="Contraseña"
            placeholder="**********"
            onChange={handleInputChange}
            value={formData.password}
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
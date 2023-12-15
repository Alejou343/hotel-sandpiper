"use client"
import React from 'react';
import Loader from '@/components/Loader';
import Button from '@/components/Button';
import FormSection from '@/components/FormSection';
import PasswordSection from '@/components/PasswordSection';
import { useRouter } from 'next/navigation';


const index = () => {

    const router = useRouter()

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
        localStorage.setItem('User', JSON.stringify(formData))
        setTimeout(() => {
            router.push('/main')
        }, 2000);
    }

  return (
    <form className="flex flex-col gap-4" onSubmit={onLoginSubmit}>
        <FormSection  
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
            children="Ingresar" 
            onClick={() => console.log("Datos a enviar --> ", formData)} 
            type="submit" 
            className="bg-blue-500"
        />
    </form>
  )
}

export default index
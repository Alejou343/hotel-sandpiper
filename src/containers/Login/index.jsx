"use client"
import React from 'react';
import Loader from '@/components/Loader';
import Button from '@/components/Button';
import FormSection from '@/components/FormSection';
import PasswordSection from '@/components/PasswordSection';


const index = () => {

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

  return (
    <form className="flex flex-col gap-4">
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
            type="button" 
        />
    </form>
  )
}

export default index
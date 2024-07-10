"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import SideHeader from '@/components/SideHeader';
import FormSection from '@/components/FormSection';

const Index = () => {

    const router = useRouter()
    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [formData, setFormData] = React.useState({
        user_name: '',
    });     

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const eventForgot = (response) => {
        setLoaderActive(false)
        setAlert(response?.data?.data?.message)
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }
    
    const eventForgotFailed = (error) => {
        setLoaderActive(false)
        setWarning(error?.response?.data?.error)
    }

    const onForgotSubmit = (e) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        setLoaderActive(true)
        // axios.post(`${process.env.BACK_LINK}/api/forgotpassword`, formData)
        // .then((response) => eventForgot(response))
        // .catch((error) => eventForgotFailed(error))
    }

  return (
    <form className="flex flex-col bg-auxiliar p-6 rounded-lg" onSubmit={onForgotSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <FormSection  
            label="Nombre de usuario"
            className={"w-full"}
            type="text"
            id="user_name"
            placeholder="Nombre de usuario"
            onChange={handleInputChange}
            value={formData.user_name}
        />
        <p className='text-xs my-2 text-primary text-center'> {alert} </p>
        <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
        <Button 
            type="submit" 
            className="bg-secondary"
        >
            Recuperar
        </Button>
    </form>
  )
}

export default Index
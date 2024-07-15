"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import SideHeader from '@/components/SideHeader';
import PasswordSection from '@/components/PasswordSection';

const Index = () => {

    const pathname = usePathname()
    const router = useRouter()
    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [loaderActive, setLoaderActive] = React.useState(false)

    const [formData, setFormData] = React.useState({
        token: pathname.replace('/auth/resetpassword/', ''),
        newPassword: ''
    }); 

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const eventRecovery = (response) => {
        setLoaderActive(false)
        setAlert(response?.data?.data?.message)
        setTimeout(() => {
            router.push('/')
        }, 300);
    }
    
    const eventRecoveryFailed = (error) => {
        setLoaderActive(false)
        setWarning(error?.response?.data?.error)
    }

    const onRecoverySubmit = (e) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        setLoaderActive(true)
        // axios.post(`${process.env.BACK_LINK}/api/auth/resetpassword`, formData)
        // .then((response) => eventRecovery(response))
        // .catch((error) => eventRecoveryFailed(error))
    }

  return (
    <form className="flex flex-col bg-auxiliar p-6 rounded-lg" onSubmit={onRecoverySubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <PasswordSection 
            id="newPassword"
            placeholder="********"
            label="Nueva contraseña"
            onChange={handleInputChange}
        />
        <p className='text-xs my-2 text-primary text-center'> {alert} </p>
        <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
        <Button 
            type="submit" 
            className="bg-secondary"
        >
            Actualizar
        </Button>
    </form>
  )
}

export default Index
"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter, usePathname } from 'next/navigation';
import { roles } from '@/utils/rolesObj';
import FormSelect from '@/components/FormSelect';
import SideHeader from '@/components/SideHeader';
import FormSection from '@/components/FormSection';

const Index = () => {

    const router = useRouter()
    const pathName = usePathname()
    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [loaderActive, setLoaderActive] = React.useState(false)
    const { options, endpoint } = roles[`${pathName?.split('/')[1]}`]
    const [formData, setFormData] = React.useState({
        fullName: '',
        phone: '',
        email: '',
        role: ''
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
            router.push('/main')
        }, 300);
    }
    
    const eventForgotFailed = (error) => {
        setLoaderActive(false)
        setWarning(error?.response?.data?.error)
    }

    const onFormatSubmit = (e) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        setLoaderActive(true)
        axios.post(`${process.env.BACK_LINK}/api/${endpoint}`, formData)
        .then((response) => eventForgot(response))
        .catch((error) => eventForgotFailed(error))
    }

  return (
    <form className="flex flex-col bg-auxiliar p-4 rounded-lg w-[18rem]" onSubmit={onFormatSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <FormSection type="text" id="fullName" placeholder="John Doe" label="Nombre completo" onChange={handleInputChange} value={formData.fullName} />
        <FormSection type="text" id="phone" placeholder="3001234567" label="Número de celular" onChange={handleInputChange} value={formData.phone} />
        <FormSection type="text" id="email" placeholder="johndoe@mail.com" label="Correo electrónico" onChange={handleInputChange} value={formData.email} />
        <FormSelect list={options} id="role" label="Rol de usuario" onChange={handleInputChange} value={formData.role} className={{select: 'w-1/2'}} />
        <p className='text-xs my-2 text-primary text-center'> {alert} </p>
        <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
        <Button type="submit" className="bg-secondary"> Crear </Button>
    </form>
  )
}

export default Index
"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter, usePathname } from 'next/navigation';
import FormSelect from '@/components/FormSelect';
import SideHeader from '@/components/SideHeader';
import FormSection from '@/components/FormSection';
import { roles } from '@/utils/rolesObj';

const Index = () => {

    const router = useRouter()
    const pathName = usePathname()
    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [formData, setFormData] = React.useState({
        hotelName: '',
        number: '',
        name_category_room: ''
    });   

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    // const eventForgot = (response) => {
    //     setLoaderActive(false)
    //     setAlert(response?.data?.data?.message)
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000);
    // }
    
    // const eventForgotFailed = (error) => {
    //     setLoaderActive(false)
    //     setWarning(error?.response?.data?.error)
    // }

    const onFormatSubmit = (e) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        // setLoaderActive(true)
        console.log('DATOS A ENVIAR --> ', formData)
        // axios.post(`${process.env.BACK_LINK}/api/forgotpassword`, formData)
        // .then((response) => eventForgot(response))
        // .catch((error) => eventForgotFailed(error))
    }

  return (
    <form className="flex flex-col bg-auxiliar p-4 rounded-lg w-[18rem]" onSubmit={onFormatSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <FormSection type="text" id="hotelName" placeholder="Hotel Sandpiper" label="Nombre Hotel" onChange={handleInputChange} value={formData.hotelName} />
        <FormSection type="text" id="number" placeholder="1001" label="Número habitación" onChange={handleInputChange} value={formData.number} />
        <FormSelect list={roles[`${pathName?.split('/')[1]}`]} id="name_category_room" label="Categoría" onChange={handleInputChange} value={formData.name_category_room} className={{select: 'w-1/2'}} />
        <p className='text-xs my-2 text-primary text-center'> {alert} </p>
        <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
        <Button type="submit" className="bg-secondary"> Crear </Button>
    </form>
  )
}

export default Index